#ETAPA 1
FROM node:20 AS construccion

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


#ETAPA 2
FROM nginx:alpine AS empaquetado

COPY --from=construccion /usr/app/dist /usr/share/nginx/html


WORKDIR /usr/share/nginx/html

EXPOSE 80