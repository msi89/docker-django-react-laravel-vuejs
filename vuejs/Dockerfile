FROM node:alpine

ARG API_URL
ENV VUE_APP_API_URL ${API_URL}

WORKDIR /app/vuejs

COPY . .

RUN yarn install --silent

EXPOSE 8080
CMD yarn serve