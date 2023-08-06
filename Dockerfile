FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . /app

RUN npm run build

CMD npm run migrate && npm start