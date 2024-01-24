FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
EXPOSE 8081
CMD [ "node", "server.js" ]
