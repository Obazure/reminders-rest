FROM node:14.11.0

RUN mkdir /app
WORKDIR /app
COPY . .

RUN npm install --silent
RUN npm run build

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
CMD /wait && npm run start
