FROM nginx:latest

COPY ./certs/ /etc/nginx/certs/
COPY ./conf.d/ssl.conf /etc/nginx/conf.d/ssl.conf

EXPOSE 443
EXPOSE 80
