FROM registry.access.redhat.com/ubi10/nodejs-24 AS build

WORKDIR /opt/app-root/src

COPY package*.json ./

RUN npm ci

COPY . . 

RUN npm run build

FROM registry.access.redhat.com/ubi9/nginx-124

COPY --from=build /opt/app-root/src/build /opt/app-root/src

EXPOSE 8080


