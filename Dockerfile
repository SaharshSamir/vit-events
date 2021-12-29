FROM node:16.13-alpine3.12

RUN apk add g++ make py3-pip

WORKDIR /app

COPY package.json .
COPY yarn.lock .

EXPOSE 8000

COPY . .

RUN yarn

CMD [ "yarn", "server" ]