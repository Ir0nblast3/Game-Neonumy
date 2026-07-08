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

        player = data.get("player")
        score = int(data.get("score", 0))

        if Score.objects.filter(player=player, score=score).exists():
            return JsonResponse({
                "success": True,
                "saved": False,
                "duplicate": True
            })

        # menos de 10 scores → guarda direto
        if Score.objects.count() < 10:
            Score.objects.create(player=player, score=score)
            return JsonResponse({"success": True, "saved": True})

        # pior score do top 10
        lowest_top = Score.objects.order_by("-score")[9].score

        # só entra se for melhor
        if score > lowest_top:
            # remove o pior
            Score.objects.order_by("-score")[9].delete()

            # adiciona novo
            Score.objects.create(player=player, score=score)

            return JsonResponse({"success": True, "saved": True})

        return JsonResponse({"success": True, "saved": False})

    return JsonResponse({"success": False}, status=405)


def top10(request):
    scores = Score.objects.order_by("-score")[:10]

    data = [
        {
            "player": s.player,
            "score": s.score
        }
        for s in scores
    ]

    return JsonResponse(data, safe=False)