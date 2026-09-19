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

## Filmarchiv – Stand 19. September 2026

34 Produktionen, 13 Schnittfassungen und Ausgaben, acht Grenzfälle bzw. offene Zuordnungen, zwei angekündigte Serien und eine ergänzende Dokumentation. Unsichere Daten und Recherchegrenzen sind in der Website sichtbar; keine garantierte lückenlose Weltfilmografie. Das bereitgestellte Fragment von 1920 wird lokal als Video gehostet. Weitere Filmzugänge und zusätzliche Bildquellen führen zu ausgewiesenen externen Angeboten.

Daten: `dist/Filmografie_Heidi.json`. Zusätzliche Prüfung: `node research/filmography.test.cjs`.
