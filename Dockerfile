# syntax=docker/dockerfile:1

FROM ubuntu:latest

RUN mkdir /frontend

WORKDIR /frontend

COPY . /frontend/

RUN sudo apt install nodejs

RUN sudo apt install npm

RUN npm i

RUN next build

RUN next start
