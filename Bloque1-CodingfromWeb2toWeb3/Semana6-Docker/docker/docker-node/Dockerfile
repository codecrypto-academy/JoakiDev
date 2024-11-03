FROM node

WORKDIR /app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 13000

CMD ["node", "server.js"]