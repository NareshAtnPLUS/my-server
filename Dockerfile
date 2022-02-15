# syntax=docker/dockerfile:1

FROM node:12-alpine

ENV PORT=5000
EXPOSE $PORT

WORKDIR /app

COPY . .

RUN npm install 

CMD [ "npm","start" ]