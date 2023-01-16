FROM node:16.17.1-alpine3.16 as build
WORKDIR /usr/app
COPY . /usr/app
ARG token
ENV NPM_GITHUB_TOKEN=$token
RUN npm ci
RUN npm run build

FROM nginx:1.23.1-alpine
EXPOSE 80
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]