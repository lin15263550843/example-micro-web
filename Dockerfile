FROM registry1.cosmoplat.com/cosmoplat/nginx:1.19.2
COPY dist/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/
RUN echo "Asia/Shanghai" > /etc/timezone
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

