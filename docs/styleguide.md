# SUADA Styleguide

## Markenidentität

| Element | Beschreibung |
| --- | --- |
| Markenname | SUADA |
| Claim | Born to stand out. |
| Branche | Streetwear / Dark Luxury Streetwear |
| Wirkung | hochwertig, dunkel, editorial, reduziert, selbstbewusst |

SUADA wird als fiktive Streetwear-Marke mit Capsule Drops präsentiert. Die Gestaltung soll eher wie eine Fashion-Kampagne als wie ein klassischer Discount-Shop wirken.

## Farbpalette

Die Farben sind in `style.css` als CSS-Variablen definiert.

| Variable | Farbe | Verwendung |
| --- | --- | --- |
| `--bg` | `#080808` | Haupt-Hintergrund |
| `--bg-elevated` | `#111112` | leicht erhöhte dunkle Flächen |
| `--bg-soft` | `#181818` | weiche dunkle Sektionen |
| `--surface` | `rgba(255, 255, 255, 0.04)` | transparente Card-Flächen |
| `--surface-strong` | `rgba(255, 255, 255, 0.08)` | stärkere Hover- oder Panel-Flächen |
| `--text` | `#f4efe6` | Haupttext und helle UI-Elemente |
| `--muted` | `#b7aea2` | Sekundärtext |
| `--line` | `rgba(255, 255, 255, 0.12)` | feine Linien und Rahmen |
| `--accent` | `#7c1820` | dunkles Blutrot als Markenakzent |
| `--accent-strong` | `#ad2731` | stärkeres Rot für wichtige Aktionen |
| `--sand` | `#c9b79f` | warme Akzentfarbe für Desert Capsule und Eyebrows |
| `--olive` | `#57604b` | oliviger Zusatzton für Utility-/Desert-Stimmung |

## Typografie

| Bereich | Schrift | Einsatz |
| --- | --- | --- |
| Headlines / Display | `Cormorant Garamond`, serif | große Überschriften, Brand-Mark, Editorial-Titel |
| Body / UI | `Manrope`, sans-serif | Fließtext, Navigation, Buttons, Formulare, Produktdaten |

### Typografische Regeln

- Große Überschriften verwenden eine elegante Serifenschrift.
- UI-Texte bleiben klar, kompakt und gut lesbar.
- Eyebrow-Texte sind klein, uppercase, weit gespationiert und meist sandfarben.
- Texte sollen nicht überladen wirken; kurze Absätze passen besser zur editorialen Shop-Atmosphäre.

## Buttons und Links

| Klasse | Beschreibung | Verwendung |
| --- | --- | --- |
| `.button` | Primärer Button mit rotem Verlauf, hellem Text und Pill-Form | wichtigste Aktionen wie Shop, Checkout oder Absenden |
| `.button-secondary` | transparenter Button mit heller Kontur | sekundäre Aktionen wie Zurück, Explore oder Clear Cart |
| `.button-ghost` | sehr reduzierter Textlink mit Linie | dezente Links in Editorial- und Hero-Bereichen |
| `.cart-pill` | kompakte Warenkorb-Anzeige mit Zähler | Navigation |

Buttons verwenden abgerundete Pill-Formen, klare Kontraste und ausreichend Innenabstand. Primäre Buttons sollen sparsam eingesetzt werden, damit wichtige Aktionen sichtbar bleiben.

## Cards und Panels

Wichtige Card- und Panel-Typen:

- `.product-card` für Produkte
- `.hero-panel` für Hero-Teaser
- `.story-panel` für Textbereiche
- `.newsletter-box` für Newslettermodule
- `.contact-card` für Kontaktformularbereiche
- `.info-card` für Werte und Zusatzinformationen
- `.checkout-item` und `.order-card` für Checkout und Bestellungen

### Gestaltungsregeln

- Cards haben dunkle, transparente Oberflächen.
- Feine helle Rahmen trennen die Flächen vom Hintergrund.
- Schatten werden zurückhaltend eingesetzt, um Tiefe zu erzeugen.
- Produktkarten kombinieren Produktbild, Status, Kategorie, Preis und Link.
- Panels bleiben ruhig und unterstützen die Hierarchie, ohne die Inhalte zu überladen.

## Layout und Abstände

| Variable | Wert | Bedeutung |
| --- | --- | --- |
| `--max-width` | `1240px` | maximale Inhaltsbreite |
| `--spacing-xs` | `0.75rem` | kleine Abstände |
| `--spacing-sm` | `1rem` | Standardabstand klein |
| `--spacing-md` | `1.5rem` | mittlere Abstände |
| `--spacing-lg` | `2.5rem` | größere Komponentenabstände |
| `--spacing-xl` | `4rem` | Sektionsabstand kompakt |
| `--spacing-2xl` | `6rem` | großer Sektionsabstand |

### Layoutregeln

- Inhalte liegen in `.container` mit begrenzter Breite.
- Wiederkehrende Grids verwenden `.grid-2`, `.grid-3`, `.grid-4` oder `.product-grid`.
- Produktlisten werden auf großen Bildschirmen mehrspaltig und auf kleinen Bildschirmen einspaltig dargestellt.
- Detail-, Kontakt-, Warenkorb- und Checkout-Seiten wechseln responsiv von mehrspaltigen Layouts zu gestapelten Layouts.
- Media Queries bei `1080px` und `760px` reduzieren Spalten, Abstände und Navigation.

## Bildstil

Das Projekt verwendet echte Bilddateien aus `assets/img/` für Produkte, Capsule-Cover und Brand-Visuals. Die Bilder sind in dunkle, editorial gestaltete Flächen eingebettet.

### Bildregeln

- Produktbilder erscheinen in `.product-visual`-Rahmen.
- Capsule-Bilder unterstützen die jeweilige Stimmung:
  - Desert Capsule: Sand, Stone, Clay, Olive, Washed Black
  - Bloodmoon Capsule: Near Black, Crimson, Grey, Deep Red
- Bilder sollen hochwertig, ruhig und kampagnenartig wirken.
- Alt-Texte sind vorhanden und beschreiben den Bildzweck.

## Formulare

Formulare erscheinen auf Newsletter-, Kontakt- und Checkout-Seiten.

### Regeln

- Eingabefelder sind dunkel, klar gerahmt und breit genug für mobile Nutzung.
- Validierung erfolgt clientseitig mit JavaScript.
- Fehlende oder ungültige Eingaben erhalten eine sichtbare Hervorhebung.
- Erfolgsmeldungen sind reine Frontend-Rückmeldungen.
- Es werden keine echten E-Mails gesendet und keine Zahlungsdaten verarbeitet.

## Responsiveness

Das Layout ist responsiv umgesetzt:

- Desktop: mehrspaltige Shop-, Hero-, Detail- und Checkout-Layouts
- Tablet: reduzierte Spalten und flexiblere Grids
- Mobile: gestapelte Inhalte, mobiles Menü und einspaltige Produktlisten

Die Navigation zeigt auf kleinen Bildschirmen einen Menu-Button und ein ausklappbares mobiles Panel.

## Designprinzipien

- dunkle, hochwertige Grundstimmung
- klare typografische Hierarchie
- starke Kontraste zwischen Hintergrund, Text und Akzentfarben
- konsistente Navigation und Footer-Struktur
- Produktfokus statt Dekoration
- ehrliche Kennzeichnung als statischer Mock-Shop
- keine visuellen Behauptungen über echte Zahlung, Versandabwicklung oder Backend-Prozesse
