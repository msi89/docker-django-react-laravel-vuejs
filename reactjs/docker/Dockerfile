FROM node:alpine

ARG API_URL
ENV REACT_APP_API_URL ${API_URL}

WORKDIR /app/reactjs

COPY . .

EXPOSE 3000
CMD npm start