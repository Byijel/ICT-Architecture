FROM node:20-bullseye as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --frozen-lockfile

COPY . .
CMD [ "node", "./src/index.js" ]
EXPOSE 3000