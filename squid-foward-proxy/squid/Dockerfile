FROM alpine:latest

RUN apk --no-cache add squid && \
    mkdir -p /ect/squid/conf.d

ADD ./conf.d/squid.conf /etc/squid/squid.conf

EXPOSE 3128
CMD ["/usr/sbin/squid", "-NYCd 1"]
