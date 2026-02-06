https://ziggy83pl.github.io/KrzysztofSzczesny/

---

# Krzysztof Szczęsny - Usługi Fachowe (PWA)

**Wersja:** 1.0.0

Profesjonalna strona wizytówka dla usług remontowych, ogrodniczych i transportowych. Zaprojektowana jako nowoczesna aplikacja PWA (Progressive Web App), w pełni responsywna i zoptymalizowana pod kątem SEO oraz mediów społecznościowych.

## 🚀 Główne Funkcjonalności

### 1. Progressive Web App (PWA)
- **Instalacja**: Możliwość zainstalowania strony jako aplikacji na telefonie (Android/iOS) lub komputerze.
- **Tryb Offline**: Dzięki `Service Worker` (`sw.js`), strona zapisuje kluczowe zasoby w pamięci podręcznej i działa nawet bez dostępu do internetu.
- **Manifest**: Plik `manifest.json` definiuje nazwę aplikacji, ikony oraz kolorystykę systemową (zielony akcent `#10b981`).

### 2. Interaktywność i JavaScript (`script.js`)
- **Formularz Kontaktowy (AJAX)**: Wysyłanie wiadomości odbywa się w tle bez przeładowania strony (integracja z FormSubmit).
- **Animacje**: Elementy strony (karty usług, formularz) pojawiają się płynnie (`fade-in`) podczas przewijania.
- **Obsługa Instalacji**: Dedykowany przycisk "Zainstaluj Aplikację" w stopce, który pojawia się tylko wtedy, gdy przeglądarka na to pozwala.

### 3. Wygląd i Style (`style.css`)
- **Nowoczesny Design**: Jasny motyw z ciemnym granatem (`#2c3e50`) i zielonym akcentem (`#10b981`).
- **Responsywność**: Układ oparty na CSS Grid i Flexbox, idealnie skalujący się na telefonach i komputerach.
- **Hero Section**: Efektowne zdjęcie w tle z gradientem.

### 4. Integracje Globalne
- **Portfolio Partnerów**: Skrypt `portfolio-logos.js` dynamicznie ładuje logotypy partnerów (Enterprise, Prodom, Paweł Szczęsny itd.).
- **Efekt Lupy**: Skrypt `magnifier.js` dodaje interaktywny efekt powiększenia na linku realizatora w stopce.

### 5. SEO i Social Media
- **Open Graph**: Skonfigurowane meta tagi dla Facebooka/Messengera (tytuł, opis, zdjęcie podglądowe).
- **Sitemap & Robots**: Pliki `sitemap.xml` i `robots.txt` dla lepszego indeksowania w Google.

## 🛠️ Struktura Plików

*   `index.html` - Główny kod strony (HTML5).
*   `style.css` - Arkusze stylów (zmienne CSS, RWD).
*   `script.js` - Logika aplikacji (formularz, animacje, PWA).
*   `sw.js` - Service Worker (cache i offline).
*   `manifest.json` - Konfiguracja PWA.
*   `robots.txt` / `sitemap.xml` - Pliki SEO.

## 🖥️ Jak uruchomić projekt?

### Wymagania
Aby funkcje PWA (Service Worker) działały poprawnie, strona musi być serwowana przez protokół `http://` lub `https://` (nie zadziała bezpośrednio z pliku `file://`).

### Uruchomienie Lokalne
1.  Otwórz folder w **VS Code**.
2.  Użyj rozszerzenia **Live Server** (Prawy przycisk na `index.html` -> "Open with Live Server").

### Wdrożenie
Wgraj pliki na serwer obsługujący HTTPS (np. GitHub Pages), aby aktywować wszystkie funkcje PWA.

## 📝 Konfiguracja Formularza

Formularz korzysta z serwisu FormSubmit.co.
1.  W pliku `script.js` upewnij się, że adres email w funkcji `fetch` jest poprawny.
2.  Po pierwszym wysłaniu wiadomości ze strony, odbierz email aktywacyjny od FormSubmit i potwierdź go.

---

## 📜 Dziennik Zmian (Changelog)

### [1.0.0] - 2026-05-22
- **Start**: Publikacja pierwszej wersji strony.
- **Design**: Wdrożenie jasnego motywu z zielonym akcentem.
- **PWA**: Dodanie manifestu i Service Workera.
- **Kontakt**: Implementacja formularza AJAX.
- **Global**: Podpięcie globalnych skryptów z repozytorium `zasoby`.

---
&copy; 2026 Krzysztof Szczęsny | Realizacja: Enterprise