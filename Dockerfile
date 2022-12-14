# syntax=docker/dockerfile:1

FROM node

RUN mkdir /frontend

WORKDIR /frontend

COPY . /frontend/

# install dependencies
RUN npm i
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
