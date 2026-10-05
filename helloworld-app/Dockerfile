FROM registry.access.redhat.com/ubi10/nodejs-24 AS build
WORKDIR /opt/app-root/src
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

COPY . .
RUN npm run build


