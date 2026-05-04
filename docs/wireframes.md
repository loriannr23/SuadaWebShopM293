# SUADA Wireframes

## Hinweis

In diesem Projekt liegen keine separaten Wireframe-Bilddateien vor. Die Wireframes werden deshalb textuell beschrieben. Die Beschreibung orientiert sich an den tatsächlich vorhandenen Seiten und der aktuellen Struktur in den HTML-Dateien.

## Globale Struktur

Alle Seiten folgen einer gemeinsamen Grundstruktur:

1. Sticky Header mit Brand-Mark, Hauptnavigation, Warenkorb-Pill und mobilem Menu-Button.
2. Hauptinhalt mit seitenabhängigen Sektionen.
3. Footer mit Markenhinweis, Links und Mock-Kontaktdaten.

Die Hauptnavigation enthält:

- Home
- Shop
- Drops
- About
- Contact
- Orders

Der Warenkorb ist über `Cart` in der Header-Aktion erreichbar und zeigt einen lokalen Zähler.

## Startseite (`index.html`)

### Inhaltliche Struktur

1. Hero-Bereich mit Markenname, Claim, Kurzbeschreibung, CTA-Buttons und Kennzahlen.
2. Hero-Seitenbereich mit Teaser für Desert Capsule und Bloodmoon Capsule.
3. Featured-Drop-Sektion mit Bild und Beschreibung der Desert Capsule.
4. New-Arrivals-Produktgrid aus JavaScript-Daten.
5. Kategorieübersicht mit Hoodies, Tees, Outerwear und Accessories.
6. Brand-Story-Vorschau mit Bild.
7. Capsule-Preview mit Desert-Produkten.
8. Newsletterformular.

### Responsives Verhalten

- Desktop: Hero und Story-Bereiche sind zweispaltig.
- Tablet: Grids reduzieren die Spaltenanzahl.
- Mobile: Inhalte werden untereinander gestapelt, Navigation läuft über das mobile Menü.

## Shop (`products.html`)

### Inhaltliche Struktur

1. Seitentitel `Collection` mit kurzer Beschreibung.
2. Filterleiste mit Kategorie-Chips.
3. Sortierauswahl.
4. Produktgrid.
5. Newsletterbereich.

### Funktionen

- Produkte werden aus `data.js` gerendert.
- Kategorien werden als Filterchips angezeigt.
- Sortierung erfolgt über ein Select-Feld.
- Produktkarten verlinken auf `product.html?id=...`.

### Responsives Verhalten

- Desktop: Filter und Sortierung stehen nebeneinander, Produktgrid ist mehrspaltig.
- Mobile: Filterchips umbrechen, Produktkarten stehen einspaltig.

## Produktdetailseite (`product.html`)

### Inhaltliche Struktur

1. Produktgalerie mit großem Hauptbild und kleineren Detailbildern.
2. Produktinformationen mit Name, Preis, Status, Kurzbeschreibung und Metadaten.
3. Größenwahl.
4. Add-to-Cart-Button und Link zurück zum Shop.
5. Accordion für Beschreibung, Details und Mock-Versandinformationen.
6. Campaign-Mood-Bereich mit Bild.
7. Related-Products-Grid.

### Funktionen

- Produktdaten werden über den Query-Parameter `id` aus `data.js` geladen.
- Ohne gültige ID wird ein Standardprodukt angezeigt.
- Die Größenwahl ist clientseitig.
- `Add to Cart` speichert das Produkt lokal im Warenkorb.
- Verwandte Produkte werden aus demselben Drop angezeigt.

### Responsives Verhalten

- Desktop: Galerie links, Produktinformationen rechts.
- Mobile: Galerie, Details und Zusatzbereiche werden untereinander angezeigt.

## Drops (`drops.html`)

### Inhaltliche Struktur

1. Intro mit Erklärung des Capsule-Konzepts.
2. Desert-Capsule-Bereich mit Beschreibung, CTA-Buttons, Fakten und Bild.
3. Produktgrid für Desert-Produkte.
4. Bloodmoon-Capsule-Bereich als Archiv-Drop mit Beschreibung, Fakten und Bild.
5. Produktgrid für Bloodmoon-Produkte.

