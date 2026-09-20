# Heidi – eine Weltgeschichte

Öffentliche Lernlandschaft mit Filmgeschichte, historischen Kontexten, dramaturgischen Vergleichen und offenen Lernaufgaben.

Website: https://patrickfischerksa.github.io/heidi-lernlandschaft-live/

## Lokal starten

```sh
gh release download v1.0.0 --repo PatrickFischerKSA/heidi-lernlandschaft-live --pattern Heidiundmehr.pdf --dir dist/quellen
python3 -m http.server 8766 --directory dist
```

Feedback prüfen: `node research/feedback.test.cjs`.

Die grosse Originalquelle liegt aufgrund des Git-Dateilimits im Release und wird bei der Veröffentlichung automatisch ergänzt. Bildnachweise und Quellenangaben stehen in der Website. Alle Originaldokumente und Bilder behalten ihre jeweiligen Urheberrechte; dieses Repository erteilt keine weitergehende Nutzungslizenz.

## Filmarchiv – Stand 20. September 2026

35 Produktionen, 13 Schnittfassungen und Ausgaben, acht Grenzfälle bzw. offene Zuordnungen, zwei angekündigte Serien und eine ergänzende Dokumentation. Unsichere Daten und Recherchegrenzen sind in der Website sichtbar; keine garantierte lückenlose Weltfilmografie. Das bereitgestellte Fragment von 1920 wird lokal als Video gehostet. Weitere Filmzugänge und zusätzliche Bildquellen führen zu ausgewiesenen externen Angeboten.

Daten: `dist/Filmografie_Heidi.json`. Zusätzliche Prüfung: `node research/filmography.test.cjs`.

## Explorative Oberfläche

Vier Räume ersetzen die bisherigen Texttafeln: visuelle Filmwelt mit Doppelvergleich, Schnittlabor mit vier echten Ausschnitten aus dem bereitgestellten Realfilm von 2015, frei markierbare Bildspuren und eine visuelle Zeitreise. Analysen, historische Kontexte und Quellen sind aufklappbar. Das Entdeckungsbuch speichert offene Beobachtungen lokal und exportiert sie als Text. Keine Multiple-Choice-Fragen.

Die acht Dateien in `dist/media/montage/` sind vier jeweils achtsekündige Ausschnitte und ihre Vorschaubilder aus der vom Nutzer zur Veröffentlichung bereitgestellten Fassung von 2015 (Startpositionen 03:00, 15:00, 45:00 und 53:20).

Prüfungen: `node research/feedback.test.cjs` und `node research/filmography.test.cjs`. Der optionale Browserablauf `research/exploration.browser.cjs` benötigt Playwright und einen lokalen Server auf Port 8770; `HEIDI_BROWSER` wählt eine Chromium-Binärdatei, `HEIDI_URL` eine andere Testadresse. Er prüft Montagewiedergabe, Vergleiche, Bildmarkierungen, Speicherung, Feedback und responsive Ansichten.
