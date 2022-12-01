# syntax=docker/dockerfile:1

FROM centos:8 

RUN mkdir /frontend

WORKDIR /frontend

COPY . /frontend/

RUN sudo yum install npm

RUN npm i

RUN next build

RUN next start