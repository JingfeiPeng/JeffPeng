FROM node:11.15.0-alpine as build-step

WORKDIR /app

COPY package.json ./

RUN npm install 

COPY . .

RUN npm run build

# get a server
FROM nginx:1.18.0-alpine as prod-stage

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-step /app/dist/JeffWeb /usr/share/nginx/html

EXPOSE 80
CMD ["nginx","-g", "daemon off;"]