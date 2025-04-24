import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from product.models import Product

@api_view(["POST"])
def calculate_freight(request):
    try:
        order_data = request.data.get("orderData", {})
        items = order_data.get("items", [])

        if not items:
            return Response({"error": "The cart is empty"}, status=400)

        valor_pedido = 0
        peso_total = 0

        for item in items:
            product = item.get("product")
            quantity = item.get("quantity")

            if not product or not quantity:
                return Response({"error": "Produt or quantity invalid."}, status=400)

            try:
                product = Product.objects.get(id=product)
            except Product.DoesNotExist:
                return Response({"error": "Product not found."}, status=404)

            valor_pedido += float(product.get_price()) * quantity
            peso_total += float(product.weight) * quantity

        payload = {
            "cep_origem": "71966-700",
            "cep_destino": order_data.get("cep_destino"),
            "peso_total": peso_total,
            "valor_pedido": valor_pedido
        }

        response = requests.post("http://localhost:8080/freight/calculate/", json=payload)

        if response.status_code != 200:
            return Response({"error": "Erro ao consultar a API de frete."}, status=500)

        freight_data = response.json()
        return Response({
            "valor_frete": freight_data["valor_frete"],
            "prazo_dias": freight_data["prazo_dias"]
        })

    except Exception as e:
        return Response({"error": str(e)}, status=500)
