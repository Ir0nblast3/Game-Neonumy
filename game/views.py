from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Score
import json

def index(request):
    return render(request, 'index.html')

@csrf_exempt
def add_score(request):
    if request.method == "POST":
        data = json.loads(request.body)

        Score.objects.create(
            player=data["player"],
            score=data["score"]
        )

        return JsonResponse({
            "success": True
        })

    return JsonResponse({
        "success": False
    })


def top10(request):
    scores = Score.objects.all()[:10]

    return JsonResponse([
        {
            "player": s.player,
            "score": s.score
        }
        for s in scores
    ], safe=False)