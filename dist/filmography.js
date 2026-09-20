// Supplementary catalogue registers; source and film records are in content.js.
const filmVariants = [
  [
    "1975 / 1980 / 1985",
    "The Story of Heidi",
    "Englische Kompilation des Anime. Die Angaben betreffen Copyright, Veröffentlichung und spätere US-VHS-Auswertung; keine drei Neuproduktionen.",
    "https://en.wikipedia.org/wiki/Heidi,_Girl_of_the_Alps"
  ],
  [
    "1978",
    "Heidi in città / Heidi va in città",
    "Italienische Kino-Kompilation mit Schwerpunkt Frankfurt.",
    "https://www.cinematografo.it/film/heidi-in-citta-bfafpkmk"
  ],
  [
    "1978",
    "Heidi torna tra i monti / Heidi torna sui monti",
    "Italienische Kompilation der Rückkehr und der Klara-Handlung.",
    "https://www.antoniogenna.net/doppiaggio/anim/heidi.htm"
  ],
  [
    "1979",
    "Heidi a scuola",
    "Italienische Kino-Kompilation; die Veröffentlichungsreihenfolge entspricht nicht der Handlungsreihenfolge.",
    "https://www.antoniogenna.net/doppiaggio/anim/heidi.htm"
  ],
  [
    "1979",
    "Alps no Shōjo Heidi · japanische Kinokompilation",
    "Zusammenschnitt der Serie von 1974; eigene Schnittfassung, kein neuer gezeichneter Gesamtfilm.",
    "https://www.ne.jp/asahi/ts/hp/file5_heidi/file5004_moku5_eizo.html"
  ],
  [
    "Heimvideo",
    "Heidi sui monti",
    "Als Ersatz für Heidi a scuola in späteren italienischen Zusammenstellungen geführt. Die genaue Ausgabe muss am Datenträger geprüft werden.",
    "https://www.antoniogenna.net/doppiaggio/anim/heidi.htm"
  ],
  [
    "1993",
    "Alps no Shōjo Heidi: Arumu no Yama-hen",
    "Erster Teil der japanischen Video-Zusammenfassung.",
    "https://en.wikipedia.org/wiki/Heidi,_Girl_of_the_Alps"
  ],
  [
    "1993",
    "Alps no Shōjo Heidi: Heidi to Clara-hen",
    "Zweiter Teil derselben Video-Bearbeitung.",
    "https://en.wikipedia.org/wiki/Heidi,_Girl_of_the_Alps"
  ],
  [
    "1999 · Ausgabenangabe",
    "Heidi in den Bergen",
    "Teil 1 einer deutschsprachigen Dreiteilung des Anime.",
    "https://de.wikipedia.org/wiki/Heidi_(Roman)"
  ],
  [
    "1999 · Ausgabenangabe",
    "Heidi in der Stadt",
    "Teil 2 der Dreiteilung; kein eigenständiges Animationsremake.",
    "https://de.wikipedia.org/wiki/Heidi_(Roman)"
  ],
  [
    "1999 · Ausgabenangabe",
    "Heidi zurück in den Bergen",
    "Teil 3 der Dreiteilung.",
    "https://de.wikipedia.org/wiki/Heidi_(Roman)"
  ],
  [
    "2000 · Ausgabenangabe",
    "Heidi – Kindheit in den Bergen",
    "Erster Teil einer neu synchronisierten Zweiteilung.",
    "https://de.wikipedia.org/wiki/Heidi_(Roman)"
  ],
  [
    "2000 · Ausgabenangabe",
    "Heidi – Ein Sommer voller Glück",
    "Zweiter Teil der Zweiteilung. Datierung bezeichnet die Ausgabe.",
    "https://de.wikipedia.org/wiki/Heidi_(Roman)"
  ]
];
const filmResearch = [
  [
    "1954",
    "Frühlingslied / Heidi und ihre Freunde",
    "Hans Albin; motivische und vermarktungsbezogene Nachbarschaft. Filmportal beschreibt eine Waisenkindgeschichte um Wolfgang. Nicht als direkte Verfilmung des Heidi-Romans zählen.",
    "https://www.filmportal.de/film/fruehlingslied_2f524a7bc12c4cfa8720f0a3c88b95b4"
  ],
  [
    "1956",
    "Heidemarie / S’Waisechind vo Engelberg",
    "Spyri-Verwandtschaft und Heidi-Erfolgsumfeld, aber eine andere Waisenkindgeschichte. Ein eigener Grenzfall der Wirkungsgeschichte.",
    "https://www.filmdienst.de/film/details/10573/heidemarie"
  ],
  [
    "1977",
    "Heidi diventa principessa",
    "Italienischer Vermarktungstitel für einen anderen Toei-Stoff; keine Heidi-Romanadaption.",
    "https://www.antoniogenna.net/doppiaggio/anim/heidi.htm"
  ],
  [
    "1991",
    "Sugar & Spice: Heidi",
    "Als kurze Animationsfassung katalogisiert. Eigenständigkeit gegenüber anderen bearbeiteten oder synchronisierten Ausgaben noch nicht durch Produktionsunterlagen geklärt. Als Recherchefund erhalten, nicht mit Jetlag 1995 gleichsetzen.",
    "https://www.filmweb.pl/film/Heidi-1991-185795/vod"
  ],
  [
    "2002",
    "Heidi · Albert Hanan Kaminski zugeschrieben",
    "Filmografische Angabe mit Klärungsbedarf. Filmportal nennt Kaminski in der Vorproduktion der 2005er-Animation. Ohne gesonderten Veröffentlichungsbeleg wird daraus hier kein zusätzlicher erschienener Film.",
    "https://www.filmportal.de/film/heidi_24a1ad0d0348473b971042ec1b19b8dc"
  ],
  [
    "2007",
    "Angeblicher französischer Film mit schwarzer Heidi und schwarzem Peter",
    "In einer allgemeinen Übersicht erwähnt, aber ohne belastbare identifizierende Produktionsangaben bestätigt. Nicht mit der Jugendserie Heidi & Co. verwechseln.",
    "https://en.wikipedia.org/wiki/Heidi"
  ],
  [
    "1958 / 1959",
    "US-Fernsehmusical: abweichende Jahresangaben",
    "Das konkret identifizierte Liebman-Musical ist beim Paley Center am 1.10.1955 belegt. Abweichende Listenangaben nicht als zusätzliche Produktionen zählen.",
    "https://www.paleycenter.org/collection/item?item=B%3A29624"
  ],
  [
    "1960",
    "Heidi · pauschaler Serienhinweis",
    "Eine zusätzliche Serie ist in allgemeinen Listen genannt, aber noch nicht unabhängig von BBC 1959 identifiziert. Eine Jahreszahl allein reicht nicht für einen neuen Datensatz.",
    "https://de.wikipedia.org/wiki/Heidi_(Roman)"
  ]
];
const filmUpcoming = [
  [
    "2027 · angekündigt",
    "Heidi · SRF / RTL",
    "Johannes Bachmann und Isabel Prahl; mit Neah Hefti und Christian Kohlund. SRF meldet im Juni 2026 den Drehbeginn. Erzählt wird das Älterwerden nach den bekannten Romanereignissen. Noch keine abgeschlossene Filmanalyse möglich.",
    "https://medien.srf.ch/-/neue-%C2%ABheidi%C2%BB-serie-von-srf-und-rtl-entsteht?redirect=%2F"
  ],
  [
    "2025 angekündigt · Termin offen",
    "Heidi · Zodiac / Claussen+Putz / Studiocanal",
    "Separates Miniserienprojekt, angekündigt im Januar 2025. Nicht mit der SRF/RTL-Serie zusammenlegen. Der damalige Bericht nennt noch keinen Sender; ein bestätigter aktueller Starttermin liegt dieser Recherche nicht vor.",
    "https://www.dwdl.de/nachrichten/101154/kinderbuchklassiker_heidi_soll_zur_miniserie_werden/"
  ]
];
const filmDocumentaries = [
  [
    "1998",
    "Heidi Forever · Denise Gilliand",
    "Dokumentarische Untersuchung der weltweiten Heidi-Rezeption. Ergänzt die Adaptionen als Film über den Mythos; nicht als weitere Romanverfilmung gezählt.",
    "https://swissfilms.ch/en/person/denise-gilliand/7ba6f1b7fa4a418f9571dfbc82625e06"
  ]
];
const additionalImageSources = {
  "1978new": {
    "source": "https://postermuseum.com/collections/1980s/products/la-nuove-avventure-di-heidi-990",
    "caption": "The New Adventures of Heidi (1978): italienisches Kinoplakat von 1984"
  },
  "1982song": {
    "source": "https://www.impawards.com/1982/heidis_song.html",
    "caption": "Heidi’s Song (1982): Filmplakat"
  },
  "1990courage": {
    "source": "https://en.wikipedia.org/wiki/Courage_Mountain",
    "caption": "Courage Mountain (1990): Filmplakat"
  },
  "1958india": {
    "source": "https://en.wikipedia.org/wiki/Do_Phool_(1958_film)",
    "caption": "Do Phool (1958): Filmplakat"
  },
  "2005animation": {
    "source": "https://www.filmstarts.de/kritiken/115076.html",
    "caption": "Heidi (2005): deutsches Animationsfilm-Plakat"
  },
  "2008paws": {
    "source": "https://www.filmstarts.de/kritiken/217263.html",
    "caption": "Heidi auf 4 Pfoten (2008): deutsches DVD-Cover"
  },
  "2017bienvenida": {
    "source": "https://www.formulatv.com/telenovelas/heidi-bienvenida-a-casa/",
    "caption": "Heidi, bienvenida a casa (ab 2017): Produktions-/Lizenzplakat von Mondo TV, 2016"
  },
  "1995jetlag": {
    "source": "https://www.mattystapes.it/heidi-vhs-stardust-jetlag-productions/",
    "caption": "Heidi (1995): Heidi und Clara, Standbild der Jetlag-Fassung"
  },
  "2024moody": {
    "source": "https://www.encouragetv.com/ourfilms/heidi/",
    "caption": "Heidi (2024): offizielles Plakat zur Verfilmung von Lynn Moody"
  }
};
