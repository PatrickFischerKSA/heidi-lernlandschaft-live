// Sources and production records. Individual tasks: cases.js.
const sources = {
  "klimek": {
    "name": "Klimek: Gott statt Goethe (2026), S. 29–60, besonders 49–54",
    "url": "quellen/Heidiundmehr.pdf#page=55"
  },
  "stetter": {
    "name": "Stetter: Materialität des Stadt-Land-Gegensatzes (2026), S. 203–224",
    "url": "quellen/Heidiundmehr.pdf#page=209"
  },
  "leskau": {
    "name": "Leskau/Nieberle: Kanonisierung / Popularisierung (2026), S. 177–190",
    "url": "quellen/Heidiundmehr.pdf#page=183"
  },
  "takahata": {
    "name": "Takahata: Making of the TV Series (2004), S. 189–204",
    "url": "quellen/Spyri_Lesarten.pdf#page=190"
  },
  "tomkowiak": {
    "name": "Tomkowiak: Die Schweizer Heidi-Filme (2004), S. 205–222",
    "url": "quellen/Spyri_Lesarten.pdf#page=206"
  },
  "osullivan": {
    "name": "O’Sullivan: Heidi in englischen Übersetzungen (2004), S. 139–162",
    "url": "quellen/Spyri_Lesarten.pdf#page=140"
  },
  "bando": {
    "name": "Bando Saito: Heidi in Japan (2004), S. 183–187",
    "url": "quellen/Spyri_Lesarten.pdf#page=184"
  },
  "walther": {
    "name": "Rudolf Walther: Typisch! (2009), PDF-S. 1–3",
    "url": "quellen/CH-Rudolf-Walther.pdf"
  },
  "dossier": {
    "name": "Dossier Wirkungsgeschichte Heidi (bereitgestellte Arbeitsgrundlage)",
    "url": "quellen/Dossier_Wirkungsgeschichte_Heidi.docx"
  },
  "afi": {
    "name": "American Film Institute: Heidi (1937)",
    "url": "https://catalog.afi.com/Film/4256-HEIDI"
  },
  "filmo": {
    "name": "filmo: Heidi (1952)",
    "url": "https://www.filmo.ch/Edition/katalog/staffel-11/heidi.html"
  },
  "srf55": {
    "name": "SRF: Heidi und Peter (1955)",
    "url": "https://www.srf.ch/kultur/film-serien/film-serien-heidi-und-peter-1955"
  },
  "fp65": {
    "name": "DFF / filmportal: Heidi (1965)",
    "url": "https://www.filmportal.de/film/heidi_3433dc9200b04cc4923fcb3f7863320c"
  },
  "lib68": {
    "name": "Bibliothekskatalog SEKnFIND: Heidi, NBC-Fernsehfassung (1968)",
    "url": "https://www.seknfind.org/cgi-bin/koha/opac-detail.pl?biblionumber=662102"
  },
  "srf78": {
    "name": "SRF-Chronik: Serienstart am 13. September 1978",
    "url": "https://medien.srf.ch/documents/20142/3708308/13._September_1978-Start_der_26-teiligen_Serie__Heidi_.pdf/65527ef3-59ad-c948-3c82-14f499717d5f?t=1548925423965"
  },
  "disney": {
    "name": "Disney D23: Heidi (television), 1993",
    "url": "https://d23.com/a-to-z/heidi-television/"
  },
  "porta": {
    "name": "Kantonsbibliothek Graubünden / Porta Cultura: Heidi (2001)",
    "url": "https://portacultura.gr.ch/records/AVGR6945"
  },
  "swissinfo": {
    "name": "SWI swissinfo: Up-to-date Heidi (29. März 2001)",
    "url": "https://www.swissinfo.ch/eng/culture/up-to-date-heidi-seen-on-swiss-cinema-screens/1961694"
  },
  "marcus": {
    "name": "Common Sense Media: Heidi (2005), Filmangaben",
    "url": "https://www.commonsensemedia.org/movie-reviews/heidi-2005"
  },
  "gsponer": {
    "name": "SWISS FILMS: Heidi (2015)",
    "url": "https://www.swissfilms.ch/de/movie/heidi/888b5e77507647fca49e7f9f4617cb37"
  },
  "lesen": {
    "name": "Stiftung Lesen: Unterrichtsmaterial zu Heidi (2015)",
    "url": "https://www.stiftunglesen.de/fileadmin/Schulportal/06_Lehrmaterial/02_Materialien_zur_Filmbildung/30_HEIDI/HEIDI_final_D_02.pdf"
  },
  "cgi": {
    "name": "Studio 100: Heidi, CGI-Serie (2014–2015 / 2019)",
    "url": "https://www.studio100international.com/en/catalog/heidi-2/"
  },
  "mad": {
    "name": "SWISS FILMS: Mad Heidi (2022)",
    "url": "https://www.swissfilms.ch/en/movie/mad-heidi/e2d52cd513ba427d9305da7a63a7746e"
  },
  "madprod": {
    "name": "a film company: Mad Heidi – Selbstbeschreibung der Produktion",
    "url": "https://afilmcompany.ch/en/film/mad-heidi-2/"
  },
  "lynx": {
    "name": "Studio 100: Heidi – Rescue of the Lynx (2025)",
    "url": "https://www.studio100international.com/en/catalog/heidi-rescue-of-the-lynx/"
  },
  "colors": {
    "name": "Universität Zürich: Timeline of Historical Film Colors, Prizma II",
    "url": "https://filmcolors.org/timeline-entry/1235/"
  },
  "unesco": {
    "name": "UNESCO: Heidi and Johanna Spyri Archives",
    "url": "https://www.unesco.org/en/memory-world/heidi-and-johanna-spyri-archives"
  },
  "archiv": {
    "name": "SIKJM: Bestand des Johanna Spyri-Archivs",
    "url": "https://sikjm.ch/forschung-bibliothek/johanna-spyri-archiv/bestand/"
  },
  "tourism": {
    "name": "Heididorf: Faszination Heidi – touristische Selbstdarstellung",
    "url": "https://www.heididorf.ch/willkommen/faszination-heidi/"
  },
  "karpi": {
    "name": "Karpi: Cursed Heidi, Originalvideo vom 10. Juli 2023",
    "url": "https://www.youtube.com/watch?v=0A2-Af5JEWU"
  },
  "archive_1953bbc": {
    "name": "IMDb: Heidi (1953); ergänzend BBC-Nachweise in Julia Lockwoods Filmografie",
    "url": "https://www.imdb.com/title/tt0424138/"
  },
  "archive_1954grows": {
    "name": "IMDb: Heidi Grows Up (1954)",
    "url": "https://www.imdb.com/title/tt0424139/"
  },
  "archive_1955musical": {
    "name": "Paley Center: Max Liebman Presents: Heidi, 1.10.1955",
    "url": "https://www.paleycenter.org/collection/item?item=B%3A29624"
  },
  "archive_1958gift": {
    "name": "TCM: A Gift for Heidi",
    "url": "https://www.tcm.com/watchtcm/titles/3554"
  },
  "archive_1958india": {
    "name": "IMDb: Do Phool (1958), Besetzung und Vorlage",
    "url": "https://www.imdb.com/title/tt0231474/fullcredits/"
  },
  "archive_1959bbc": {
    "name": "BBC Programme Index: Heidi, Up the Mountain, 19.5.1959",
    "url": "https://genome.ch.bbc.co.uk/8d3dbd53d8d342b2aa9d0de3d07487e3"
  },
  "archive_1974bbc": {
    "name": "IMDb: BBC-Heidi (1974), Credits",
    "url": "https://www.imdb.com/title/tt0228374/fullcredits/"
  },
  "archive_1978new": {
    "name": "Ralph Senensky: eigener Produktionsbericht mit Ausschnitten",
    "url": "https://ralph-senensky.blogspot.com/2010/08/new-adventures-of-heidi-june-july-1978.html"
  },
  "archive_1982song": {
    "name": "AFI: Heidi’s Song (1982)",
    "url": "https://catalog.afi.com/Catalog/moviedetails/56792"
  },
  "archive_1987climb": {
    "name": "Vision Video: Classic Children’s Films, Vertriebsvorschau",
    "url": "https://vimeo.com/118949719"
  },
  "archive_1990courage": {
    "name": "AFI: Courage Mountain (1990)",
    "url": "https://catalog.afi.com/Film/58458-COURAGE-MOUNTAIN"
  },
  "archive_1992art": {
    "name": "Whitney Museum: Mike Kelley / Paul McCarthy, Heidi (1992)",
    "url": "https://whitney.org/collection/works/34266"
  },
  "archive_1995jetlag": {
    "name": "IMDb: Heidi (1995), Jetlag-Fassung",
    "url": "https://www.imdb.com/title/tt0213709/"
  },
  "archive_1998short": {
    "name": "Swiss Films: Alain Gsponer, Filmografie; abweichend SRG 1998",
    "url": "https://swissfilms.ch/en/person/alain-gsponer/d4c40e6f25334f708ee61b4964f0dc37"
  },
  "archive_2005animation": {
    "name": "DFF / filmportal: Heidi (2004/2005), Alan Simpson",
    "url": "https://www.filmportal.de/film/heidi_24a1ad0d0348473b971042ec1b19b8dc"
  },
  "archive_2007teen": {
    "name": "AlloCiné: Heidi, Staffel und Episoden (2007)",
    "url": "https://www.allocine.fr/series/ficheserie-3766/saison-6780/"
  },
  "archive_2008paws": {
    "name": "WTTW: Jahresbericht 2008, Heidi 4 Paws",
    "url": "https://www.wttw.com/sites/default/files/2008-WTTW-WFMT-Annual-Report.pdf"
  },
  "archive_2017bienvenida": {
    "name": "Mondo TV Iberoamérica: Unternehmensdokument 2016, Heidi-Projekt",
    "url": "https://www.bmegrowth.es/docs/documentos/Otros/2016/12/MONDO_Folleto_20161216.pdf"
  },
  "archive_2024moody": {
    "name": "Precious Light Pictures: Heidi (2024)",
    "url": "https://preciouslightpictures.com/ourfilms.php"
  },
  "indiaarchive": {
    "name": "National Film Archive of India: digitalisierte und restaurierte Filme, Do Phool (1958)",
    "url": "https://nfai.nfdcindia.com/upload/circleIconPdf/1499148501_Digitized%20and%20Restored%20Films%20List.pdf"
  },
  "goetz": {
    "name": "Sammlung Goetz: Heidi, Kelley / McCarthy",
    "url": "https://online.sammlung-goetz.de/en/work/heidi-mike-kelley-paul-mccarthy/"
  },
  "gsponersrg": {
    "name": "SRG: Gsponers Heidi und sein Kurzfilm von 1998",
    "url": "https://www.srgd.ch/aktuelles/news/harte-kindheit-statt-heile-welt-heidi-pfeift-auf-schonfarberei/"
  },
  "archivalstudy": {
    "name": "Camilla Badstübner-Kizik: Heidi – endlessly revisitable? (2022), Filmografie S. 181–182",
    "url": "https://www.iudicium.de/katalog/9783862058792.pdf#page=182"
  },
  "climbdate": {
    "name": "Apple TV: Climb a Tall Mountain (1987), Fassung mit 39 Minuten",
    "url": "https://tv.apple.com/us/episode/climb-a-tall-mountain/umc.cmc.2vod0e0y9mwa6ziiai1kph5tr?showId=umc.cmc.2exy0cnmdprj94soy0wn01jp8"
  }
};
const films = [
  {
    "id": "1920",
    "video": "media/heidi-of-the-alps-1920-fragment.mp4",
    "year": "1920",
    "title": "Heidi of the Alps",
    "director": "Frederick A. Thomson",
    "kind": "Kino",
    "country": "USA · Stummfilm / Prizma",
    "mode": "Frühe Farbfilmgeschichte",
    "tag": "Archivfenster",
    "facts": "Schon vor Shirley Temple gelangte Heidi ins Kino. Die filmhistorische Datenbank der Universität Zürich verzeichnet die Fassung von 1920 im Zusammenhang mit dem Prizma-Verfahren. Stummfilm und früher Farbfilm sind also keine Gegensätze.",
    "analysis": "Der Zwischentitel ordnet Peters Verhalten als geplante Rache ein: Klara nehme ihm Heidi weg. Danach sieht das Publikum den Umgang mit dem Rollstuhl und dessen zerstörten Zustand. Heidi kommt erst später hinzu. Ihre anschliessende Frage prüft eine Vermutung, während das Publikum schon Tat und Motiv verknüpfen konnte. Die Spannung liegt nun im Aufdecken und Eingestehen der Schuld. Der Text legt das Motiv deutlicher fest, als Peters Blick allein es könnte.",
    "context": "Die Zürcher Filmfarbendatenbank führt Heidi of the Alps (USA 1920, Frederick A. Thomson) unter Prizma II, einem subtraktiven Zweifarbenverfahren der Jahre 1919–1923. Der verfügbare Upload trägt das Wasserzeichen des Film Festival della Lessinia. Diese Datei zeigt keine Dokumentation ihrer Digitalisierung; ihre konkreten Farbtöne sind deshalb kein Messbeleg für eine Premierenkopie.",
    "question": "Warum ist Heidis Frage an Peter für das Publikum keine offene Täterfrage mehr? Was macht der Zwischentitel über Peters Rachepläne mit der Deutung der anschliessenden Tat?",
    "scene": "Bereitgestelltes Fragment · 01:03–01:39 und 01:48–02:30; Zeiten ab Dateibeginn. Starte bei 01:03. Halte beim zerstörten Rollstuhl an. Starte danach bei 01:48 und lies Heidis Reaktion. Schreibe getrennt auf, was du über Peter weisst und was Heidi erst vermutet.",
    "refs": [
      "colors"
    ],
    "compare": [
      "Im Fragment untersuchbar; Gesamtbogen bleibt offen",
      "Frühe Farbtechnik als Untersuchungsfeld",
      "Gestik und Bildgestaltung am Fragment prüfen",
      "Überlieferung, Digitalisierung und Katalogisierung"
    ]
  },
  {
    "id": "1937",
    "year": "1937",
    "title": "Heidi",
    "director": "Allan Dwan",
    "kind": "Kino",
    "country": "USA · Shirley Temple",
    "mode": "Kinderstar & Rettungsmelodram",
    "tag": "Vertiefung",
    "facts": "Shirley Temple spielt Heidi. Der AFI-Katalog dokumentiert eine gravierende Verschiebung: Klara geht bereits in Frankfurt. Rottenmeier will ihre Abhängigkeit erhalten; der Grossvater sucht Heidi in der Stadt. Eine Musik- und Tanznummer gehört ebenfalls zur Fassung.",
    "analysis": "Klaras körperliche Entwicklung und Heidis sichere Rückkehr sind getrennte Probleme. Rottenmeiers Interesse macht Abhängigkeit zum zwischenmenschlichen Machtkonflikt; der suchende Grossvater trägt einen eigenen Rettungsbogen. Die Verlagerung des Gehens nach Frankfurt entkoppelt diese Entwicklung von einem notwendigen Aufenthalt auf der Alp.",
    "context": "Im Hollywood-Studiokino der 1930er-Jahre verbanden sich literarische Stoffe mit wiedererkennbaren Star-Personas. Tomkowiak zeigt, wie die Schweizer Ablehnung dieser Bearbeitung Forderungen nach einer «eigenen» Heidi beförderte; solche Reaktionen sind Teil nationaler Kulturpolitik.",
    "question": "Warum kann Klaras Gehfähigkeit diese Fassung nicht bereits abschliessen? Welche zusätzliche Spannung erzeugt Rottenmeiers Interesse an ihrer Abhängigkeit?",
    "scene": "AFI-Handlungsreferat · hier als Paraphrase; der eingebettete Film ist ein Trailer. Lege zwei kurze Handlungsketten an: Klaras neu gewonnene Beweglichkeit; Heidis Rettung durch den Grossvater. Verbinde in jeder Kette Person, Hindernis und Lösung.",
    "refs": [
      "afi",
      "tomkowiak"
    ],
    "compare": [
      "Rottenmeier als stark zugespitzte Gegenspielerin",
      "Rettungs- und Wiedervereinigungsdramaturgie",
      "Starpräsenz, Gesang und Tanz",
      "Hollywood-Starkino; Schweizer Abwehrreaktionen"
    ],
    "access": {
      "label": "Offizielle Filmseite · 20th Century",
      "url": "https://family.20thcenturystudios.com/movies/heidi",
      "type": "Filmseite"
    }
  },
  {
    "id": "1952",
    "year": "1952",
    "title": "Heidi",
    "director": "Luigi Comencini",
    "kind": "Kino",
    "country": "Schweiz · Elsbeth Sigmund, Heinrich Gretler",
    "mode": "Kindliche Erfahrung & Heimat",
    "tag": "Vertiefung",
    "facts": "Die Praesens-Produktion erzählt in Schwarzweiss. Comencini arbeitet mit Elsbeth Sigmund als Heidi und Heinrich Gretler als Alpöhi. Der Gegensatz zwischen dem Leben auf der Alp und der Frankfurter Ordnung bildet die räumliche Grundstruktur.",
    "analysis": "Der zweite Titel macht den Verlust und das Verlangen nach einem vertrauten Ort zum Erwartungsrahmen. Ein Publikum nach dem Krieg konnte daran eigene Erfahrungen anschliessen. Das ist ein Rezeptionsangebot des Verleihtitels, kein Beleg dafür, dass Heidi im Film eine Kriegsvertriebene ist.",
    "context": "Nach Tomkowiak standen nationale Authentizitätsansprüche neben internationalen Vermarktungsinteressen. Der deutsche Verleihtitel «Sehnsucht nach der Heimat» eröffnete Anschlüsse an westdeutsche Erfahrungen von Heimatverlust. Der Film spielt dennoch im 19. Jahrhundert: Er ist kein in Trümmerstädten angesiedeltes Nachkriegsdrama.",
    "question": "Welche Zuschauererfahrung rückt der zweite Titel in den Vordergrund, ohne die Handlung in die Nachkriegszeit zu versetzen?",
    "scene": "Tomkowiaks Rezeptionsbefund und Produktionsangaben; kein Auftrag zu ungesehenen Szenen. Schreibe zwei Vorschauen von je einem Satz: eine unter «Heidi», eine unter «Sehnsucht nach der Heimat». Verwende in beiden denselben Ortswechsel Alp–Frankfurt.",
    "refs": [
      "filmo",
      "tomkowiak"
    ],
    "compare": [
      "Heimweh und erwachsene Verfügungsgewalt",
      "Trennung, Leiden, Rückkehr",
      "Schwarzweiss, Kinderspiel, räumliche Kontraste",
      "Nachkriegsrezeption zwischen Heimatverlust und Export"
    ],
    "access": {
      "label": "filmo · Filmseite & Filmangebote",
      "url": "https://www.filmo.ch/Edition/katalog/staffel-11/heidi.html",
      "type": "Filmangebote"
    }
  },
  {
    "id": "1953bbc",
    "year": "1953",
    "title": "Heidi · BBC",
    "director": "Joy Harington · Bearbeitung / Produktion",
    "kind": "Fernsehen",
    "country": "Grossbritannien · Julia Lockwood",
    "mode": "Frühes serielles Kinderfernsehen",
    "tag": "Erweitertes Archiv",
    "facts": "Die BBC produzierte bereits 1953 eine Heidi-Fassung mit Julia Lockwood. Sie gehört in die Fernsehgeschichte vor dem Anime und vor der Schweizer Serie.",
    "analysis": "1953 liegt vor 1974 und belegt eine frühere Fernsehbearbeitung. Die Besetzungsangabe identifiziert sie; sie beschreibt keine Einstellung. Um Tempo oder Bildgestaltung zu beurteilen, wäre eine Kopie beziehungsweise ein entsprechendes Produktionsdokument nötig.",
    "context": "Die Literaturbearbeitung macht einen bekannten Kinderbuchstoff im damals jungen Fernsehmedium verfügbar. Der Unterschied zwischen Studioaufnahme, Filmeinspielung und heute erhaltener Kopie ist bei frühen Fernsehproduktionen mitzuprüfen.",
    "question": "Welche historische Behauptung widerlegt der Eintrag von 1953 – und warum verrät er trotzdem noch nichts über Kameranähe oder Erzähltempo?",
    "scene": "Archivnachweis zur BBC-Produktion von 1953 · kein verifizierter Clip vorhanden. Korrigiere den Katalogsatz: «Heidi kam erst 1974 vom Kino ins Fernsehen.» Behalte nur Angaben bei, die der Nachweis von 1953 tatsächlich trägt.",
    "compare": [
      "Romanstoff in Fortsetzungen",
      "Episodenstruktur als Prüfauftrag",
      "Frühes britisches Fernsehen",
      "Sendebeleg und Filmkopie unterscheiden"
    ],
    "refs": [
      "archive_1953bbc"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://www.imdb.com/title/tt0424138/",
      "type": "Nachweis"
    }
  },
  {
    "id": "1954grows",
    "year": "1954",
    "title": "Heidi Grows Up",
    "director": "BBC · Joy Harington zugeschrieben",
    "kind": "Fernsehen",
    "country": "Grossbritannien · Julia Lockwood",
    "mode": "Eine Figur darf weiterleben",
    "tag": "Erweitertes Archiv",
    "facts": "Diese BBC-Fortsetzung ist als eigenständige Produktion von 1954 dokumentiert. Angaben zu Umfang und Regiezuschreibung sind in Filmografien nicht einheitlich; sie werden hier nicht als gesicherte Episodenzahl übernommen.",
    "analysis": "«Wächst heran» kündigt einen längerfristigen Entwicklungsprozess an. Eine neue Altersstufe könnte neue Entscheidungen verlangen. Der Titel belegt dieses Versprechen, aber weder einen bestimmten Konflikt noch die Zahl oder das Ende der Episoden. Ein eigener Fortsetzungsentwurf bleibt davon getrennt.",
    "context": "Die Fortsetzung gehört zur frühen seriellen Verwertung des Heidi-Stoffs. Sie ist vom Schweizer Kinofilm Heidi und Peter (1955) zu unterscheiden.",
    "question": "Wodurch verschiebt das angekündigte Heranwachsen den Zeithorizont gegenüber einer blossen Wiederholung von Heidis Rückkehr?",
    "scene": "BBC-Fortsetzung von 1954 · Titel- und Produktionsnachweis; kein verifizierter Clip. Übertrage «Grows Up» ins Deutsche. Stelle dem Titel eine Frage gegenüber, die nach Heidis Rückkehr auf die Alp noch offen sein könnte. Kennzeichne deinen Handlungsvorschlag als Entwurf.",
    "compare": [
      "Weitererzählen nach dem Roman",
      "Wachstum statt nur Heimkehr",
      "Fortsetzungsserie",
      "Britische Fernsehrezeption"
    ],
    "refs": [
      "archive_1954grows",
      "archivalstudy"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://www.imdb.com/title/tt0424139/",
      "type": "Nachweis"
    }
  },
  {
    "id": "1955",
    "year": "1955",
    "title": "Heidi und Peter",
    "director": "Franz Schnyder",
    "kind": "Kino",
    "country": "Schweiz · Fortsetzung in Farbe",
    "mode": "Gemeinschaft & Naturereignis",
    "tag": "Vertiefung",
    "facts": "Die Fortsetzung übernimmt zentrale Darstellende von 1952. SRF hebt die farbige Berglandschaft und die aufwendig inszenierte Sturm- und Überschwemmungssequenz hervor. Sie erweitert die Konflikte um ein Ereignis, das die Dorfgemeinschaft betrifft.",
    "analysis": "Die Natur erhält neben ihrer wohltuenden Funktion eine bedrohliche. Der Katastrophenkonflikt vergrössert die Zahl der Betroffenen und ermöglicht gemeinsame Rettungshandlungen. Er wiederholt Klaras Entwicklung nicht, sondern ergänzt sie um einen kollektiven Höhepunkt.",
    "context": "Farbfilm und technische Schauwerte steigern das touristisch verwertbare Alpenbild. Tomkowiak dokumentiert zugleich Kritik an einem gefälligen Exportprodukt. Nationales Selbstbild und internationaler Markt wirken zusammen; «Schweizer Film» ist keine Garantie für eine einzige, unveränderte Bedeutung.",
    "question": "Was verändert die Überschwemmung am Modell der heilsamen Bergwelt, wenn nun eine ganze Gemeinschaft statt eines einzelnen Kindes gefährdet ist?",
    "scene": "SRF-Beschreibung der Sturm- und Überschwemmungssequenz in Heidi und Peter. Ordne zwei Konflikte nebeneinander: Klaras Entwicklung und die Überschwemmung. Benenne für jeden, wer betroffen ist und welche Art von Handeln eine Lösung verlangt.",
    "refs": [
      "srf55",
      "tomkowiak"
    ],
    "compare": [
      "Persönliche Konflikte und Gefahr für das Dorf",
      "Zusätzlicher kollektiver Katastrophenhöhepunkt",
      "Farbe, Landschaft, Sturmsequenz",
      "Nachkriegskino und touristische Exportbilder"
    ],
    "access": {
      "label": "filmo · Filmseite & Filmangebote",
      "url": "https://www.filmo.ch/Edition/katalog/staffel-11/heidi-und-peter.html",
      "type": "Filmangebote"
    }
  },
  {
    "id": "1955musical",
    "year": "1955",
    "title": "Max Liebman Presents: Heidi",
    "director": "Max Liebman",
    "kind": "Fernsehen",
    "country": "USA · NBC · Jeannie Carson",
    "mode": "Das Fernsehmusical",
    "tag": "Erweitertes Archiv",
    "facts": "Das Paley Center belegt die Sendung am 1. Oktober 1955, mit Jeannie Carson, Wally Cox und Natalie Wood. Musik, Tanz und Marionetten gehören zu den dokumentierten Gestaltungsmitteln. Eine Schwarzweisskopie überliefert die Farbsendung.",
    "analysis": "Sendung und erhaltene Kopie sind verschiedene Überlieferungsstufen. Farbe kann im heute zugänglichen Material fehlen, obwohl die Erstausstrahlung farbig war. Der musikalische Vortrag bleibt im Ausschnitt untersuchbar; die Farbdramaturgie der ursprünglichen Sendung ist damit nicht rekonstruiert.",
    "context": "Die Produktion verbindet Literaturadaption und US-Fernsehspektakel der 1950er-Jahre. Die Archivkopie zeigt auch, warum die Farbe einer heutigen Kopie nicht automatisch die Farbe der Erstausstrahlung belegt.",
    "question": "Warum darf deine Beschreibung des heute sichtbaren Schwarzweissbilds nicht als Aussage über die Erstausstrahlung formuliert werden?",
    "scene": "Paley-Katalogbefund und die eingebettete VAI-Vertriebsvorschau von 1:45. Schalte den Ausschnitt kurz stumm und wieder laut. Notiere, was du am musikalischen Vortrag prüfen kannst. Ergänze daneben die Katalogangabe zur ursprünglichen Sendefarbe.",
    "compare": [
      "Beziehungskonflikte als Musical",
      "Handlung und Nummernfolge",
      "Gesang, Tanz, Marionetten",
      "NBC-Fernsehspektakel 1955"
    ],
    "refs": [
      "archive_1955musical"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://www.paleycenter.org/collection/item?item=B%3A29624",
      "type": "Nachweis"
    }
  },
  {
    "id": "1958gift",
    "year": "1958",
    "title": "A Gift for Heidi",
    "director": "George Templeton",
    "kind": "Kino",
    "country": "USA · Sandy Descher",
    "mode": "Neue Abenteuer und religiöse Bewährung",
    "tag": "Erweitertes Archiv",
    "facts": "Die Fortführung der Heidi-Figur verbindet Abenteuer in den Alpen mit einer moralisch-religiösen Ausrichtung. Sie erzählt zusätzliche Erlebnisse statt lediglich die Frankfurt-Handlung erneut abzubilden.",
    "analysis": "«Geschenk» benennt noch weder einen Geber noch eine religiöse Bedeutung oder einen Ausgang. Die religiöse Katalogeinordnung kann eine weitere Untersuchung motivieren. Sie ersetzt den Beleg im gesehenen Abschnitt nicht; ein religiös unmarkierter Anfang widerlegt umgekehrt nicht die Einordnung des ganzen Films.",
    "context": "Der Familienfilm der Nachkriegszeit verknüpft einen international bekannten Stoff mit Vorstellungen von Fürsorge und Glauben. Diese Perspektive lässt sich mit den religiösen Anteilen von Spyris Roman vergleichen.",
    "question": "Weshalb wäre es unzulässig, aus dem übersetzten Wort «Geschenk» allein auf eine religiöse Rettung am Ende zu schliessen?",
    "scene": "Eingebetteter Anfang der spanisch synchronisierten Fassung von A Gift for Heidi. Prüfe zunächst Titel und Besetzung des Uploads. Halte dann fest, ob der sichtbare Anfang bereits einen ausdrücklich religiösen Hinweis enthält. Wenn nicht, notiere genau diese Begrenzung.",
    "compare": [
      "Moralische Bewährung",
      "Zusätzliche Abenteuer",
      "Gefahr und Rettung",
      "Religiös geprägter Familienfilm"
    ],
    "refs": [
      "archive_1958gift"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://www.tcm.com/watchtcm/titles/3554",
      "type": "Nachweis"
    }
  },
  {
    "id": "1958india",
    "year": "1958",
    "title": "Do Phool",
    "director": "Abdul Rashid Kardar",
    "kind": "Kino",
    "country": "Indien · Hindi · Baby Naaz",
    "mode": "Kulturelle Übertragung",
    "tag": "Erweitertes Archiv",
    "facts": "Die indische Heidi-Bearbeitung von 1958 setzt Baby Naaz als Poornima ein. Das National Film Archive of India führt Do Phool mit Regisseur A. R. Kardar in seiner Liste digitalisierter und restaurierter Filme.",
    "analysis": "Eigennamen und Schauplatzzeichen können ersetzt werden, während Handlungsmuster wie Fremdbestimmung, Fürsorge oder ein Wechsel zwischen ungleichen Haushalten erhalten bleiben. Das Diagramm ist eine begründete Suchstruktur, keine vollständige Inhaltsbeschreibung von Do Phool. Der Restaurierungsnachweis allein belegt keine dieser Beziehungen.",
    "context": "Die Adaption gehört zur internationalen Aneignung europäischer Kinderliteratur im Hindi-Kino. Die Forschung behandelt sie ausdrücklich unter der Frage nach arbeitenden Kindern; die Schweizer Alpen sind kein notwendiges Kriterium einer Heidi-Adaption.",
    "question": "Warum ist Poornimas anderer Name ein schwächeres Kriterium für oder gegen eine Heidi-Adaption als ihre Abhängigkeit von Erwachsenen und die Funktion ihres Ortswechsels?",
    "scene": "Restaurierungsnachweis des indischen Filmarchivs und Angaben zur Adaption Do Phool (1958). Entwirf ein Beziehungsdiagramm, das ohne die Wörter «Alp», «Schweiz» und «Heidi» auskommt: Kind, betreuende Erwachsene, wohlhabender Haushalt. Markiere, welche Verbindung du anhand einer Inhaltsquelle noch prüfen müsstest.",
    "compare": [
      "Fürsorge und soziale Abhängigkeit",
      "Kulturelle Transformation",
      "Hindi-Kino und Musik",
      "Internationale Adaption nach 1947"
    ],
    "refs": [
      "archive_1958india",
      "indiaarchive"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://www.imdb.com/title/tt0231474/fullcredits/",
      "type": "Nachweis"
    }
  },
  {
    "id": "1959bbc",
    "year": "1959",
    "title": "Heidi · BBC-Neubearbeitung",
    "director": "Joy Harington",
    "kind": "Fernsehen",
    "country": "Grossbritannien · Sara O’Connor",
    "mode": "Sechs Fernsehkapitel",
    "tag": "Erweitertes Archiv",
    "facts": "Der BBC Programme Index belegt den Beginn am 19. Mai 1959 und sechs Teile. Sara O’Connor spielt Heidi, Mark Dignam den Grossvater. Damit handelt es sich um eine andere Besetzung als 1953.",
    "analysis": "Ein bestehender Film kann später erneut gesendet werden; ein anderes Datum ist deshalb kein hinreichender Nachweis einer Neuproduktion. Die unterschiedliche Besetzung derselben Rolle unterscheidet hier die Fassungen. Der Programmeintrag liefert zusätzlich den Start und die Gliederung in sechs Teile.",
    "context": "Die erneute Bearbeitung im selben Jahrzehnt zeigt, dass nicht jede wiederkehrende Heidi-Sendung eine Wiederholung derselben Produktion ist. Besetzung, Herstellungsangabe und Sendedatum müssen zusammen geprüft werden.",
    "question": "Weshalb ist der Wechsel von Julia Lockwood zu Sara O’Connor aussagekräftiger als der Abstand von sechs Jahren?",
    "scene": "BBC Programme Index · Up the Mountain, 19. Mai 1959; Vergleich mit dem Eintrag 1953. Unterstreiche den Unterschied, der die Erklärung «blosse Wiederholung von 1953» ausschliesst. Schreibe eine korrigierte Katalognotiz mit Besetzung und Sendestart.",
    "compare": [
      "Beziehungen über Episoden",
      "Sechsteilige Adaption",
      "Fernsehkapitel",
      "BBC-Kinderfernsehen der 1950er"
    ],
    "refs": [
      "archive_1959bbc"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://genome.ch.bbc.co.uk/8d3dbd53d8d342b2aa9d0de3d07487e3",
      "type": "Nachweis"
    }
  },
  {
    "id": "1965",
    "year": "1965",
    "title": "Heidi",
    "director": "Werner Jacobs",
    "kind": "Kino",
    "country": "Österreich · Eva Maria Singhammer",
    "mode": "Der vertraute Stoff im Farbfilm",
    "tag": "Vergleichsfenster",
    "facts": "Die österreichische Sascha-Film-Produktion besetzt Heidi mit Eva Maria Singhammer, den Grossvater mit Gustav Knuth und Klara mit Michaela May. Das DFF verzeichnet den deutschen Kinostart am 29. Oktober 1965 und eine Laufzeit von 98 Minuten.",
    "analysis": "Ein Name weist eine Besetzung nach, keine Wirkung einer bestimmten Szene. Autorität könnte sich in einem befolgten Befehl, Kontrolle über einen Raum oder einer Entscheidung über Heidi zeigen; Sympathie müsste nochmals anders begründet werden. Wenn das Auftreten im Dreiminutenausschnitt fehlt, ist die Behauptung dort nicht prüfbar.",
    "context": "Die Produktion gehört zum deutschsprachigen Unterhaltungskino der 1960er-Jahre. Das Erscheinungsjahr allein beweist jedoch weder eine konservative Aussage noch einen bewussten Gegenentwurf zum gesellschaftlichen Wandel. Filmform und konkrete Figurenzeichnung bleiben die Belege.",
    "question": "Welche konkrete Beobachtung könnte die behauptete Autorität begründen, die Besetzung und Erscheinungsjahr allein aber nicht liefern?",
    "scene": "DFF-Filmangaben: Sascha-Film, 1965; Gustav Knuth, Eva Maria Singhammer, Michaela May. Korrigiere diese Behauptung: «Weil ein bekannter erwachsener Schauspieler den Grossvater spielt, ist er von Beginn an die sympathische Autorität.» Benenne den fehlenden Beleg am ersten Auftreten.",
    "refs": [
      "fp65"
    ],
    "compare": [
      "Am Szenenmaterial zu prüfen",
      "Verdichtung zum abendfüllenden Familienfilm",
      "Farbfilm und bekannte Darstellende",
      "Deutschsprachiges Unterhaltungskino der 1960er-Jahre"
    ]
  },
  {
    "id": "1968",
    "year": "1968",
    "title": "Heidi",
    "director": "Delbert Mann",
    "kind": "Fernsehen",
    "country": "USA · Jennifer Edwards, Michael Redgrave",
    "mode": "Literatur als Fernsehereignis",
    "tag": "Vergleichsfenster",
    "facts": "Die NBC-Fernsehfassung besetzt Heidi mit Jennifer Edwards und den Grossvater mit Michael Redgrave. Jean Simmons spielt Rottenmeier, Maximilian Schell Herrn Sesemann. Die Musik stammt von John Williams.",
    "analysis": "Das Ensemble eröffnet mehrere Beziehungen, die inszeniert werden können. Weder Schauspielernamen noch Ausstrahlungsmedium bestimmen Einstellungsgrössen. Erst der Trailer beziehungsweise eine Szene zeigt, ob Nähe über Gesichter, Stimmen, Musik oder räumliche Anordnung entsteht; ein Trailer belegt dabei nur seine eigene Auswahl.",
    "context": "Literaturverfilmungen konnten im amerikanischen Fernsehen als besonderes Familienprogramm auftreten. Ein Film bleibt dabei zeitlich komprimiert; er ermöglicht nicht dasselbe lange Zusammenleben mit Figuren wie eine Jahresserie.",
    "question": "Warum wäre die Folgerung «Fernsehen bedeutet automatisch Nahaufnahmen und Dialognähe» trotz dieser bekannten Darstellenden unbegründet?",
    "scene": "Besetzungsangaben zur NBC-Fassung von Delbert Mann; Trailer als ergänzender Zugang. Zeichne die Verbindung Heidi–Grossvater und die Verbindung Rottenmeier–Sesemann. Ordne der ersten Zugehörigkeit, der zweiten die Zuständigkeit im Frankfurter Haushalt als Untersuchungsfrage zu.",
    "refs": [
      "lib68"
    ],
    "compare": [
      "Familienbeziehungen als Analyseachse",
      "Einzelner Fernsehfilm mit verdichtetem Bogen",
      "Schauspiel und Musik als Prüfgegenstände",
      "Amerikanisches Familienfernsehen"
    ]
  },
  {
    "id": "1974",
    "year": "1974",
    "title": "Alps no Shōjo Heidi",
    "director": "Isao Takahata",
    "kind": "Animation",
    "country": "Japan · 52 Folgen · Zuiyo Eizo",
    "mode": "Dramaturgie des Alltags",
    "tag": "Vertiefung",
    "facts": "Takahata führt Regie, Hayao Miyazaki gestaltet Layouts, Yōichi Kotabe prägt das Figurendesign. Die Serie ist keine Studio-Ghibli-Produktion. Takahata erläutert drei Eingriffe: Peter zerstört Klaras Rollstuhl nicht aus Eifersucht; die christliche Botschaft wird reduziert; Rottenmeier reist auf die Alp.",
    "analysis": "Die Schuldfrage «Warum hast du ihr das angetan?» gegenüber Peter setzt seine absichtliche Tat voraus; diese entfällt. Stattdessen verbindet Takahata den Unfall mit Klaras schwankender Entschlossenheit. Er beschreibt, dass der Anime bis zu ihrem Gehen mehr Zeit auf Freundschaft und ihre Gefühle verwendet. Die Spannung verlagert sich damit vom Aufdecken und Vergeben einer Tat auf die Entwicklung von Mut und Unterstützung.",
    "context": "Takahata erläutert den Eingriff in seinem Werkbericht. Seine Aussagen zur japanischen Wachstumsgesellschaft betreffen die Entstehungsperspektive der Serie; sie ersetzen keine Untersuchung der späteren Zuschauerreaktionen.",
    "question": "Welche Frage an Peter verliert damit ihre Grundlage – und weshalb bedeutet das noch nicht, dass Klaras Schwierigkeiten im Anime verschwinden?",
    "scene": "Takahatas Werkbericht, gedruckte S. 202–203 (PDF-Seiten 203–204) · Paraphrase seines Eingriffs. Stelle der bewussten Tat im Fragment von 1920 diese dokumentierte Änderung gegenüber. Streiche aus der 1920er Handlungskette das Glied «Peter plant Rache».",
    "refs": [
      "takahata",
      "stetter",
      "bando"
    ],
    "compare": [
      "Fremdbestimmung, Heimweh und Beziehungsentwicklung",
      "Langzeitbindung durch alltägliche Mikroereignisse",
      "Animation, Körperbewegung, Räume, Wiederholung",
      "Japanisches Wachstum und bewusstes Gegenangebot"
    ]
  },
  {
    "id": "1974bbc",
    "year": "1974",
    "title": "Heidi · BBC-Realserie",
    "director": "June Wyndham-Davies",
    "kind": "Fernsehen",
    "country": "Grossbritannien · Emma Blake",
    "mode": "Zeitgleich mit dem Anime",
    "tag": "Erweitertes Archiv",
    "facts": "Neben Takahatas Anime entstand 1974 eine britische Realserie mit Emma Blake und Hans Meyer. June Wyndham-Davies inszenierte die sechsteilige Produktion.",
    "analysis": "Die Sprache einer Fassung bestimmt nicht deren Produktionsidentität. Realaufnahme, Emma Blake und BBC bezeichnen die gesuchte Serie präziser. Ein englisch synchronisierter gezeichneter Film bleibt die Anime-Produktion und wird nicht nachträglich zur BBC-Neuverfilmung.",
    "context": "1974 bezeichnet zwei eigenständige Heidi-Produktionen. Die Jahreszahl allein identifiziert die Fassung nicht. Der Vergleich zeigt unterschiedliche Wege seriellen Kinderfernsehens innerhalb derselben Epoche.",
    "question": "Welche falsche Zuschreibung entsteht, wenn ein englisch synchronisierter Anime allein wegen der Sprache als BBC-Realserie eingeordnet wird?",
    "scene": "Produktionsdaten: BBC-Realserie und Alps no Shōjo Heidi. Formuliere eine Archivsuche, die gezielt die Emma-Blake-Fassung findet. Verwende drei unterscheidende Angaben statt nur «Heidi 1974».",
    "compare": [
      "Romanbeziehungen",
      "Sechsteilige Realserie",
      "Schauspiel gegenüber Animation",
      "Britischer Parallelfall zum Anime"
    ],
    "refs": [
      "archive_1974bbc"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://www.imdb.com/title/tt0228374/fullcredits/",
      "type": "Nachweis"
    }
  },
  {
    "id": "1978",
    "year": "1978",
    "title": "Heidi",
    "director": "Toni Flaadt / Joachim Hess",
    "kind": "Fernsehen",
    "country": "Deutschsprachige Realserie · 26 Folgen",
    "mode": "Serielles Erzählen mit realen Körpern",
    "tag": "Vergleichsfenster",
    "facts": "Die Serie mit Katia Polletin und René Deltgen startete im Schweizer Fernsehen am 13. September 1978. Laut SRF inszenierte Toni Flaadt die ersten elf Folgen; Joachim Hess die zehn Frankfurter Folgen und fünf Folgen der Rückkehr.",
    "analysis": "Ort, Position im Erzählbogen und Regiezuständigkeit verändern sich nicht unabhängig voneinander. Ein beobachteter Stilunterschied könnte mehrere Ursachen haben. Die Rückkehr unter derselben Regie wie Frankfurt wäre ein geeigneter zusätzlicher Vergleich; der Vorspann allein kann ihn nicht leisten.",
    "context": "Der Stoff wird zum wiederkehrenden Fernsehangebot. Die Staffelgliederung verteilt Erwartung und Erinnerung über Wochen. Gleichzeitig begegnen sich mehrere Heidi-Bilder in derselben Fernsehzeit: Realserie und deutschsprachige Ausstrahlung des Anime.",
    "question": "Wie verhindert diese Aufteilung die vorschnelle Behauptung, jeder Unterschied zwischen Alp und Frankfurt sei allein durch den Schauplatz verursacht?",
    "scene": "SRF-Produktionsbericht zur Serie mit Katia Polletin und René Deltgen. Lege die drei Blöcke auf eine Linie: 11 → 10 → 5. Trage Alp, Frankfurt und Rückkehr sowie die zuständige Regie ein.",
    "refs": [
      "srf78",
      "takahata"
    ],
    "compare": [
      "Heimweh in serieller Entfaltung",
      "26 Folgen statt Kinokompression",
      "Reale Körper, Schauplätze, Episodengrenzen",
      "Heidi als wiederkehrendes Fernsehangebot"
    ]
  },
  {
    "id": "1978new",
    "year": "1978",
    "title": "The New Adventures of Heidi",
    "director": "Ralph Senensky",
    "kind": "Fernsehen",
    "country": "USA · Katy Kurtzman / Burl Ives",
    "mode": "Modernisierung und Musical",
    "tag": "Erweitertes Archiv",
    "facts": "Diese amerikanische Fernsehfassung aktualisiert den Stoff und verlegt einen Teil der Handlung nach New York. Sie ist nicht die deutschsprachige Realserie desselben Jahres. Der Regisseur dokumentiert die Produktion in seinem eigenen Rückblick.",
    "analysis": "Die Ortsangabe belegt eine Verlegung, nicht die Gleichheit aller sozialen Beziehungen. Um eine vollständige Funktionsübernahme zu behaupten, müssten Haushalt, Heidis Abhängigkeit und Rückkehrmotiv verglichen werden. Elf Werbesekunden bilden diese Handlungskette nicht ab.",
    "context": "Der Produktionsbericht erlaubt es, zwischen späterer Erinnerung eines Beteiligten und am Film sichtbarer Gestaltung zu unterscheiden. Die Modernisierung zeigt eine andere Aktualisierungsstrategie als Imbodens Fassung von 2001.",
    "question": "Weshalb ist «New York übernimmt die Funktion Frankfurts vollständig» stärker als der belegte Befund, dass ein Teil der Handlung dort spielt?",
    "scene": "NBC-Promoclip von 0:11 und Produktionsbefund zu The New Adventures of Heidi. Schreibe einen Katalogsatz zur Ortsverlegung und einen getrennten Satz dazu, was du im elfsekündigen Werbeclip tatsächlich feststellen kannst.",
    "compare": [
      "Neue Stadt und vertraute Bindung",
      "Modernisierung",
      "Musical und Komödie",
      "US-Fernsehfilm der 1970er"
    ],
    "refs": [
      "archive_1978new"
    ],
    "access": {
      "label": "Produktionsbericht & Filmausschnitte",
      "url": "https://ralph-senensky.blogspot.com/2010/08/new-adventures-of-heidi-june-july-1978.html",
      "type": "Ausschnitte"
    }
  },
  {
    "id": "1982song",
    "year": "1982",
    "title": "Heidi’s Song",
    "director": "Robert Taylor",
    "kind": "Animation",
    "country": "USA · Hanna-Barbera",
    "mode": "Heidi als Zeichentrickmusical",
    "tag": "Erweitertes Archiv",
    "facts": "Der AFI-Katalog dokumentiert Hanna-Barberas Kinomusical, veröffentlicht 1982. Im fertigen Film erscheinen sechzehn Lieder; die lange Produktionsgeschichte reicht bis in die 1970er-Jahre zurück.",
    "analysis": "Ereignisfortschritt und Zugang zu einer Figur sind verschiedene Ebenen. Ein Lied kann eine bestehende Lage verlängern und gleichzeitig einen Wunsch, ein Gefühl oder eine Zugehörigkeit ausformen. Die Zahl sechzehn belegt den Umfang musikalischer Passagen, aber noch nicht die Funktion jedes einzelnen Lieds.",
    "context": "Hanna-Barbera bringt Erfahrungen der Fernsehproduktion in einen abendfüllenden Kinofilm ein. Die Produktionsdauer war länger als zunächst angekündigt; die Veröffentlichung von 1982 ist deshalb nicht mit dem Projektbeginn gleichzusetzen.",
    "question": "Warum kann ein Lied die Handlung zeitlich anhalten und dennoch die Beziehung zu einer Figur weiterentwickeln?",
    "scene": "AFI-Angabe zu Heidi’s Song und der eingebettete offizielle Filmausschnitt. Höre den Ausschnitt einmal mit Bild und einmal ohne Bild. Notiere eine Information oder Stimmung, die der Gesang trägt; halte daneben fest, ob diese beim stummen Sehen verständlich bleibt.",
    "compare": [
      "Emotionalisierung durch Musik",
      "Nummern und Handlung",
      "Zeichentrickmusical",
      "Hanna-Barbera zwischen TV und Kino"
    ],
    "refs": [
      "archive_1982song"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://catalog.afi.com/Catalog/moviedetails/56792",
      "type": "Nachweis"
    }
  },
  {
    "id": "1987climb",
    "year": "1987",
    "title": "Climb a Tall Mountain",
    "director": "Heinz Fussle",
    "kind": "Kurzfilm",
    "country": "USA · christlicher Kinderfilm",
    "mode": "Liebe und Vergebung als Lernziel",
    "tag": "Erweitertes Archiv",
    "facts": "Der Vertrieb Vision Video beschreibt den Film als christliche Erzählung mit Heidi, Peter, Hans und einem Holzschnitzer. Datierung und Laufzeit unterscheiden sich zwischen Angeboten; Apple nennt 1987 und 39 Minuten, der Vertrieb 45 Minuten.",
    "analysis": "Die Differenz allein verrät weder den Inhalt noch die Ursache. Unterschiedliche Schnitte, Messweisen oder Katalogfehler wären erst zu prüfen. Eine Aussage über entfernte religiöse Szenen bräuchte einen Vergleich der Kopien oder einen entsprechenden Schnittnachweis.",
    "context": "Die Auswertung im kirchlichen Bildungszusammenhang macht eine andere Zielgruppe sichtbar als Kinostart oder tägliches Kinderprogramm. Religiöse Adaption ist hier auch eine Frage des Vorführorts.",
    "question": "Warum wäre «sechs Minuten religiöse Szenen wurden entfernt» keine zulässige Folgerung aus diesen Zahlen?",
    "scene": "Apple-Laufzeitangabe und Vertriebsbeschreibung von Vision Video. Schreibe einen gemeinsamen Archivdatensatz, der beide Laufzeiten mit ihrer Herkunft erhält. Formuliere daneben, welche Prüfung zwischen Schnittfassung und fehlerhafter Angabe unterscheiden könnte.",
    "compare": [
      "Vergebung",
      "Didaktische Bewährung",
      "Christlicher Kinderfilm",
      "Gemeinde- und Bildungsmedien"
    ],
    "refs": [
      "archive_1987climb",
      "climbdate"
    ],
    "access": {
      "label": "Vertriebsvorschau zur Filmsammlung",
      "url": "https://vimeo.com/118949719",
      "type": "Vorschau"
    }
  },
  {
    "id": "1990courage",
    "year": "1990",
    "title": "Courage Mountain · Heidi’s New Adventure",
    "director": "Christopher Leitch",
    "kind": "Kino",
    "country": "USA / Frankreich · Juliet Caton",
    "mode": "Heidi im Kriegsabenteuer",
    "tag": "Erweitertes Archiv",
    "facts": "Der AFI-Katalog datiert die Veröffentlichung auf 1990, die Dreharbeiten auf 1988. Die Geschichte spielt 1915 und macht Heidi zur Jugendlichen. Internat, Krieg und Flucht erweitern den vertrauten Figurenkreis.",
    "analysis": "Krieg macht Ortswechsel zur Frage von Gefahr, Schutz und Überleben. Die jugendliche Figur kann Entscheidungen für Flucht und andere Menschen tragen. Das erweitert die kindliche Rückkehrgeschichte um einen Abenteuer- und Bewährungsbogen. 1915 bezeichnet dabei die erzählte Welt, nicht das Entstehungsjahr des Films.",
    "context": "Erzählte Zeit 1915, Produktionszeit 1988 und Kinostart 1990 sind getrennte Ebenen. Ein Kriegssetting belegt noch keine historische Genauigkeit; es verändert zunächst die Bedingungen, unter denen die Figur handeln muss.",
    "question": "Was verändert die Kriegssituation am Rückkehrmotiv, wenn Heidi als Jugendliche handeln muss und das Verlassen eines Ortes nicht nur Heimweh bedeutet?",
    "scene": "AFI-Handlungs- und Produktionsangaben zu Courage Mountain. Baue eine Zeile mit drei getrennten Feldern: hergestellt · veröffentlicht · spielt in. Ergänze darunter: Wer muss in einer Fluchtgeschichte handeln, damit die Gruppe weiterkommt?",
    "compare": [
      "Äussere Gefahr und Selbstständigkeit",
      "Flucht und Rettung",
      "Historisches Jugendabenteuer",
      "Erster Weltkrieg als erzählte Zeit"
    ],
    "refs": [
      "archive_1990courage"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://catalog.afi.com/Film/58458-COURAGE-MOUNTAIN",
      "type": "Nachweis"
    }
  },
  {
    "id": "1992art",
    "year": "1992",
    "title": "Heidi · Videokunst",
    "director": "Mike Kelley / Paul McCarthy",
    "kind": "Kunstfilm",
    "country": "USA · experimentelle Arbeit",
    "mode": "Angriff auf die Familienidylle",
    "tag": "Erweitertes Archiv",
    "facts": "Das Whitney Museum führt die gemeinsame Arbeit von Kelley und McCarthy unter 1992. Die Sammlung Goetz beschreibt sie als subversive Neuinterpretation des Heidi-Stoffs. Es handelt sich um Videokunst, nicht um einen Kinderfilm.",
    "analysis": "Eine bekannte Idylle liefert einen Erwartungsrahmen, dessen Verletzung bemerkbar wird. Der Ausstellungskontext kann diesen Bruch als Untersuchung kultureller Bilder ankündigen. «Subversiv» ist zunächst die kuratorische Deutung; sie muss bei einer Werkbetrachtung konkret begründet werden.",
    "context": "In der Videokunst wird ein populäres Bildreservoir zur Kritik seiner kulturellen Voraussetzungen eingesetzt. Für den Unterricht genügt die Werkbeschreibung; eine Sichtung erfordert eine passende Lerngruppe und Vorbereitung.",
    "question": "Warum kann die Vertrautheit von Familie und Alpenidylle Voraussetzung der Störung sein, statt deren Gegenteil?",
    "scene": "Werkzuordnung des Whitney Museum und Beschreibung der Sammlung Goetz. Formuliere zwei Erwartungssätze an denselben Titel: für ein Familienprogramm und für eine Ausstellung mit Kelley/McCarthy. Kennzeichne, welche Erwartung der Begriff «subversiv» irritiert.",
    "compare": [
      "Demontage der Idylle",
      "Experimentelle Wiederholung",
      "Performance und Videokunst",
      "Kritik populärer Familienbilder"
    ],
    "refs": [
      "archive_1992art",
      "goetz"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://whitney.org/collection/works/34266",
      "type": "Nachweis"
    }
  },
  {
    "id": "1993",
    "year": "1993",
    "title": "Heidi",
    "director": "Michael Ray Rhodes",
    "kind": "Fernsehen",
    "country": "USA · Noley Thornton, Jason Robards",
    "mode": "Familiengeschichte im Mehrteiler",
    "tag": "Vergleichsfenster",
    "facts": "Disney D23 dokumentiert die Ausstrahlung als Disney Channel Premiere Film ab 18. Juli 1993. Noley Thornton spielt Heidi, Jason Robards den Grossvater und Jane Seymour Rottenmeier. Die Produktion entfaltet die Geschichte als zweiteilige Miniserie.",
    "analysis": "Vor Frankfurt ist die neue Lebenswelt unbekannt; vor der Rückkehr steht die Wiederbegegnung mit dem verlorenen Zuhause bevor. Dieselben Figuren tragen so verschiedene offene Fragen. Beide Unterbrechungen sind hier Entwürfe, keine Behauptungen über die tatsächliche Schnittgrenze der Miniserie.",
    "context": "Der Klassiker wird Teil eines markierten Familienprogramms im amerikanischen Kabelfernsehen. Ein literarisch vertrauter Titel und bekannte Darstellende können Orientierung geben; konkrete Publikumswirkungen sind damit noch nicht nachgewiesen.",
    "question": "Weshalb erzeugen diese beiden vorgeschlagenen Teilgrenzen unterschiedliche Erwartungen, obwohl keine zusätzliche Figur erfunden wird?",
    "scene": "Disney-D23-Angabe zur zweiteiligen Miniserie ab 18. Juli 1993. Entwirf zwei verschiedene mögliche Unterbrechungen: vor Heidis Ankunft in Frankfurt oder vor ihrer Rückkehr. Formuliere für jede genau die Frage, mit der ein Publikum warten würde.",
    "refs": [
      "disney"
    ],
    "compare": [
      "Familienbeziehungen und erwachsene Perspektiven",
      "Mehrteiliger emotionaler Entwicklungsbogen",
      "Ensemble, Vorgeschichte, Perspektivwechsel prüfen",
      "Klassiker im amerikanischen Kabelfernsehen"
    ]
  },
  {
    "id": "1995jetlag",
    "year": "1995",
    "title": "Heidi · Jetlag-Animation",
    "director": "Toshiyuki Hiruma / Takashi Masunaga",
    "kind": "Animation",
    "country": "USA / Japan · Jetlag Productions",
    "mode": "Verdichtung für das Heimvideo",
    "tag": "Erweitertes Archiv",
    "facts": "Die Jetlag-Fassung ist eine eigenständige Animation von 1995. Sie ist weder eine Folge des Takahata-Anime noch die spätere Animation von Alan Simpson.",
    "analysis": "Der Titel setzt ein Thema. Erst seine Verbindung mit den Bildern kann den Begriff an bestimmte Personen, Tätigkeiten oder Räume binden. Eine Bildbeobachtung und ihr Zeitcode sind deshalb mehr als die Übersetzung «Das ist Zuhause». Die Szene belegt die Jetlag-Fassung, nicht Takahatas Anime.",
    "context": "Die Fassung steht im Umfeld animierter Literaturbearbeitungen für den Heimvideomarkt der 1990er-Jahre. Das Vertriebsformat ist ein Anhaltspunkt für die Erzählökonomie, aber kein Qualitätsurteil.",
    "question": "Wie konkretisiert die Verbindung von Lied und Bild, was «Zuhause» für diese Szene meint? Was ginge verloren, wenn nur der Liedtitel angezeigt würde?",
    "scene": "Jetlag-Animationsfilm · eingebettete Musikszene This Is Home, 2:41. Höre auf die Verbindung des gesungenen «home» mit dem gleichzeitig sichtbaren Bild. Halte einen solchen Moment samt Zeitposition an und benenne die Person oder den Ort im Bild.",
    "compare": [
      "Heimweh und Fürsorge",
      "Kompakte Romanbearbeitung",
      "Eigenständige Animation",
      "Heimvideomarkt der 1990er"
    ],
    "refs": [
      "archive_1995jetlag"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://www.imdb.com/title/tt0213709/",
      "type": "Nachweis"
    }
  },
  {
    "id": "1998short",
    "year": "1998 / 1999",
    "title": "Heidi · Gsponers Kurzfilm",
    "director": "Alain Gsponer",
    "kind": "Kurzfilm",
    "country": "Schweiz / Deutschland · Animation",
    "mode": "Das Schweizbild als Pointe",
    "tag": "Erweitertes Archiv",
    "facts": "Gsponers früher Animationskurzfilm heisst ebenfalls Heidi. SRG und Regiefilmografien nennen 1998; Swiss Films führt den Titel unter 1999. Die Abweichung wird hier offengelegt.",
    "analysis": "Gleicher Titel und gleiche Regie beweisen keine identische Handlung oder Haltung. Kurzanimation und langer Realfilm sind verschiedene Werke; die widersprüchlichen Jahresangaben betreffen zusätzlich die Katalogisierung des ersten. Für eine Aussage über Wiederholung oder Veränderung wäre der Werkvergleich nötig.",
    "context": "Der gleiche Regisseur realisierte später den langen Realfilm von 2015. Ein Autorvergleich darf deshalb nicht aus dem Namen auf eine gleichbleibende Haltung schliessen.",
    "question": "Warum ist «Gsponer hat seine Heidi nur neu gedreht» durch diese Angaben nicht belegt?",
    "scene": "SRG nennt 1998; Swiss Films führt den Animationskurzfilm unter 1999. Gsponers Realfilm stammt von 2015. Erstelle zwei getrennte Katalogzeilen. Bewahre beim Kurzfilm beide Jahresangaben mit Quelle; nenne beim zweiten Eintrag 2015 und Realfilm.",
    "compare": [
      "Bild der Schweiz",
      "Pointe statt Romanbogen",
      "Animationskurzfilm",
      "Nationale Selbstbilder und Werbung"
    ],
    "refs": [
      "archive_1998short",
      "gsponersrg"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://swissfilms.ch/en/person/alain-gsponer/d4c40e6f25334f708ee61b4964f0dc37",
      "type": "Nachweis"
    }
  },
  {
    "id": "2001",
    "year": "2001",
    "title": "Heidi",
    "director": "Markus Imboden",
    "kind": "Kino",
    "country": "Schweiz · Cornelia Gröschel",
    "mode": "Aktualisierung & Selbstbehauptung",
    "tag": "Vertiefung",
    "facts": "Imboden verlegt den Stoff in die Gegenwart. Berlin tritt an die Stelle des historischen Frankfurt; Peter bewegt sich in einer Welt von Bike und Internet. Cornelia Gröschel spielt Heidi, Paolo Villaggio den Alpöhi. Die Einträge von Porta Cultura und SWI dokumentieren diese Modernisierung.",
    "analysis": "Eine Nachricht kann Information und Austausch über die Entfernung ermöglichen. Sie hebt weder die räumliche Trennung noch fremde Regeln im Haushalt automatisch auf. Modernisierung verändert damit konkrete Handlungsmöglichkeiten, statt nur alte Kleidung gegen neue Geräte auszutauschen. Die Nachricht ist ein eigener Entwurf.",
    "context": "Die Fassung erschien im Jahr von Spyris 100. Todestag. Der Klassiker wird an eine bereits vernetzte Gegenwart angeschlossen. Damit wird die Gleichsetzung von Heimat und vormoderner Abgeschiedenheit ausdrücklich überprüfbar.",
    "question": "Warum kann unmittelbarer Kontakt Heidis Trennung verändern, ohne ihre Rückkehr oder ihre Zugehörigkeit überflüssig zu machen?",
    "scene": "Porta-Cultura- und SWI-Befunde zur Gegenwartsfassung von Markus Imboden. Entwirf eine Nachricht, die Peter Heidi in Berlin schicken könnte. Schreibe danach genau einen Satz, welches Hindernis die Nachricht überwindet und welches sie nicht beseitigt.",
    "refs": [
      "porta",
      "swissinfo"
    ],
    "compare": [
      "Zugehörigkeit in der Gegenwart",
      "Aktualisierung des vertrauten Handlungsgerüsts",
      "Moderne Stadt, Mobilität, Kommunikation",
      "Digitalisierung um 2000; Spyri-Gedenkjahr"
    ]
  },
  {
    "id": "2005",
    "year": "2005",
    "title": "Heidi",
    "director": "Paul Marcus",
    "kind": "Kino",
    "country": "Grossbritannien · Emma Bolger, Max von Sydow",
    "mode": "Historischer Familienfilm",
    "tag": "Vergleichsfenster",
    "facts": "Emma Bolger spielt Heidi, Max von Sydow den Grossvater, Geraldine Chaplin Rottenmeier und Diana Rigg die Grossmutter Sesemann. Gemeint ist der Realfilm von Paul Marcus, nicht eine gleichnamige Animationsproduktion desselben Jahres.",
    "analysis": "Jahr und Titel identifizieren die Werke hier nicht eindeutig. Paul Marcus und die genannten Darstellenden gehören zum Realfilm; die Firmenangaben identifizieren die andere Produktion. Erst nach dieser Trennung ist klar, ob körperliches Schauspiel oder Animation untersucht wird.",
    "context": "Die internationale Besetzung macht den Schweizer Stoff innerhalb eines englischsprachigen Familienfilms zugänglich. Historische Ausstattung ist jedoch kein Beleg für historische Genauigkeit oder grössere Werktreue.",
    "question": "Weshalb führt ein Vergleich unter der blossen Überschrift «Heidi 2005» zu einer unklaren Aussage über Schauspiel und gezeichnete Bewegung?",
    "scene": "Besetzung des Realfilms von Paul Marcus und Produktionsangaben zum Animationsfilm von 2005. Repariere den Mischdatensatz: «Heidi, 2005; Zeichentrickfilm von Paul Marcus mit Emma Bolger.» Schreibe daraus zwei sauber getrennte Suchanfragen.",
    "refs": [
      "marcus"
    ],
    "compare": [
      "Trennung und Zugehörigkeit im historischen Rahmen",
      "Verdichtete Familienfilmerzählung",
      "Kostüm, Landschaft und Schauspiel untersuchen",
      "Englischsprachige Neuvermittlung eines Klassikers"
    ]
  },
  {
    "id": "2005animation",
    "year": "2005",
    "title": "Heidi · Zeichentrickfilm",
    "director": "Alan Simpson",
    "kind": "Animation",
    "country": "Deutschland / Kanada / Grossbritannien",
    "mode": "Ein Stoff, zwei Kinofilme im selben Jahr",
    "tag": "Erweitertes Archiv",
    "facts": "Filmportal weist eine eigenständige Zeichentrickproduktion von TV-Loonland, Nelvana und Telemagination aus, mit deutschem Kinostart am 22. Dezember 2005. Paul Marcus’ Realfilm desselben Jahres ist eine andere Produktion.",
    "analysis": "Ein gemeinsamer Stoff und die Technik gezeichneter Figuren belegen keine gemeinsame Produktion. Jahr, Format und Firmen weisen die 2005er Kinoproduktion aus. Eine solche Unterscheidung muss der Stilanalyse vorausgehen, sonst werden Befunde dem falschen Werk zugeschrieben.",
    "context": "Die internationale Koproduktion zeigt, dass Heidi nicht ausschliesslich als Schweizer Kulturgut vermarktet wird. Herstellungsland, Handlungsschauplatz und Sprachfassung fallen auseinander.",
    "question": "Warum reicht die Ähnlichkeit «Heidi als gezeichnetes Mädchen» nicht aus, um den Trailer als Ausschnitt aus Takahatas Serie zu beschriften?",
    "scene": "DFF-Nachweis zur Produktion mit deutschem Kinostart am 22. Dezember 2005. Ergänze zum eingebetteten deutschen Trailer einen eindeutigen Herkunftssatz mit Jahr, Format und Produktionsfirmen.",
    "compare": [
      "Vertrauen und Ortswechsel",
      "Verdichtete Romanadaption",
      "Zeichentrick statt Realfilm",
      "Internationale Koproduktion"
    ],
    "refs": [
      "archive_2005animation"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://www.filmportal.de/film/heidi_24a1ad0d0348473b971042ec1b19b8dc",
      "type": "Nachweis"
    }
  },
  {
    "id": "2007teen",
    "year": "2007 / 2008",
    "title": "Heidi · Heidi & Co.",
    "director": "Pierre-Antoine Hiroz / Anne Deluz",
    "kind": "Fernsehen",
    "country": "Schweizerisch-internationale Koproduktion · Élodie Bollée",
    "mode": "Heidi wird zur Jugendlichen",
    "tag": "Erweitertes Archiv",
    "facts": "Die moderne Jugendserie versetzt Heidi in eine zeitgenössische Lebenswelt mit Schule und neuen Freundschaften. Die Ausstrahlung begann in der Schweiz 2007; andere Märkte führten sie 2008.",
    "analysis": "Unterschiedliche Startjahre können zur Verbreitung desselben Werks gehören. Schule führt zugleich wiederkehrende Regeln, Gruppen und Begegnungen ein, an denen sich neue Folgen entzünden können. Der selbst erfundene Schulkonflikt ist eine Anwendung dieser Möglichkeit, kein behaupteter Episodeninhalt.",
    "context": "Der Klassiker wird an Formate jugendlicher Serienunterhaltung angeschlossen. Modernisierung betrifft nicht nur Kleidung und Technik, sondern auch Alter, Handlungsmacht und soziale Institutionen.",
    "question": "Warum belegt das zweite Jahr keine zweite Produktion – und welche wiederkehrende Institution kann hier Konflikte liefern, die ein einmaliger Ortswechsel allein nicht erzeugt?",
    "scene": "Angaben zur Jugendserie Heidi & Co.; offizieller Teaser von 0:30. Beschrifte zwei Programmankündigungen: Schweizer Start und späterer Start in einem anderen Markt. Ergänze ein mögliches Schulproblem als ausdrücklich eigenen Entwurf.",
    "compare": [
      "Zugehörigkeit und neue Freundschaften",
      "Jugendserie",
      "Gegenwartswelt und Schule",
      "Internationale Fernsehauswertung"
    ],
    "refs": [
      "archive_2007teen"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://www.allocine.fr/series/ficheserie-3766/saison-6780/",
      "type": "Nachweis"
    }
  },
  {
    "id": "2008paws",
    "year": "2008",
    "title": "Heidi 4 Paws: A Furry Tale",
    "director": "Holly Goldberg Sloan",
    "kind": "Neudeutung",
    "country": "USA · Hunde in den Figurenrollen",
    "mode": "Anthropomorphe Übersetzung",
    "tag": "Erweitertes Archiv",
    "facts": "Die Adaption besetzt die Heidi-Rollen mit Hunden und gibt ihnen menschliche Stimmen. WTTW dokumentiert Heidi 4 Paws in seinem Jahresbericht 2008 als nationale Produktion.",
    "analysis": "Synchronisierte Rede kann eine Bewegung als Zustimmung, Wunsch oder Widerspruch rahmen. Der stumme Durchgang zeigt, wie viel davon im Tierkörper selbst erkennbar ist. Man muss dem Tier deshalb nicht dieselbe bewusste Darstellung zuschreiben wie der gesprochenen Figur.",
    "context": "Die Produktion gehört zur Familienunterhaltung im Umfeld des US-Public-Television-Systems. Sie zeigt, wie weit die Figurenstruktur transportierbar ist, auch wenn sich die sichtbaren Darstellenden grundlegend verändern.",
    "question": "Welche Absicht schreibst du dem Hund erst durch die menschliche Stimme zu – und was lässt sich allein an seiner Bewegung erkennen?",
    "scene": "Trailer zu Heidi 4 Paws: A Furry Tale. Wähle im Trailer einen Moment mit einem Hund und Figurenrede. Spiele ihn stumm ab und dann erneut mit Ton. Notiere getrennt die sichtbare Bewegung und die Aussage der Stimme.",
    "compare": [
      "Zugehörigkeit in Tierrollen",
      "Bekannter Stoff mit neuer Besetzung",
      "Tieraufnahme und Synchronstimme",
      "US-Familienfernsehen"
    ],
    "refs": [
      "archive_2008paws"
    ],
    "access": {
      "label": "Filmseite · deutscher Teaser",
      "url": "https://www.filmstarts.de/kritiken/217263.html",
      "type": "Teaser"
    }
  },
  {
    "id": "2015",
    "year": "2015",
    "title": "Heidi",
    "director": "Alain Gsponer",
    "kind": "Kino",
    "country": "Schweiz / Deutschland · Anuk Steffen, Bruno Ganz",
    "mode": "Zugehörigkeit & eigene Zukunft",
    "tag": "Vertiefung",
    "facts": "Der Realfilm entstand nach einem Drehbuch von Petra Volpe. Anuk Steffen spielt Heidi, Bruno Ganz den Alpöhi. Das begleitende Unterrichtsmaterial macht Heidis Wunsch, Geschichten zu schreiben, zu einem wichtigen Ausgangspunkt der Arbeit.",
    "analysis": "Rückkehr stellt Zugehörigkeit wieder her. Selbst schreiben zu wollen eröffnet zusätzlich ein eigenes zukünftiges Handeln: Heidi kann Geschichten gestalten, statt nur Gegenstand einer erzählten Geschichte zu sein. Dieser Befund stammt aus dem Begleitmaterial; das einzelne Buchbild macht ihn nicht schon sichtbar.",
    "context": "Der historische Schauplatz wird mit einer zeitgenössischen Frage nach weiblicher Selbstbestimmung verbunden. Die Modernisierung betrifft Werte und Zielvorstellungen, ohne die Handlung wie 2001 in die Gegenwart zu verlegen.",
    "question": "Wie verändert der Wunsch zu schreiben Heidis Zukunftsperspektive gegenüber einer Geschichte, deren Ziel allein die Rückkehr nach Hause wäre?",
    "scene": "Unterrichtsmaterial zum Gsponer-Realfilm; ergänzend die lokale Buchaufnahme ab 45:00. Formuliere zwei unterschiedliche Ziele: eine vorhandene Geschichte lesen können; eine eigene Geschichte verfassen wollen. Ordne die Buchaufnahme nur dem zu, was sie tatsächlich zeigt.",
    "refs": [
      "gsponer",
      "lesen",
      "klimek"
    ],
    "compare": [
      "Zugehörigkeit und die Anerkennung eigener Wünsche",
      "Rückkehr verbunden mit einer Zukunftsperspektive",
      "Historische Welt mit Bildungs- und Schreibmotiv",
      "Zeitgenössische Selbstbestimmung im Periodenfilm"
    ],
    "access": {
      "label": "Produktion · Trailer & Bilder",
      "url": "https://claussen-putz.de/filme/heidi/?lang=en",
      "type": "Trailer / Filmseite"
    }
  },
  {
    "id": "2015cgi",
    "year": "2015 / 2019",
    "title": "Heidi · Die CGI-Serie",
    "director": "Studio 100 · Regie der ersten Serie: Jérôme Mouscadet",
    "kind": "Animation",
    "country": "Internationale Produktion · 3D-Animation",
    "mode": "Fortsetzbare Abenteuerwelt",
    "tag": "Vergleichsfenster",
    "facts": "Studio 100 führt 39 Folgen der ersten und 26 Folgen der zweiten Staffel auf, jeweils etwa 22 Minuten. Der Katalog nennt die Produktionsjahre 2014–2015 und 2019 und eine Zielgruppe von fünf bis acht Jahren. Dies ist ein eigenständiger Titel neben Gsponers Realfilm.",
    "analysis": "65 Folgen ergeben etwa 1430 Minuten. Wiederkehrende Orte und Beziehungen erlauben einzelne, begrenzte Probleme und neue Einstiege. Der Umfang macht solche Strukturen plausibel, beweist aber nicht jede Episodenhandlung. Das Ziegenproblem ist ein eigener Entwurf, kein Trailerbefund.",
    "context": "Die Serie steht in einer internationalen Kinderfernseh- und Lizenzökonomie. Der Katalog beschreibt ein Produkt und seine Zielgruppe; seine Aussagen sind keine unabhängige Qualitätsbewertung und keine Publikumsstudie.",
    "question": "Warum braucht ein solcher Serienumfang wiederholbar nutzbare Beziehungen und Orte statt nur eine immer weiter hinausgezögerte Rückkehr?",
    "scene": "Studio-100-Katalog: erste Staffel 39, zweite Staffel 26 Folgen; jeweils etwa 22 Minuten. Berechne die Gesamtdauer beider Staffeln. Entwirf anschliessend ein kleines Problem mit den Ziegen, das innerhalb einer Folge gelöst werden könnte, ohne Heidis ganzen Lebensweg abzuschliessen.",
    "refs": [
      "cgi"
    ],
    "compare": [
      "Episodische Probleme und Freundschaft",
      "Fortsetzbare Abenteuer neben der Romanhandlung",
      "CGI, Wiedererkennbarkeit, Episodenstruktur",
      "Internationales Kinderfernsehen und Medienverbund"
    ]
  },
  {
    "id": "2017bienvenida",
    "year": "2017",
    "title": "Heidi, bienvenida a casa",
    "director": "Marcela Citterio · Serienkonzept",
    "kind": "Fernsehen",
    "country": "Argentinien / Mondo TV · Chiara Francia",
    "mode": "Telenovela, Musik und Gegenwart",
    "tag": "Erweitertes Archiv",
    "facts": "Die für Nickelodeon entwickelte Serie überträgt Heidi in die moderne lateinamerikanische Jugendunterhaltung. Mondo TV beschreibt die Zusammenarbeit mit Alianzas Producciones und die Verbindung von bekanntem Stoff und neuen Figuren.",
    "analysis": "Eine Gruppe Gleichaltriger eröffnet Anerkennung, Freundschaft und mögliche Konkurrenz innerhalb derselben Generation. Die Beziehung zum Grossvater wird dadurch nicht automatisch bedeutungslos, aber sie ist nicht mehr der einzige Zugang zur neuen Welt. Der Begrüssungsentwurf erprobt diese Verschiebung, ohne eine Originalszene zu behaupten.",
    "context": "Die Adaption zeigt einen internationalen Medienverbund aus Serienfigur, Musik und jugendlichem Publikum. Eine kulturelle Übertragung verändert sowohl die erzählte Welt als auch die Art, wie das Publikum die Figur begleitet.",
    "question": "Was verändert sich an Heidis Ankommen, wenn Zugehörigkeit zuerst in einer Gruppe Gleichaltriger ausgehandelt wird statt ausschliesslich zwischen Kind und Grossvater?",
    "scene": "Mondo-TV-Produktionsbeschreibung zu Heidi, bienvenida a casa. Übersetze den Titel. Entwirf eine kurze Begrüssung durch eine neue gleichaltrige Figur und kennzeichne den Text als eigene Szene.",
    "compare": [
      "Neue soziale Welt",
      "Fortgesetzte Telenovela-Handlung",
      "Musik und Komik",
      "Lateinamerikanische Jugendunterhaltung"
    ],
    "refs": [
      "archive_2017bienvenida"
    ],
    "access": {
      "label": "Katalog / Nachweis öffnen",
      "url": "https://www.bmegrowth.es/docs/documentos/Otros/2016/12/MONDO_Folleto_20161216.pdf",
      "type": "Nachweis"
    }
  },
  {
    "id": "2022",
    "year": "2022",
    "title": "Mad Heidi",
    "director": "Johannes Hartmann / Sandro Klopfstein",
    "kind": "Neudeutung",
    "country": "Schweiz · Alice Lucy · für Erwachsene",
    "mode": "Rachehandlung & Swissploitation",
    "tag": "Vertiefung · Gewalt",
    "facts": "In einer dystopischen Schweiz herrscht ein Käsemagnat. Die erwachsene Heidi wird zur Kämpferin gegen das Regime. Die Produktion bezeichnet ihren Film als Swissploitation und verbindet Heimatfilmparodie mit Action- und Splatterformen.",
    "analysis": "Das wiedererkennbare Produkt bleibt erhalten, erhält aber eine bedrohliche gesellschaftliche Funktion. Die Verschiebung kann ein sauberes, harmloses Landesbild angreifen und profitiert gleichzeitig von dessen Wiedererkennbarkeit. Der Begriff Swissploitation benennt auch eine verkäufliche Genreposition, nicht nur politische Kritik.",
    "context": "Die Produktion verweist selbst auf Heimatfilm und Exploitationkino. Daraus ergibt sich ein doppelter historischer Bezug, nicht einfach eine Rückkehr zu Spyri. Die politische Bedeutung einer Übertreibung muss am konkreten Ziel des Spotts begründet werden.",
    "question": "Worin liegt die satirische Verschiebung, wenn ein harmlos vermarktetes Nationalsymbol zur Grundlage von Zwang wird?",
    "scene": "Produktionssynopse von Mad Heidi: dystopische Schweiz unter einem Käsemagnaten. Formuliere zwei Funktionen von Käse: touristisches Souvenir und Mittel eines Regimes. Gib jeder Funktion eine andere Beziehung zwischen Anbieter und Bevölkerung.",
    "refs": [
      "mad",
      "madprod"
    ],
    "compare": [
      "Gewaltsame Herrschaft statt privater Entfremdung",
      "Rache, Gegenwehr und Befreiung",
      "Genrebruch, Übertreibung, nationale Symbole",
      "Heimatfilm trifft Exploitation und Markenparodie"
    ]
  },
  {
    "id": "2023karpi",
    "year": "2023",
    "title": "Cursed Heidi · KI-Trailerexperiment",
    "director": "Karpi (Patrick Karpiczenko)",
    "kind": "Neudeutung",
    "country": "Schweiz · digitale Veröffentlichung",
    "mode": "Verfremdung durch generierte Bilder",
    "tag": "KI-Trailer · kein belegter Langfilm",
    "facts": "Karpi veröffentlichte «CURSED HEIDI | AI-generated movie trailer» am 10. Juli 2023 auf seinem YouTube-Kanal. Das Video dauert 74 Sekunden. Die Beschreibung nennt KI-Bilderzeugung und die Schlagwörter Gen-2 und RunwayML. Belegt ist dieses Trailerexperiment; ein zugehöriger vollständiger Spielfilm ist damit nicht nachgewiesen.",
    "analysis": "Verformungen innerhalb eines Bildverlaufs und die Verbindung verschiedener Bilder liegen auf verschiedenen Gestaltungsebenen. Ein sichtbarer Bruch allein beweist jedoch nicht, ob er absichtlich belassen wurde. Das Video verwendet die Werbeform Trailer als eigenes Experiment; ein Film jenseits dieser 74 Sekunden folgt daraus nicht.",
    "context": "Das Video gehört zur frühen öffentlichen Erprobung generativer Videowerkzeuge im Jahr 2023. Heidi stellt dafür ein bereits bekanntes Figuren- und Landschaftsrepertoire bereit. Ob die Verfremdung als Kritik an der Alpenidylle, als technisches Experiment oder als Netzkomik wirkt, muss an konkreten Stellen begründet werden.",
    "question": "Warum lässt sich ein unstimmiger Bildkörper nicht auf dieselbe Weise erklären wie ein irritierender Schnitt – und warum belegt das Wort «Trailer» noch keinen fertigen Film?",
    "scene": "Karpis Originalupload · 74 Sekunden, veröffentlicht am 10. Juli 2023. Untersuche im Video eine sichtbare Veränderung innerhalb einer Einstellung und einen Übergang zwischen zwei Einstellungen. Notiere die beiden Zeitpositionen getrennt.",
    "refs": [
      "karpi"
    ],
    "compare": [
      "Vertraute Ikone und irritierende Verfremdung",
      "Verdichtetes Filmversprechen statt belegtem Langfilm-Erzählbogen",
      "Generierte Bilder und Trailermontage",
      "Generative Videowerkzeuge und Netzkultur 2023"
    ],
    "access": {
      "label": "Originalveröffentlichung von Karpi",
      "url": "https://www.youtube.com/watch?v=0A2-Af5JEWU",
      "type": "KI-Trailerexperiment"
    }
  },
  {
    "id": "2024moody",
    "year": "2024",
    "title": "Heidi · Precious Light Pictures",
    "director": "Lynn Moody",
    "kind": "Kino",
    "country": "USA · Emily Dunphey / Tim Kaiser",
    "mode": "Explizit christliche Rückbindung",
    "tag": "Erweitertes Archiv",
    "facts": "Die Produktionsfirma führt den Film als Veröffentlichung von 2024 und betont die christliche Dimension der Vorlage. Regie und Drehbuch stammen von Lynn Moody.",
    "analysis": "Die religiöse Dimension gehört zur Vorlage und kann bewusst gewichtet werden. Werktreue kann zusätzlich Handlung, Figuren, Sprache oder Erzählweise meinen. Eine Produktionsfirma setzt mit ihrer Auswahl einen eigenen Massstab; eine andere Adaption kann andere Funktionen erhalten. Ein kurzer Filmanfang entscheidet diese Gesamtfrage nicht.",
    "context": "In der US-amerikanischen christlichen Filmkultur kann die Wiederentdeckung religiöser Stoffanteile ein eigenes Profil gegenüber säkularisierten Adaptionen bilden. Das ist eine Position im Feld der Bearbeitungen, kein neutraler Massstab für alle Fassungen.",
    "question": "Warum ist die Hervorhebung des Glaubens eine begründbare Auswahl aus Spyri, aber noch kein neutraler Gesamtnachweis grösserer Werktreue?",
    "scene": "Selbstdarstellung von Precious Light Pictures zur Heidi-Fassung von Lynn Moody. Schreibe für beide Bearbeitungen einen Satz darüber, welcher Bestandteil der Vorlage als wesentlich behandelt wird. Markiere bei Moody den Absender der Aussage.",
    "compare": [
      "Trennung und Vertrauen",
      "Christlich gerahmte Rückkehr",
      "Explizite Glaubensperspektive",
      "US-amerikanischer Faith-Film"
    ],
    "refs": [
      "archive_2024moody"
    ],
    "access": {
      "label": "Film auf YouTube · Link der Produktionsfirma",
      "url": "https://youtu.be/_9zLD2CUlVM",
      "type": "Externer Filmzugang"
    }
  },
  {
    "id": "2025",
    "year": "2025",
    "title": "Heidi – Die Legende vom Luchs",
    "director": "Tobias Schwarz",
    "kind": "Animation",
    "country": "Deutschland / Spanien / Belgien · CGI-Kinofilm",
    "mode": "Rettungsmission & Ökologie",
    "tag": "Vergleichsfenster",
    "facts": "Studio 100 beschreibt eine neue Geschichte: Heidi und Peter helfen einem verletzten Luchsjungen und geraten mit einem Geschäftsmann aneinander, der ein Sägewerk errichten will. Der Film ist eine Erweiterung der Figurenwelt, keine erneute Nacherzählung beider Romane.",
    "analysis": "Das Tier bringt den Konflikt in eine konkrete Beziehung. Die wirtschaftliche Planung erweitert ihn um eine dauerhafte Veränderung der Umwelt. Individuelle Pflege löst ein strukturelles Hindernis nicht notwendig. Dadurch erhalten Heidi und Peter ein gemeinsames Handlungsziel, das über eine Heimkehr hinausgeht.",
    "context": "Die ökologische Botschaft steht bereits in der Selbstdarstellung des Produzenten. Damit ist eine Vermarktungs- und Erzählabsicht belegt. Wie differenziert der Film wirtschaftliche Interessen und Naturschutz darstellt, muss eine Filmsichtung zeigen.",
    "question": "Warum reicht die Versorgung des einzelnen Luchsjungen dramaturgisch nicht aus, wenn das Sägewerk seinen Lebensraum bedroht?",
    "scene": "Offizielle Studio-100-Synopse zu Die Legende vom Luchs. Zeichne eine Kette mit vier Gliedern: verletztes Tier → Ziel von Heidi und Peter → wirtschaftliches Vorhaben → möglicher Zusammenstoss. Trenne Hilfe für ein Tier vom Schutz seines Lebensraums.",
    "refs": [
      "lynx",
      "stetter"
    ],
    "compare": [
      "Bedrohtes Tier und gefährdeter Lebensraum",
      "Zielgerichtete Rettungsmission",
      "CGI-Abenteuer mit äusserem Gegenspieler",
      "Ökologische Neuausrichtung der bekannten Figurenwelt"
    ]
  }
];