### Responsives Verhalten

- Desktop: Drop-Beschreibung und Bild stehen zweispaltig.
- Mobile: Text, Aktionen, Fakten und Bild werden gestapelt.

## About (`about.html`)

### Inhaltliche Struktur

1. Einführung zur fiktiven Marke SUADA.
2. Bildbereich mit Brand-Visual.
3. Drei Werte: Precision, Atmosphere und Wearability.
4. Brand-Positioning-Sektion mit Bild und Text.

### Ziel der Seite

Die Seite erklärt die Markenidee und visuelle Ausrichtung. Sie enthält keine echten Unternehmensdaten und keine Backend-Funktionen.

## Contact (`contact.html`)

### Inhaltliche Struktur

1. Kontaktbereich mit Titel und Erklärung.
2. Kontaktformular mit Name, E-Mail, Betreff und Nachricht.
3. Seitenbereich mit direkter Kontaktinformation, Instagram, Antwortzeit und Standort-Platzhalter.

### Funktionen

- Das Formular wird clientseitig validiert.
- Bei fehlenden Eingaben erscheint Feedback.
- Bei gültigen Eingaben erscheint eine Erfolgsmeldung.
- Es wird keine echte E-Mail versendet.

### Responsives Verhalten

- Desktop: Formular und Kontaktinformationen stehen zweispaltig.
- Mobile: Formular und Info-Bereich werden untereinander dargestellt.

## Warenkorb (`cart.html`)

### Inhaltliche Struktur

1. Seitentitel `Selected Pieces`.
2. Produktgrid mit Warenkorbpositionen.
3. Sidebar mit Bestellübersicht.
4. Buttons für Checkout und Warenkorb leeren.

### Funktionen

- Warenkorbpositionen werden aus `localStorage` gelesen.
- Die Zusammenfassung zeigt Anzahl, Zwischensumme, Versand und Total.
- Der Warenkorb kann vollständig geleert werden.
- Bei leerem Warenkorb wird ein Empty-State angezeigt.

## Checkout (`checkout.html`)

### Inhaltliche Struktur

1. Seitentitel und Hinweis auf den Mock-Charakter.
2. Liste der zu bestellenden Artikel.
3. Zusammenfassung der Kosten.
4. Formular für Kundendaten und Zahlungsart.

### Funktionen

- Der Checkout liest den Warenkorb aus `localStorage`.
- Pflichtfelder werden clientseitig geprüft.
- Bei gültigen Eingaben wird ein lokaler Mock-Auftrag erstellt.
- Danach wird der Warenkorb geleert und zur Orders-Seite weitergeleitet.
- Es findet keine echte Zahlung statt.

## Bestellungen (`orders.html`)

### Inhaltliche Struktur

1. Seitentitel `Your Placed Orders`.
2. Liste lokal gespeicherter Bestellungen.
3. Empty-State, wenn keine Bestellung vorhanden ist.

### Funktionen

- Bestellungen werden aus `localStorage` gelesen.
- Angezeigt werden Auftragsnummer, Kunde, Datum, Zahlungsart, Total und Artikel.
- Die Bestellungen existieren nur im aktuellen Browser.

## Responsive Grundlogik

| Bildschirmgröße | Verhalten |
| --- | --- |
| Desktop | mehrspaltige Layouts, vollständige Hauptnavigation, große Abstände |
| Tablet | reduzierte Grids, flexiblere Spalten, weiterhin klare Hierarchie |
| Mobile | einspaltige Inhalte, mobiles Menü, kleinere Abstände, gestapelte Formulare |

## Grenzen der Wireframes

Die Wireframes beschreiben Struktur, Reihenfolge und Verhalten der Seiten. Sie ersetzen keine pixelgenauen Design-Mockups. Das visuelle Detaildesign ist in `style.css` und im Styleguide dokumentiert.
