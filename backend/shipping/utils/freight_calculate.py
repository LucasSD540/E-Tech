import requests
from product.models import Product

def calculate_freight_data(items, cep_destino):
    if not items:
        return {"error": "The cart is empty"}

    valor_pedido = 0
    peso_total = 0

    for item in items:
        product_id = item.get("product")
        quantity = item.get("quantity")

        if not product_id or not quantity:
            return {"error": "Product or quantity invalid."}

        try:
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            return {"error": "Product not found."}

        valor_pedido += float(product.get_price()) * quantity
        peso_total += float(product.weight) * quantity

    payload = {
        "cep_origem": "71966-700",
        "cep_destino": cep_destino,
        "peso_total": peso_total,
        "valor_pedido": valor_pedido
    }

    response = requests.post("http://localhost:8080/freight/calculate/", json=payload)

    if response.status_code != 200:
        return {"error": "Erro ao consultar a API de frete."}

    return response.json()
