# SUADA Webshop

## Projektbeschreibung

SUADA ist ein statischer Streetwear-Webshop als Schulprojekt. Die Website stellt eine fiktive Premium-Streetwear-Marke mit dunkler, editorialer Gestaltung, Capsule Drops und Produktseiten dar.

Das Projekt ist vollständig mit HTML, CSS und Vanilla JavaScript umgesetzt. Es gibt kein Backend, keine Datenbank, keine echte Zahlungsabwicklung und keinen PHP-Mailer. Warenkorb, Checkout und Bestellungen werden nur clientseitig im Browser simuliert.

## Ziel des Projekts

Ziel ist ein glaubwürdiger Frontend-Prototyp für einen modernen Webshop. Der Fokus liegt auf:

- sauberer Seitenstruktur,
- responsivem Layout,
- konsistenter visueller Gestaltung,
- produktnaher Benutzerführung,
- einfachen JavaScript-Interaktionen,
- ehrlicher Mock-Umsetzung ohne Serverlogik.

## Seitenübersicht

| Datei | Inhalt |
| --- | --- |
| `index.html` | Startseite mit Hero-Bereich, Featured Drop, Produkt-Highlights, Kategorien, Brand Story und Newsletterformular |
| `products.html` | Shop-Übersicht mit Produktkarten, Kategorie-Filtern und Sortierung |
| `product.html` | Produktdetailseite mit Produktbildern, Größenwahl, Accordion-Informationen, verwandten Produkten und Add-to-Cart-Funktion |
| `drops.html` | Editoriale Übersicht der Capsule Drops `Desert Capsule` und `Bloodmoon Capsule` |
| `about.html` | Brand Story, Werte und Positionierung der fiktiven Marke |
| `contact.html` | Kontaktseite mit Formular, Kontaktinformationen und clientseitiger Validierung |
| `cart.html` | Warenkorb mit lokal gespeicherten Produkten und Zusammenfassung |
| `checkout.html` | Mock-Checkout mit Formular und lokaler Auftragserstellung |
| `orders.html` | Übersicht lokal gespeicherter Mock-Bestellungen |

## Funktionen

- responsive Navigation mit Desktop-Menü und mobilem Menü
- Produktdaten aus `data.js`
- Produktkarten mit Bildern, Kategorie, Status, Preis und Link zur Detailseite
- Filterung nach Kategorien: Hoodies, T-Shirts, Jackets, Pants und Accessories
- Sortierung nach Featured, Newest, Preis aufsteigend und Preis absteigend
- Produktdetailseite über Query-Parameter, zum Beispiel `product.html?id=desert-oversized-hoodie`
- Größenwahl auf der Produktdetailseite
- Warenkorb mit `localStorage`
- Anzeige des Warenkorb-Zählers in der Navigation
- Warenkorb leeren
- Checkout als reine Frontend-Funktion
- Bestellungen werden lokal im Browser gespeichert und auf `orders.html` angezeigt
- Newsletter- und Kontaktformulare mit clientseitiger Validierung und Erfolgsmeldung
- Accordion-Elemente auf der Produktdetailseite
- Reveal-Animationen beim Scrollen

## Startanleitung

Es gibt keinen Build-Prozess und keine Paketinstallation.

1. Projektordner öffnen.
2. `index.html` direkt im Browser öffnen.
3. Alternativ im Projektordner einen einfachen lokalen Server starten:

```powershell
python -m http.server
```

Danach kann die Website im Browser über `http://localhost:8000` geöffnet werden.

## Projektstruktur

| Pfad | Bedeutung |
| --- | --- |
| `*.html` | Einzelne Seiten des statischen Webshops |
| `style.css` | Komplettes Styling, Layout, Responsiveness und Designsystem |
| `script.js` | JavaScript für Navigation, Produktlisten, Filter, Warenkorb, Checkout, Orders und Formularfeedback |
| `data.js` | Produktdaten, Kategorien und Sortieroptionen |
| `assets/img/` | Produkt-, Drop- und Brand-Bilder |
| `assets/icons/` | Icon- und Favicon-Dateien |
| `docs/` | Projektdokumentation |

## Technologien

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage
- Google Fonts: `Cormorant Garamond` und `Manrope`

## Statische Umsetzung und Mock-Funktionen

Dieses Projekt ist ein Frontend-Mock. Es verarbeitet keine echten Bestellungen und versendet keine E-Mails. Alle interaktiven Daten bleiben im Browser:

- Der Warenkorb wird in `localStorage` gespeichert.
- Der Checkout erstellt nur einen lokalen Mock-Auftrag.
- Die Bestellübersicht liest lokale Mock-Aufträge aus `localStorage`.
- Kontakt- und Newsletterformulare zeigen nur Validierungs- und Erfolgsmeldungen.
- Zahlungsarten im Checkout sind reine Auswahloptionen ohne echte Zahlungsabwicklung.

Damit eignet sich das Projekt zur Präsentation von Struktur, Gestaltung und Frontend-Funktionalität, nicht als produktiver Onlineshop.
