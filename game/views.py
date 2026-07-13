from django.shortcuts import render
from django.http import JsonResponse
from .models import Score
import json

def index(request):
    return render(request, 'index.html')


def add_score(request):
    if request.method == "POST":
        Score.objects.create(
            player=request.POST["player"],
            score=request.POST["score"]
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