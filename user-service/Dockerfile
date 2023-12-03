# Use the official Python 3.9 slim image based on Debian Buster
FROM python:3.9.16-slim-buster

# Set the working directory within the container to /code
WORKDIR /code

# Copy requirements.txt to the working directory
COPY ./requirements.txt /code/requirements.txt

# Install Python dependencies from requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy the entire application code to the working directory
COPY . /code/

# Define the default command to run when the container starts
CMD ["uvicorn", "app:app", "--reload", "--host", "0.0.0.0", "--port", "8080"]
