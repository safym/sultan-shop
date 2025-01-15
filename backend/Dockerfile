FROM node:18
WORKDIR /opt/sultan-api
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "main.js"]