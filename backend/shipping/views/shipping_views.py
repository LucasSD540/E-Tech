from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from shipping.utils import calculate_freight_data

@api_view(["POST"])
def calculate_freight(request):
    try:
        order_data = request.data.get("orderData", {})
        items = order_data.get("items", [])
        cep_destino = order_data.get("cep_destino")

        result = calculate_freight_data(items, cep_destino)
        if "error" in result:
            return Response({"error": result["error"]}, status=400)

        return Response({
            "valor_frete": result["valor_frete"],
            "prazo_dias": result["prazo_dias"]
        })

    except Exception as e:
        return Response({"error": str(e)}, status=500)
