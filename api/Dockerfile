FROM node:14.11.0

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./package.json
RUN npm install --silent

COPY ./tsconfig.json ./tsconfig.json
COPY ./.eslintrc ./.eslintrc
COPY ./.prettierrc ./.prettierrc
COPY ./src ./src
RUN npm run build

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
CMD /wait && npm run serve
