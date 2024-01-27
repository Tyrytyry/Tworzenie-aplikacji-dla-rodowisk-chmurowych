
FROM node:14


WORKDIR /app

COPY . /app

RUN npm install -g create-react-app

RUN npx create-react-app react-router-app

WORKDIR /app/react-router-app

RUN npm install react-router-dom

COPY App.js /app/react-router-app/src/
COPY HomeHTML.js /app/react-router-app/src/components/
COPY AboutHTML.js /app/react-router-app/src/components/
COPY html/* /app/react-router-app/src/components/html/
COPY css/* /app/react-router-app/src/components/css/
COPY js/* /app/react-router-app/src/components/js/
COPY img/* /app/react-router-app/src/components/img/

RUN npm install


CMD ["npm", "start"]


