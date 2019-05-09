FROM node:latest

# Initialisation des variables modifiable
ENV NEXUS_URL=http://nexus.forge.labsii.loc
ENV GROUP_ID=com.siicanada.appagile
ENV ARTIFACT_ID=agile-frontend
ENV FOLDER=1.0.0-SNAPSHOT
ENV REPOSITORY=maven-snapshots
ENV TYPE=zip

COPY ./scripts/last_snapshot.sh /home
RUN apt-get update
RUN npm install -g pushstate-server
RUN apt-get install libxml2-utils

RUN /bin/bash /home/last_snapshot.sh ${GROUP_ID} ${ARTIFACT_ID} ${FOLDER} ${REPOSITORY} ${TYPE} ${NEXUS_URL}

# Installation des packages requis
RUN unzip '*agile-frontend-**.zip' -d /home

WORKDIR /home
EXPOSE 8088
CMD pushstate-server -d ./dist -p 8088 -f index.html