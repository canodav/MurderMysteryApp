# build step
FROM node:16-alpine as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

RUN mkdir -p node_modules/.vite && chmod -R 777 node_modules/.vite


CMD ["npm", "run", "dev"]