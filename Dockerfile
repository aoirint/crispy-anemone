FROM node:14

WORKDIR /code
ADD ./package.json ./package-lock.json /code

RUN npm install .

ADD ./src /code/src
ADD ./public /code/public

