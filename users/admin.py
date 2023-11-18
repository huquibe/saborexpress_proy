from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from users.models import user

@admin.register(user)
class UserAdmin(BaseUserAdmin):
    pass
    
    