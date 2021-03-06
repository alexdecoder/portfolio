FROM node:lts-alpine3.14 as build
WORKDIR /portfolio
COPY ./ /portfolio/
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /portfolio/dist/portfolio /usr/share/nginx/html
EXPOSE 80