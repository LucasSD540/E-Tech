import stripe
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from rest_framework.decorators import api_view

stripe.api_key = settings.STRIPE_SECRET_KEY

@api_view(["POST"])
def create_checkout_session(request):
    try:
        data = request.data
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
            cancel_url="http://localhost:3000/canceled/",
        )

        return JsonResponse({"checkout_url": session.url})
    
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
