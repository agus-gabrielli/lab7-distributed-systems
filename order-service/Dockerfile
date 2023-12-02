FROM node:slim

WORKDIR /orders

COPY package*.json .

RUN npm i

COPY . .

CMD npm run dev