FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN ls -la

COPY . ./

EXPOSE 3000

CMD [ "npm", "run", "start" ]