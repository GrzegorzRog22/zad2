FROM node:alpine AS build1

LABEL maintainer="Grzegorz Rogowski"

WORKDIR /app

COPY ./package.json ./
COPY ./index.js ./
COPY package-lock.json ./
COPY node_modules ./

RUN npm install

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY --from=build1 /app ./

RUN apk add --update nodejs npm && apk add --update curl

EXPOSE 8080

HEALTHCHECK --interval=5s --timeout=1s \
  CMD curl -f http://localhost:8080/ || exit 1

CMD ["npm", "start", "-g", "daemon off"]
