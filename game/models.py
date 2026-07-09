from django.db import models

class Score(models.Model):
    player = models.CharField(max_length=15)
    score = models.IntegerField()

    class Meta:
        ordering = ["-score"]

    def __str__(self):
        return f"{self.player} - {self.score}"