from django.http import JsonResponse
import boto3
from django.conf import settings


def list_public_images(request):
    s3_client = boto3.client('s3',
                             aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                             aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY)

    bucket_name = 'gallery-react'
    prefix = 'Public/'  # This specifies the folder in the bucket

    # List objects in the 'public' folder
    objects = s3_client.list_objects_v2(Bucket=bucket_name, Prefix=prefix)

    vertical_images = []
    horizontal_images = []

    for obj in objects.get('Contents', []):
        # Generate pre-signed URL for each object
        presigned_url = s3_client.generate_presigned_url('get_object',
                                                         Params={'Bucket': bucket_name,
                                                                 'Key': obj['Key']},
                                                         ExpiresIn=3600)  # URL expires in 1 hour

        # Separate images based on naming or folder structure
        if "vertical" in obj['Key']:
            vertical_images.append(presigned_url)
        elif "horizontal" in obj['Key']:
            horizontal_images.append(presigned_url)

    return JsonResponse({
        'vertical': vertical_images,
        'horizontal': horizontal_images
    })
