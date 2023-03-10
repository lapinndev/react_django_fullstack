from django.contrib import admin

from .models import YouTubeVideo


class PostAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'channel'
    )


admin.site.register(YouTubeVideo, PostAdmin)
