# syntax=docker/dockerfile:1

FROM ubuntu:latest

RUN mkdir /frontend

WORKDIR /frontend

COPY . /frontend/

RUN apk apt nodejs npm 

RUN npm i

RUN next build

RUN next start
