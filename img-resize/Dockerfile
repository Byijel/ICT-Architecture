FROM node:20-bullseye as build
WORKDIR /img-resize
COPY package.json .
COPY package-lock.json .
RUN npm install --frozen-lockfile

COPY . . 
CMD [ "node", "./index.js"]
