FROM node:alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./client/package.json ./
COPY ./client/package-lok.json ./
RUN npm install
COPY ./client/* ./

CMD ["npm", "start"]
