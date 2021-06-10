FROM node:14.16.0 AS development

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/

COPY . /usr/src/app/

RUN npm install

RUN npm run build

ENV POST 8080

EXPOSE 8080

CMD ["node", "dist/main.js"]