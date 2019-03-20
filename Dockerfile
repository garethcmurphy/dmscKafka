FROM ubuntu
RUN apt-get update && apt-get install -y kafkacat
RUN echo "172.17.5.38 mobuntu" >> /etc/hosts
COPY send.sh /usr/src/app/
COPY x.json /usr/src/app/
WORKDIR /usr/src/app/
#RUN ./send.sh
