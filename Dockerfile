FROM node:20-alpine AS hooks
RUN apk add --no-cache git
WORKDIR /app

FROM node:20-alpine AS build
WORKDIR /app

ARG PUBLIC_URL=/
ENV PUBLIC_URL=${PUBLIC_URL}

COPY package.json package-lock.json ./
RUN HUSKY=0 npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
