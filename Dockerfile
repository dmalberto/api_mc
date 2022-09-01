FROM node:16-alpine AS dev

WORKDIR /usr/src/app

WORKDIR /api-mc

COPY package*.json ./
COPY tsconfig.json ./


COPY src ./src
RUN npm install

RUN ls -a

EXPOSE 5000

CMD ["node", "./dist/app.js"]

