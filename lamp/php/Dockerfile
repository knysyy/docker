FROM centos:6.10

ENV DEBIAN_FRONTEND=nointeractive

RUN yum update -y && \
    rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm

RUN yum install -y \
    httpd \
    php \
    php-mysql \
    php-devel \
    php-pecl-memcache \
    php-xml \
    gcc && \
    pecl install xdebug-2.2.7

COPY ./conf/xdebug.ini /etc/php.d/
COPY ./conf/php.ini /etc/

EXPOSE 80

ENV DEBIAN_FRONTEND=

ENTRYPOINT [ "httpd", "-D", "FOREGROUND" ]
