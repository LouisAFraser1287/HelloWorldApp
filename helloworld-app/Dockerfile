FROM registry.access.redhat.com/ubi8/nodejs-22 AS build
WORKDIR /opt/app-root/src
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM registry.access.redhat.com/ubi8/nginx-120
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

