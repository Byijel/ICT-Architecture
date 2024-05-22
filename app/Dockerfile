FROM node:20-bullseye as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --frozen-lockfile

<<<<<<< HEAD
COPY . .
CMD [ "node", "./src/index.js" ]
=======
COPY . . 
CMD [ "node", "./src/index.js"]
>>>>>>> 5105520 (Change enviroment to match current interface)
EXPOSE 3000