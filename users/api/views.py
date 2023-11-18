from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser

from users.models import user
from users.api.serializers import UserSerializer

class UserApiViewSet (ModelViewSet):
    permission_class = [IsAdminUser]
    serializer_class = UserSerializer
    queryset = user.objects.all()