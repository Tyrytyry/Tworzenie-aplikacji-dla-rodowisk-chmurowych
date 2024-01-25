# FROM nginx:alpine

# COPY ./ /usr/share/nginx/html

# COPY ./nginx.conf /etc/nginx/conf.d/default.conf



# Użyj oficjalnego obrazu Node.js z LTS
FROM node:14

# Ustaw katalog roboczy na /app
WORKDIR /app

# Skopiuj pliki z obecnego katalogu do katalogu /app
COPY . /app

# Zainstaluj create-react-app
RUN npm install -g create-react-app

# Utwórz nową aplikację React
RUN npx create-react-app react-router-app

# Przejdź do katalogu aplikacji
WORKDIR /app/react-router-app

RUN npm install react-router-dom

# Skopiuj zmieniony plik App.js oraz dodane pliki HomeHTML.js i AboutHTML.js
COPY App.js /app/react-router-app/src/
COPY HomeHTML.js /app/react-router-app/src/components/
COPY AboutHTML.js /app/react-router-app/src/components/
COPY html/* /app/react-router-app/src/components/html/
COPY css/* /app/react-router-app/src/components/css/
COPY js/* /app/react-router-app/src/components/js/
COPY img/* /app/react-router-app/src/components/img/
# Zainstaluj zależności aplikacji
RUN npm install

# Uruchom aplikację React
CMD ["npm", "start"]



#WORKDIR /app


#COPY package*.json ./


#RUN npm install


#COPY . .


#RUN npm run build


#FROM nginx:alpine
#COPY --from=0 /app/build /usr/share/nginx/html

#COPY index.html /usr/share/nginx/html
#COPY home.html /usr/share/nginx/html
#COPY css/home.css /usr/share/nginx/html/css
