FROM node:16-alpine3.11

LABEL version="1.0"

LABEL description="Production image for the MERN API."

WORKDIR /app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "run", "start"]