// Filmkarten: gesichtete Standbilder und klar bezeichnete Player-Vorschaubilder.
const filmThumbnails = {
  "1920": {
    "path": "assets/filmframes/1920.webp",
    "caption": "Heidi of the Alps (1920) · Filmstandbild bei 1:25",
    "source": "media/heidi-of-the-alps-1920-fragment.mp4",
    "kind": "Filmstandbild",
    "time": 85,
    "credit": "Vom Nutzer bereitgestelltes Fragment",
    "checked": "2026-09-20"
  },
  "1937": {
    "path": "assets/filmframes/1937.webp",
    "caption": "Heidi (1937) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=hwr25WXUHxA",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Public Domain Stuff",
    "checked": "2026-09-20"
  },
  "1952": {
    "path": "assets/filmframes/1952.webp",
    "caption": "Heidi (1952) · Player-Vorschaubild",
    "source": "https://vimeo.com/645984065",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "filmo",
    "checked": "2026-09-20"
  },
  "1955": {
    "path": "assets/filmframes/1955.webp",
    "caption": "Heidi und Peter (1955) · Player-Vorschaubild",
    "source": "https://vimeo.com/645984230",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "filmo",
    "checked": "2026-09-20"
  },
  "1955musical": {
    "path": "assets/filmframes/1955musical.webp",
    "caption": "Max Liebman Presents: Heidi (1955) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=Sf1IeVHBUQU",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Video Artists International (vaimusic)",
    "checked": "2026-09-20"
  },
  "1958gift": {
    "path": "assets/filmframes/1958gift.webp",
    "caption": "A Gift for Heidi (1958) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=aHZiubyGbd0",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Raro VHS",
    "checked": "2026-09-20"
  },
  "1958india": {
    "path": "assets/filmframes/1958india.webp",
    "caption": "Do Phool (1958) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=V5CUt-zJurM",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Navsaar Movies / Nupur Audio",
    "checked": "2026-09-20"
  },
  "1965": {
    "path": "assets/filmframes/1965.webp",
    "caption": "Heidi (1965) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=UYrQh9OvBtY",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "All Time Classic Movies",
    "checked": "2026-09-20"
  },
  "1968": {
    "path": "assets/filmframes/1968.webp",
    "caption": "Heidi (1968) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=gUa6eoObF-Q",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Vision Video",
    "checked": "2026-09-20"
  },
  "1974": {
    "path": "assets/filmframes/1974.webp",
    "caption": "Alps no Shōjo Heidi (1974) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=9SooJz8YsAU",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Studio 100 – Heroes of Childhood",
    "checked": "2026-09-20"
  },
  "1974bbc": {
    "path": "assets/filmframes/1974bbc.webp",
    "caption": "Heidi · BBC-Realserie (1974) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=Znn5ZTLSUik",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "freedomfufighter",
    "checked": "2026-09-20"
  },
  "1978": {
    "path": "assets/filmframes/1978.webp",
    "caption": "Heidi (1978) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=RPtaKhZ7OZ4",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Seb Jec",
    "checked": "2026-09-20"
  },
  "1978new": {
    "path": "assets/filmframes/1978new.webp",
    "caption": "The New Adventures of Heidi (1978) · Screenshot bei 0:03",
    "source": "https://www.youtube.com/watch?v=GLHkiUdznHs",
    "kind": "Screenshot",
    "time": 3.49,
    "credit": "robatsea2009",
    "checked": "2026-09-20"
  },
  "1982song": {
    "path": "assets/filmframes/1982song.webp",
    "caption": "Heidi’s Song (1982) · Screenshot bei 0:46",
    "source": "https://www.youtube.com/watch?v=-jVYCB2xly4",
    "kind": "Screenshot",
    "time": 46.19,
    "credit": "Warner Bros. Classics / Warner Archive",
    "checked": "2026-09-20"
  },
  "1987climb": {
    "path": "assets/filmframes/1987climb.webp",
    "caption": "Climb a Tall Mountain (1987) · Screenshot bei 4:15",
    "source": "https://www.youtube.com/watch?v=abTPN1g_ZHA",
    "kind": "Screenshot",
    "time": 255.65,
    "credit": "Vision Video",
    "checked": "2026-09-20"
  },
  "1990courage": {
    "path": "assets/filmframes/1990courage.webp",
    "caption": "Courage Mountain · Heidi’s New Adventure (1990) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=ebUb30Fi9DA",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "2ombieboy’s VHS Vault",
    "checked": "2026-09-20"
  },
  "1992art": {
    "path": "assets/filmframes/1992art.webp",
    "caption": "Heidi · Videokunst (1992) · Player-Vorschaubild",
    "source": "https://vimeo.com/57293131",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Spectacle Theater",
    "checked": "2026-09-20"
  },
  "1993": {
    "path": "assets/filmframes/1993.webp",
    "caption": "Heidi (1993) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=5FKoYvdxjOg",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Films and Cinema Collection",
    "checked": "2026-09-20"
  },
  "1995jetlag": {
    "path": "assets/filmframes/1995jetlag.webp",
    "caption": "Heidi · Jetlag-Animation (1995) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=L-Miw9l3hxA",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "TaranWanderer2",
    "checked": "2026-09-20"
  },
  "2001": {
    "path": "assets/filmframes/2001.webp",
    "caption": "Heidi (2001) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=lZRkhjcJn0A",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Trailer World",
    "checked": "2026-09-20"
  },
  "2005": {
    "path": "assets/filmframes/2005.webp",
    "caption": "Heidi (2005) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=2Q-NAvcRtDo",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Rotten Tomatoes Classic Trailers",
    "checked": "2026-09-20"
  },
  "2005animation": {
    "path": "assets/filmframes/2005animation.webp",
    "caption": "Heidi · Zeichentrickfilm (2005) · Filmstandbild bei 0:25",
    "source": "https://www.videobuster.de/trailer/10772/heidi-trailer",
    "kind": "Filmstandbild",
    "time": 25,
    "credit": "Videobuster / Concorde Film",
    "checked": "2026-09-20"
  },
  "2007teen": {
    "path": "assets/filmframes/2007teen.webp",
    "caption": "Heidi · Heidi & Co. (2007 / 2008) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=fp3T0Yo_qE0",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Play Suisse",
    "checked": "2026-09-20"
  },
  "2008paws": {
    "path": "assets/filmframes/2008paws.webp",
    "caption": "Heidi 4 Paws: A Furry Tale (2008) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=t_rvjI0fv2I",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "4PawsTV",
    "checked": "2026-09-20"
  },
  "2015": {
    "path": "assets/filmframes/2015.webp",
    "caption": "Heidi (2015) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=SikG8WUX9Eg",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "STUDIOCANAL Germany",
    "checked": "2026-09-20"
  },
  "2015cgi": {
    "path": "assets/filmframes/2015cgi.webp",
    "caption": "Heidi · Die CGI-Serie (2015 / 2019) · Player-Vorschaubild",
    "source": "https://vimeo.com/760193644",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Studio 100",
    "checked": "2026-09-20"
  },
  "2017bienvenida": {
    "path": "assets/filmframes/2017bienvenida.webp",
    "caption": "Heidi, bienvenida a casa (2017) · Player-Vorschaubild",
    "source": "https://vimeo.com/231523548",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Mondo TV Studios",
    "checked": "2026-09-20"
  },
  "2022": {
    "path": "assets/filmframes/2022.webp",
    "caption": "Mad Heidi (2022) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=tjGIWcOrq-I",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "MAD HEIDI",
    "checked": "2026-09-20"
  },
  "2023karpi": {
    "path": "assets/filmframes/2023karpi.webp",
    "caption": "Cursed Heidi · KI-Trailerexperiment (2023) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=0A2-Af5JEWU",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Karpi",
    "checked": "2026-09-20"
  },
  "2024moody": {
    "path": "assets/filmframes/2024moody.webp",
    "caption": "Heidi · Precious Light Pictures (2024) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=_9zLD2CUlVM",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "EncourageTV",
    "checked": "2026-09-20"
  },
  "2025": {
    "path": "assets/filmframes/2025.webp",
    "caption": "Heidi – Die Legende vom Luchs (2025) · Player-Vorschaubild",
    "source": "https://www.youtube.com/watch?v=1PJJ90ryNxQ",
    "kind": "Player-Vorschaubild",
    "time": null,
    "credit": "Heidi / Studio 100",
    "checked": "2026-09-20"
  }
};
