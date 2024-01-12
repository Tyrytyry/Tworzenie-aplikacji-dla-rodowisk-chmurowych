# Użyj oficjalnego obrazu Node jako bazowego obrazu
FROM node:14-alpine

# Ustaw katalog roboczy na /app
WORKDIR /app

# Skopiuj pliki projektu (package.json i package-lock.json) do katalogu roboczego
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj pozostałe pliki projektu
COPY . .

# Zbuduj aplikację React
RUN npm run build

# Skonfiguruj serwer HTTP, np. nginx
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

COPY index.html /usr/share/nginx/html
COPY home.html /usr/share/nginx/html
COPY css/home.css /usr/share/nginx/html/css
