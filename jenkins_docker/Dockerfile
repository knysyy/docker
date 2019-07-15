FROM jenkins

USER root

RUN apt-get update && apt-get install -y git curl vim sudo apt-utils
RUN curl -sL https://dev.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN rm -rf /var/lib/apt/lists/*
RUN npm install npm@latest -g
RUN npm install selenium-side-runner -g

RUN cd tmp/ \
    && wget https://updates.jenkins-ci.org/latest/jenkins.war \
    && mv ./jenkins.war /usr/share/jenkins/

USER jenkins
