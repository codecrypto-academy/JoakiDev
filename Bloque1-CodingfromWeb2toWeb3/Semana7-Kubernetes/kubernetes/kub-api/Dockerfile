FROM node:latest

WORKDIR /app

# Copia el package.json a /app, representado por el punto (.)
COPY ./package.json .

RUN yarn

COPY . .

CMD ["node", "app.js"]