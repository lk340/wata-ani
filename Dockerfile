FROM python:latest

RUN mkdir /api

WORKDIR /api

COPY requirements.txt /api/

RUN pip3 install -r requirements.txt

COPY . /code/
