#FROM node:8.14-alpine as node
#
#WORKDIR /usr/src/app
#
#COPY package*.json ./
#
#RUN npm install
#
#COPY . .
#
#RUN npm run build
#
## Stage 2
#FROM nginx:1.13.12-alpine
#
#RUN rm -rf /usr/share/nginx/html/*
#
#COPY --from=node /usr/src/app/dist/iprwc /usr/share/nginx/html
#
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Stage 0, "build-stage", based on Node.js, to build and compile Angular

FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
