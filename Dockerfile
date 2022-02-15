# syntax=docker/dockerfile:1

FROM public.ecr.aws/lambda/nodejs:latest

ENV PORT=5000
EXPOSE $PORT

WORKDIR /app

COPY . .

RUN npm install 

CMD [ "npm","start" ]