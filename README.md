1. Projekt: Tworzenie Aplikacji dla Środkowisk Chmurowych 

  Projekt ten to aplikacja napisana w języku Java, wykorzystująca Docker do konteneryzacji i Docker Compose do zarządzania wieloma serwisami.

2. Pobieranie projektu

  Skopiuj projekt na swój lokalny komputer używając Git'a. Proejkt można znaleźć pod następującym linkiem: 
  https://github.com/Tyrytyry/Tworzenie-aplikacji-dla-rodowisk-chmurowych

3. Budowanie projektu
  1. Otwórz terminal i przejdź do katalogu proejktu:

  2. Zbuduj obraz Docker wykorzystująć następującą komendę: docker-compose build

4. Uruchomienie projektu
  a) Upewnić się, że plik docker-compose.yml jest obecny w katalogu projektu.
  b) W terminalu, w katalogu projektu, uruchamiamy następującą komendę: 
  docker-compose up -d 
  Dodajemy "-d" aby uruchomić w tle.

5. Dostęp do aplikacji
  Po pomyślnym uruchomieniu projektu, aplikacja powinna być dostępna pod adresem http://localhost:8081/login, gdzie port to numer portu zdefiniowany w pliku docker-compose.yml.
6. Zatrzymanie projektu
  Aby zatrzymać projekt I zamknąć kontenery musimy urzyć następującej komendy:
  docker-compose down

