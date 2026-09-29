# Editing the portfolio

Edit these files directly in this repository; each commit updates this version.

- `index.html` — landing page. Replace `images/portrait-home.jpg` to change the formal portrait.
- `contact.html` — email, Instagram, Spotify, Apple Music, YouTube Music and score images.
- `about.html` — biography and `images/portrait-about.jpg` casual photograph.
- `film.html` — each film is one `<article class="film-card">` block. Copy it to add a project, then replace title, year, director, music credit, image path and alt text. Put the corresponding still in `images/`. To link the still, change the image container `<div>` to an `<a href="YOUR_URL">` and its closing tag to `</a>`.
- `music.html` — six Spotify releases. For a new release, copy a card and update the cover filename, title, month and year, release type, track count, and `data-spotify-uri="spotify:album:ALBUM_ID"`. The small play button is controlled by `music.js`. Spotify controls the stream and may require a signed-in listener or a second interaction. Its iframe API does not guarantee a chosen start time within a music track. For precise excerpts, add authorized audio files and a dedicated local player.
- `style.css` — colors, spacing and typography.

`images/README.md` lists image filenames. GitHub stores each edit in this repository.
