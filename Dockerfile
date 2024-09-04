FROM node:20.16.0-alpine as angular
WORKDIR /app
COPY package*.json ./
RUN npm onstall
RUN npm run build
