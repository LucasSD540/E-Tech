from django.http import JsonResponse

def home_page_view(request):
    return JsonResponse({
        "message": "API running",
        "status": "ok",
        "version": "1.0.0"
    })