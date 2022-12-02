# syntax=docker/dockerfile:1

FROM ubuntu:latest

RUN mkdir /frontend

WORKDIR /frontend

COPY . /frontend/

# install nodejs
RUN sudo apt update
RUN sudo apt install nodejs
RUN sudo apt install npm

# install dependencies
RUN npm i
RUN next build
RUN next start
