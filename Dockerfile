# FROM node:18.15.0 as node

# Stage 1

FROM node:alpine AS node
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build-prod

# Stage 2

FROM nginx:alpine
COPY --from=node /app/dist/simple-med /usr/share/nginx/html
EXPOSE 80

