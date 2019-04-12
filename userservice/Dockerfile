FROM node:8

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 3001

ENTRYPOINT ["npm", "start"]
