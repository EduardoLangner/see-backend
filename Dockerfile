FROM node:15

WORKDIR /see-backend

COPY src/ 
COPY .env
COPY package.json

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]