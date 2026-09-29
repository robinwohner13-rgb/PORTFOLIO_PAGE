# Editing the portfolio

Edit the files in this repository directly. You do not need to make a ZIP.

## Film scores

Open `film.html`. Each film is one `<article class="film-card"> ... </article>` block. Copy that whole block to add another film, then update:

- `Film title`, `Year`, `Director: Name`, and `Music: Robin` with the exact credits.
- The image filename, such as `images/film-01.jpg`, and its `alt` text. Put the matching JPG in `images/`. A poster or still around 1600 px wide is sufficient for this layout.
- To link the image, change `<div class="film-art media-slot">` to `<a class="film-art media-slot" href="https://your-real-film-url">` and change the matching `</div>` immediately after its placeholder text to `</a>`.
- The audio filename, such as `audio/film-01.mp3`. Put the matching MP3 in `audio/`. The browser player is ready; it cannot play until that file exists. Change the `aria-label` to include the film's real title.

The discography page also has two ready-to-use audio players. Add `audio/release-01.mp3` and `audio/release-02.mp3`, then replace its release titles and streaming-link placeholders with real URLs.

For an external SoundCloud or Bandcamp player, replace the entire `<audio> ... </audio>` element with that service's official embed iframe. Streaming links can also go below the player as ordinary `<a href="...">Listen on ...</a>` links. Never paste a private share or preview URL into a public page.

## Other pages

`index.html` is the landing page; `discography.html`, `about.html`, and `contact.html` are separate pages. `style.css` controls the common design. The `images/README.md` lists filenames used by the other pages. Replace the example contact text before sharing the site.

GitHub stores each edit in this same repository. If GitHub Pages is enabled later, publishing from the `main` branch will update the public site when changes are committed.
