// Konkrete Videoquellen, recherchiert am 19.09.2026. Keine Suchlinks als Clipnachweis.
const filmClips = {
  "1937": {
    "provider": "youtube",
    "id": "hwr25WXUHxA",
    "label": "Historischer Trailer",
    "author": "Public Domain Stuff",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=hwr25WXUHxA",
    "source": "https://www.youtube.com/watch?v=hwr25WXUHxA",
    "note": "Externer Archivupload. Der Kanalname ist kein Nachweis für Gemeinfreiheit.",
    "checked": "2026-09-19"
  },
  "1952": {
    "provider": "vimeo",
    "id": "645984065",
    "label": "Restaurierungstrailer · 1:49",
    "author": "filmo",
    "language": "Schweizerdeutsch",
    "url": "https://vimeo.com/645984065",
    "source": "https://www.filmo.ch/Edition/katalog/staffel-11/heidi.html",
    "note": "Trailer zur restaurierten Fassung; veröffentlicht 2021, Film von 1952.",
    "checked": "2026-09-19"
  },
  "1955": {
    "provider": "vimeo",
    "id": "645984230",
    "label": "Restaurierungstrailer · 1:44",
    "author": "filmo",
    "language": "Schweizerdeutsch",
    "url": "https://vimeo.com/645984230",
    "source": "https://www.filmo.ch/Edition/katalog/staffel-11/heidi-und-peter.html",
    "note": "Trailer zur restaurierten Fassung; Film von 1955.",
    "checked": "2026-09-19"
  },
  "1955musical": {
    "provider": "youtube",
    "id": "Sf1IeVHBUQU",
    "label": "Musical-Ausschnitt · 1:45",
    "author": "Video Artists International (vaimusic)",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=Sf1IeVHBUQU",
    "source": "https://www.youtube.com/watch?v=Sf1IeVHBUQU",
    "note": "Vertriebsvorschau zur Fernsehproduktion mit Jeannie Carson und Natalie Wood. Der erhaltene Ausschnitt ist schwarzweiss.",
    "checked": "2026-09-19"
  },
  "1958gift": {
    "provider": "youtube",
    "id": "aHZiubyGbd0",
    "label": "Filmanfang · spanische Synchronfassung",
    "author": "Raro VHS",
    "language": "Spanisch",
    "url": "https://www.youtube.com/watch?v=aHZiubyGbd0",
    "source": "https://www.youtube.com/watch?v=aHZiubyGbd0",
    "note": "VHS-Archivupload zu «Un regalo para Heidi». Sandy Descher spielt Heidi; nicht mit der BBC-Serie verwechseln.",
    "checked": "2026-09-19"
  },
  "1958india": {
    "provider": "youtube",
    "id": "V5CUt-zJurM",
    "label": "Filmanfang · erste 3 Minuten",
    "author": "Navsaar Movies / Nupur Audio",
    "language": "Hindi",
    "url": "https://www.youtube.com/watch?v=V5CUt-zJurM",
    "source": "https://www.youtube.com/watch?v=V5CUt-zJurM",
    "note": "Ausschnitt aus dem angebotenen Gesamtfilm. Die eingebettete Auswahl endet nach drei Minuten; der Quellenlink führt zum vollständigen Upload.",
    "checked": "2026-09-19",
    "start": 0,
    "end": 180
  },
  "1965": {
    "provider": "youtube",
    "id": "UYrQh9OvBtY",
    "label": "Filmanfang · erste 3 Minuten",
    "author": "All Time Classic Movies",
    "language": "Deutsch",
    "url": "https://www.youtube.com/watch?v=UYrQh9OvBtY",
    "source": "https://www.youtube.com/watch?v=UYrQh9OvBtY",
    "note": "Fassung mit Gustav Knuth und Eva Maria Singhammer. Auswahl aus einem Gesamtfilm-Upload.",
    "checked": "2026-09-19",
    "start": 0,
    "end": 180
  },
  "1968": {
    "provider": "youtube",
    "id": "gUa6eoObF-Q",
    "label": "Trailer",
    "author": "Vision Video",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=gUa6eoObF-Q",
    "source": "https://www.youtube.com/watch?v=gUa6eoObF-Q",
    "note": "Verleihtrailer zur Delbert-Mann-Fassung mit Jennifer Edwards und Michael Redgrave.",
    "checked": "2026-09-19"
  },
  "1974": {
    "provider": "youtube",
    "id": "9SooJz8YsAU",
    "label": "Szenenauswahl · Heidi träumt von den Bergen",
    "author": "Studio 100 – Heroes of Childhood",
    "language": "Deutsch",
    "url": "https://www.youtube.com/watch?v=9SooJz8YsAU",
    "source": "https://www.youtube.com/watch?v=9SooJz8YsAU",
    "note": "Offizieller Kanal für die klassischen Zeichentrickserien. Deutsch synchronisierte Ausschnitte des Anime, keine CGI-Neuverfilmung.",
    "checked": "2026-09-19"
  },
  "1974bbc": {
    "provider": "youtube",
    "id": "Znn5ZTLSUik",
    "label": "Filmanfang · erste 3 Minuten",
    "author": "freedomfufighter",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=Znn5ZTLSUik",
    "source": "https://www.youtube.com/watch?v=Znn5ZTLSUik",
    "note": "Externer VHS-Archivupload der BBC-Fassung mit Emma Blake. Die Vorlage weist laut Uploader Bild- und Tonfehler auf; keine offizielle BBC-Veröffentlichung.",
    "checked": "2026-09-19",
    "start": 0,
    "end": 180
  },
  "1978": {
    "provider": "youtube",
    "id": "RPtaKhZ7OZ4",
    "label": "Vorspann der Realserie",
    "author": "Seb Jec",
    "language": "Deutsch",
    "url": "https://www.youtube.com/watch?v=RPtaKhZ7OZ4",
    "source": "https://www.youtube.com/watch?v=RPtaKhZ7OZ4",
    "note": "Archivupload des Vorspanns mit Katia Polletin. Der Vorspann eignet sich für den Vergleich von Landschaft, Figurenpräsentation und Titelmusik.",
    "checked": "2026-09-19"
  },
  "1978new": {
    "provider": "youtube",
    "id": "GLHkiUdznHs",
    "label": "Zeitgenössischer NBC-Promoclip · 0:11",
    "author": "robatsea2009",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=GLHkiUdznHs",
    "source": "https://www.youtube.com/watch?v=GLHkiUdznHs",
    "note": "Kurzer Sendetrailer von Dezember 1978 mit Burl Ives und Katy Kurtzman. Ein Werbeversprechen, keine vollständige Szene.",
    "checked": "2026-09-19"
  },
  "1982song": {
    "provider": "youtube",
    "id": "-jVYCB2xly4",
    "label": "Offizieller Filmausschnitt",
    "author": "Warner Bros. Classics / Warner Archive",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=-jVYCB2xly4",
    "source": "https://www.youtube.com/watch?v=-jVYCB2xly4",
    "note": "Ausschnitt aus dem Hanna-Barbera-Kinomusical.",
    "checked": "2026-09-19"
  },
  "1987climb": {
    "provider": "youtube",
    "id": "abTPN1g_ZHA",
    "label": "Filmanfang · erste 3 Minuten",
    "author": "Vision Video",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=abTPN1g_ZHA",
    "source": "https://www.youtube.com/watch?v=abTPN1g_ZHA",
    "note": "Datierungsabweichung: Der Verleih nennt im Videotitel 1996; der Katalognachweis der Lernlandschaft führt 1987. Regisseur Heinz Fussle und die Besetzung stimmen überein. Die Datierung bleibt zu klären.",
    "checked": "2026-09-19",
    "start": 0,
    "end": 180
  },
  "1990courage": {
    "provider": "youtube",
    "id": "ebUb30Fi9DA",
    "label": "Historischer VHS-Trailer",
    "author": "2ombieboy’s VHS Vault",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=ebUb30Fi9DA",
    "source": "https://www.youtube.com/watch?v=ebUb30Fi9DA",
    "note": "Archivupload des Trailers von Entertainment in Video; zeigt die Vermarktung als Abenteuerfilm.",
    "checked": "2026-09-19"
  },
  "1992art": {
    "provider": "vimeo",
    "id": "57293131",
    "label": "Vorführtrailer · 2:08",
    "author": "Spectacle Theater",
    "language": "Englisch",
    "url": "https://vimeo.com/57293131",
    "source": "https://vimeo.com/57293131",
    "note": "Trailer des Kinos zur Vorführung der Videoarbeit von Kelley/McCarthy. Experimentelle, verstörende Puppen- und Körperbilder; vor Unterrichtseinsatz sichten.",
    "checked": "2026-09-19"
  },
  "1993": {
    "provider": "youtube",
    "id": "5FKoYvdxjOg",
    "label": "Historischer Heimvideo-Trailer",
    "author": "Films and Cinema Collection",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=5FKoYvdxjOg",
    "source": "https://www.youtube.com/watch?v=5FKoYvdxjOg",
    "note": "Archivupload des Disney-Heimvideo-Trailers mit Noley Thornton, Jason Robards und Jane Seymour.",
    "checked": "2026-09-19"
  },
  "1995jetlag": {
    "provider": "youtube",
    "id": "L-Miw9l3hxA",
    "label": "Musikszene · This Is Home · 2:41",
    "author": "TaranWanderer2",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=L-Miw9l3hxA",
    "source": "https://www.youtube.com/watch?v=L-Miw9l3hxA",
    "note": "Archivupload einer Filmszene aus der Jetlag-Produktion von 1995. Untersucht, wie das Lied «Zuhause» definiert.",
    "checked": "2026-09-19"
  },
  "2001": {
    "provider": "youtube",
    "id": "lZRkhjcJn0A",
    "label": "Deutscher Kinotrailer",
    "author": "Trailer World",
    "language": "Deutsch",
    "url": "https://www.youtube.com/watch?v=lZRkhjcJn0A",
    "source": "https://www.youtube.com/watch?v=lZRkhjcJn0A",
    "note": "Trailer der Gegenwartsadaption mit Cornelia Gröschel und Paolo Villaggio.",
    "checked": "2026-09-19"
  },
  "2005": {
    "provider": "youtube",
    "id": "2Q-NAvcRtDo",
    "label": "Kinotrailer",
    "author": "Rotten Tomatoes Classic Trailers",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=2Q-NAvcRtDo",
    "source": "https://www.youtube.com/watch?v=2Q-NAvcRtDo",
    "note": "Paul Marcus, Emma Bolger und Max von Sydow; nicht der gleichjährige Zeichentrickfilm.",
    "checked": "2026-09-19"
  },
  "2005animation": {
    "provider": "mp4",
    "id": "simpson-trailer",
    "label": "Deutscher Zeichentrick-Trailer",
    "author": "Videobuster / Concorde Film",
    "language": "Deutsch",
    "url": "https://www.videobuster.de/trailer/10772/heidi-trailer",
    "source": "https://www.videobuster.de/trailer/10772/heidi-trailer",
    "embed": "https://vod-cache-1.cdnflix.de/clips/euay3bSw4b_EET66Q-2PIg/public/vod006/z7ixqnu58ff/video-h264-1.mp4",
    "note": "Trailer zur Alan-Simpson-Fassung, direkt vom Traileranbieter geladen.",
    "checked": "2026-09-19"
  },
  "2007teen": {
    "provider": "youtube",
    "id": "fp3T0Yo_qE0",
    "label": "Offizieller Teaser · 0:30",
    "author": "Play Suisse",
    "language": "Französisch",
    "url": "https://www.youtube.com/watch?v=fp3T0Yo_qE0",
    "source": "https://www.youtube.com/watch?v=fp3T0Yo_qE0",
    "note": "Heidi als Jugendliche, gespielt von Élodie Bollée. Die Serie stammt von 2007/2008, der Teaser bewirbt ihre spätere Streaming-Veröffentlichung.",
    "checked": "2026-09-19"
  },
  "2008paws": {
    "provider": "youtube",
    "id": "t_rvjI0fv2I",
    "label": "Trailer",
    "author": "4PawsTV",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=t_rvjI0fv2I",
    "source": "https://www.youtube.com/watch?v=t_rvjI0fv2I",
    "note": "Holly Goldberg Sloans Adaption mit Hunden als Figuren; Upload 2014, Produktion 2008.",
    "checked": "2026-09-19"
  },
  "2015": {
    "provider": "youtube",
    "id": "SikG8WUX9Eg",
    "label": "Offizielle Szene · Zu Tisch in Frankfurt",
    "author": "STUDIOCANAL Germany",
    "language": "Deutsch",
    "url": "https://www.youtube.com/watch?v=SikG8WUX9Eg",
    "source": "https://www.youtube.com/watch?v=SikG8WUX9Eg",
    "note": "Vergleicht Sitzordnung, Blickführung und Sprechanteile: Wie wird Heidis Fremdheit am Tisch sichtbar?",
    "checked": "2026-09-19"
  },
  "2015cgi": {
    "provider": "vimeo",
    "id": "760193644",
    "label": "Offizieller Serientrailer · 1:24",
    "author": "Studio 100",
    "language": "Englisch",
    "url": "https://vimeo.com/760193644",
    "source": "https://www.studio100film.com/en/catalog/heidi-2/",
    "note": "CGI-Serie, Produktionsjahre 2014/2015 und 2019.",
    "checked": "2026-09-19"
  },
  "2017bienvenida": {
    "provider": "vimeo",
    "id": "231523548",
    "label": "Offizieller Serientrailer · 2:06",
    "author": "Mondo TV Studios",
    "language": "Spanisch",
    "url": "https://vimeo.com/231523548",
    "source": "https://vimeo.com/231523548",
    "note": "Trailer der ersten Staffel «Bienvenida a casa».",
    "checked": "2026-09-19"
  },
  "2022": {
    "provider": "youtube",
    "id": "tjGIWcOrq-I",
    "label": "Offizieller Trailer",
    "author": "MAD HEIDI",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=tjGIWcOrq-I",
    "source": "https://www.youtube.com/watch?v=tjGIWcOrq-I",
    "note": "Enthält Gewalt und Splatter; für die Auseinandersetzung mit der Erwachsenenparodie vorab sichten.",
    "checked": "2026-09-19"
  },
  "2024moody": {
    "provider": "youtube",
    "id": "_9zLD2CUlVM",
    "label": "Filmanfang · erste 3 Minuten",
    "author": "EncourageTV",
    "language": "Englisch",
    "url": "https://www.youtube.com/watch?v=_9zLD2CUlVM",
    "source": "https://heidithefilm.com/",
    "note": "Vom offiziellen Filmauftritt verlinkte Veröffentlichung. Auswahl aus dem Gesamtfilm von Lynn Moody.",
    "checked": "2026-09-19",
    "start": 0,
    "end": 180
  },
  "2025": {
    "provider": "youtube",
    "id": "1PJJ90ryNxQ",
    "label": "Offizieller Kinotrailer",
    "author": "Heidi / Studio 100",
    "language": "Deutsch",
    "url": "https://www.youtube.com/watch?v=1PJJ90ryNxQ",
    "source": "https://www.youtube.com/watch?v=1PJJ90ryNxQ",
    "note": "Trailer zu «Die Legende vom Luchs», Regie Tobias Schwarz.",
    "checked": "2026-09-19"
  }
};
const filmClipGaps = {
  "1953bbc": "Kein überprüfbarer öffentlicher Filmclip zur BBC-Produktion mit Julia Lockwood gefunden. Treffer zum Schweizer Film von 1952 sind kein Ersatz. Der Erhaltungszustand ist hier nicht abschliessend geklärt.",
  "1954grows": "Kein überprüfbarer öffentlicher Clip zu «Heidi Grows Up» gefunden. Hörbücher des gleichnamigen Romans und «Heidi und Peter» (1955) gehören nicht zu dieser BBC-Produktion.",
  "1959bbc": "Kein überprüfbarer öffentlicher Clip zur BBC-Serie mit Sara O’Connor gefunden. Sendungsnachweise belegen die Produktion, liefern aber keine abspielbaren Szenen. Keine pauschale Behauptung, die gesamte Serie sei verschollen.",
  "1998short": "Kein überprüfbarer öffentlicher Clip zu Alain Gsponers dreiminütiger Animationssatire gefunden. Die zahlreichen Treffer zu seinem Spielfilm von 2015 sind keine Ausschnitte dieses Kurzfilms."
};
for (const f of films) { if (filmClips[f.id]) f.clip=filmClips[f.id]; else if (filmClipGaps[f.id]) f.clipGap=filmClipGaps[f.id]; }

// Vollständiger Realfilm, vom Nutzer bereitgestellt. Release-Asset wird beim Deploy ergänzt.
films.find(f=>f.id==='2015').fullVideo = {url:'media/heidi-2015-realfilm.mp4',label:'Vollständiger Realfilm · 1 Std. 50 Min. 50 Sek.',note:'Heidi (2015), Regie Alain Gsponer. Vom Nutzer bereitgestellte Fassung.'};

filmClips["2023karpi"]={"provider": "youtube", "id": "0A2-Af5JEWU", "label": "Vollständiges Trailerexperiment · 1:14", "author": "Karpi", "language": "Englischer Titel / Originalveröffentlichung", "url": "https://www.youtube.com/watch?v=0A2-Af5JEWU", "source": "https://www.youtube.com/watch?v=0A2-Af5JEWU", "note": "Originalupload vom 10. Juli 2023. KI-generiertes Trailerexperiment; kein Nachweis eines zugehörigen Langfilms.", "checked": "2026-09-19"};
films.find(f=>f.id==="2023karpi").clip=filmClips["2023karpi"];
