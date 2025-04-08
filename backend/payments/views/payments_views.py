import stripe
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from decouple import config

stripe.api_key = settings.STRIPE_SECRET_KEY

@api_view(["POST"])
def create_checkout_session(request):
    try:
        data = request.data
        email = data.get('email')
        
        items = data.get("items", [])

        if not items:
            return JsonResponse({"error": "The cart is empty"}, status=400)

        line_items = [
            {
                "price_data": {
                    "currency": "brl",
                    "product_data": {"name": item["name"]},
                    "unit_amount": item["price"],
                },
                "quantity": item["quantity"],
            }
            for item in items
        ]

        session = stripe.checkout.Session.create(
            payment_method_types=["card"],
            line_items=line_items,
            mode="payment",
            success_url="http://localhost:3000/success/",
            cancel_url="http://localhost:3000/",
        )

        send_mail(
                'Pagamento confirmado',
                'Obrigado por comprar conosco',
                config("EMAIL_HOST_USER"),
                [email],
                fail_silently=False,
            )

        return JsonResponse({"checkout_url": session.url})
    
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
