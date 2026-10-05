# Editing the portfolio

- **Biography, contact, labels:** edit `index.html`.
- **Colours and layout:** edit the variables and rules in `style.css`.
- **Images:** use files in `images/`; update image paths and alt text if replacing them.
- **Releases:** each `.release` article in `index.html` has its Spotify album ID in `data-album`, its cover image, date, title and direct Spotify link. Give each new player a unique `id` and match the cover button's `aria-controls`.
- **Concert:** update the YouTube link in `index.html` and the embed video ID in `music.js` together. The concert poster uses `images/music-performance.png`.
- **Player behaviour:** `music.js` opens one Spotify embed at a time and loads the concert embed only on a visitor's click.
- **Old page links:** `about.html`, `music.html`, `contact.html` and `film.html` redirect into the homepage.

Preview with `python3 -m http.server 8000` and visit http://localhost:8000.
