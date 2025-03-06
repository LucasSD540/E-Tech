from django.http import JsonResponse
from rest_framework.decorators import api_view
import requests
from decouple import config

def get_melhor_envio_token():
    client_id = config("MELHOR_ENVIO_CLIENT_ID")
    client_secret = config("MELHOR_ENVIO_CLIENT_SECRET")

    url = "https://sandbox.melhorenvio.com.br/api/v2/me/authenticate"
    
    data = {
        "client_id": client_id,
        "client_secret": client_secret
    }

    response = requests.post(url, json=data)
    
    if response.status_code == 200:
        token = response.json().get("access_token")
        return token
    else:
        print("Erro ao obter token:", response.json())
        return None

@api_view(["POST"])
def calculate_shipping(request):
  destination_cep = request.data.get("destination_cep")

  if not destination_cep:
    return JsonResponse({"error": "destination cep is required"}, status=400)

  api_key = get_melhor_envio_token()

  if not api_key:
        return JsonResponse({"error": "Failed to retrieve API token"}, status=500)

  url = "https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate"

  headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}",
    "User-Agent": "Aplicação lucas.souzaduarte.73@gmail.com"
  }

  payload = {
    "from": {
        "postal_code": "96020360"
    },
    "to": {
        "postal_code": destination_cep
    },
    "package": {
        "height": 4,
        "width": 12,
        "length": 17,
        "weight": 0.3
    },
    "options": {
        "receipt": False,
        "own_hand": False
    },
    "services": "1,2,18"
  }

  response = requests.post(url, json=payload, headers=headers)

  if response.status_code == 200:
    return JsonResponse(response.json(), safe=False)
  else:
    return JsonResponse({"error": "calculate shipping failed"}, status=response.status_code, safe=False)
