# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set environment variables for Django
ENV PYTHONUNBUFFERED 1
ENV DJANGO_SETTINGS_MODULE config.settings

# Set the working directory in the container
WORKDIR /app

# Copy the Pipfile and Pipfile.lock to the container
COPY Pipfile Pipfile.lock ./

# Install pipenv and project dependencies
RUN pip install pipenv && pipenv install --deploy --ignore-pipfile

# Copy the rest of the application to the container
COPY . ./

# Expose port 8000 for the Django server
EXPOSE 8000

# Start the Django server
CMD ["pipenv", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
