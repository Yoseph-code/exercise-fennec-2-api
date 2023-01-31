FROM node:18.13.0

COPY . .

RUN npm i

EXPOSE 3333
CMD ["npm", "run", "dev"]