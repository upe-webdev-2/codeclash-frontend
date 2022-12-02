# syntax=docker/dockerfile:1

FROM alpine:3.14

RUN mkdir /frontend

WORKDIR /frontend

COPY . /frontend/

RUN apk add nodejs

RUN npm i

RUN next build

RUN next start
