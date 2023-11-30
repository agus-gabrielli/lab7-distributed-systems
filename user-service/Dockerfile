FROM python:3.9.16-slim-buster

# 
WORKDIR /code

# 
COPY ./requirements.txt /code/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# 
COPY . /code/

# 
CMD ["uvicorn", "app:app", "--reload", "--host", "0.0.0.0", "--port", "8080"]