# syntax=docker/dockerfile:1

FROM centos:8 

RUN mkdir /frontend

WORKDIR /frontend

COPY . /frontend/

RUN sudo dnf install nodejs

RUN npm i

RUN next build

RUN next start
