import stripe
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from decouple import config
from product.models import Product
from shipping.utils import calculate_freight_data

stripe.api_key = settings.STRIPE_SECRET_KEY

@api_view(["POST"])
def create_checkout_session(request):
    try:
        data = request.data
        email = request.user.email
        cep_destino = data.get("cep_destino")
        
        items = data.get("items", [])

        if not items or not cep_destino:
            return JsonResponse({"error": "The cart is empty or CEP is missing"}, status=400)

        freight_calculated = calculate_freight_data(items, cep_destino)
        if "error" in freight_calculated:
            return JsonResponse({"error": freight_calculated["error"]}, status=500)

        freight_value = float(freight_calculated["valor_frete"])

        line_items = []
        for item in items:
            product = item.get("product")
            quantity = item.get("quantity")

            if not product or not quantity:
                return JsonResponse({"error": "Produt or quantity invalid."}, status=400)

            try:
                product = Product.objects.get(id=product)
            except Product.DoesNotExist:
                return JsonResponse({"error": "Produt not found."}, status=404)

            unit_amount = int(product.get_price() * 100)
            line_items.append({
                "price_data": {
                    "currency": "brl",
                    "product_data": {
                        "name": product.productName
                    },
                    "unit_amount": unit_amount
                },
                "quantity": quantity
            })

        line_items.append({
            "price_data": {
                "currency": "brl",
                "product_data": {
                    "name": "Frete"
                },
                "unit_amount": int(freight_value * 100)
            },
            "quantity": 1
        })

        session = stripe.checkout.Session.create(
            payment_method_types=["card"],
            line_items=line_items,
            mode="payment",
            success_url="http://localhost:3000/success/",
            cancel_url="http://localhost:3000/",
            customer_email=email
        )

        return JsonResponse({"checkout_url": session.url})
    
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
