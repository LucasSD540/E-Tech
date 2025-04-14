import stripe
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from decouple import config
from product.models import Product

stripe.api_key = settings.STRIPE_SECRET_KEY

@api_view(["POST"])
def create_checkout_session(request):
    try:
        data = request.data
        email = request.user.email
        
        items = data.get("items", [])

        if not items:
            return JsonResponse({"error": "The cart is empty"}, status=400)

        line_items = []
        for item in items:
            product = item.get("product")
            quantity = item.get("quantity")

            if not product or not quantity:
                return JsonResponse({"error": "Produto ou quantidade inválidos."}, status=400)

            try:
                product = Product.objects.get(id=product)
            except Product.DoesNotExist:
                return JsonResponse({"error": "Produto não encontrado."}, status=404)

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
