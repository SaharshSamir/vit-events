FROM node:16.13-alpine3.12

RUN apk add g++ make py3-pip

WORKDIR /app/frontend

COPY package*.json .

EXPOSE 3000

COPY . .

RUN yarn

CMD ["yarn", "start"]