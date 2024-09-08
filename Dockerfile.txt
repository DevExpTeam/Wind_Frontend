
FROM node:18-alpine
WORKDIR '/app'
copy package.json .

RUN yarn

copy . .


