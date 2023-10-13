import boto3
from rest_framework import generics
from rest_framework.response import Response
from django.conf import settings
from .serializers import ImageSerializer
from rest_framework.permissions import AllowAny


class ListImagesAPIView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = ImageSerializer

    def get(self, request, *args, **kwargs):
        s3_client = boto3.client('s3',
                                 aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                                 aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY
                                 )

        bucket_name = 'gallery-react'
        prefix = 'Public/'

        vertical_images = []
        horizontal_images = []

        objects = s3_client.list_objects_v2(Bucket=bucket_name, Prefix=prefix)

        for obj in objects.get('Contents', []):
            presigned_url = s3_client.generate_presigned_url('get_object',
                                                             Params={'Bucket': bucket_name,
                                                                     'Key': obj['Key']},
                                                             ExpiresIn=3600)  # URL expires in 1 hour

            if "vertical" in obj['Key']:
                vertical_images.append(presigned_url)
            elif "horizontal" in obj['Key']:
                horizontal_images.append(presigned_url)

        data = {
            'vertical': vertical_images,
            'horizontal': horizontal_images
        }
        return Response(data)
