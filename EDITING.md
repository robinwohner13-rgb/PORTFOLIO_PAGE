# Editing the portfolio

Edit the files in this repository directly. You do not need to make a ZIP.

## Film scores

Open `film.html`. Each film is one `<article class="film-card"> ... </article>` block in the vertical list. Copy that whole block to add another film, then update:

- `Film title`, `Year`, `Director: Name`, and `Music: Robin` with the exact credits.
- The image filename, such as `images/film-01.jpg`, and its `alt` text. Put the matching JPG in `images/`. A poster or still around 1600 px wide is sufficient for this layout.
- To link the image, change `<div class="film-art media-slot">` to `<a class="film-art media-slot" href="https://your-real-film-url">` and change the matching `</div>` immediately after its placeholder text to `</a>`.
- The audio filename, such as `audio/film-01.mp3`. Put the matching MP3 in `audio/`. Visitors open **Listen to score** to play it. The player cannot play until that file exists. Change the `aria-label` to include the film's real title.

The `music.html` page lists six releases from your Spotify artist page. Each **Listen** control opens Spotify’s own player. The cover files are stored in `images/`; no local MP3 is needed for those releases. Update the page if you publish a new release.

For an external SoundCloud or Bandcamp player, replace the entire `<audio> ... </audio>` element with that service's official embed iframe. Streaming links can also go below the player as ordinary `<a href="...">Listen on ...</a>` links. Never paste a private share or preview URL into a public page.

## Other pages

`index.html` is the landing page; `about.html`, `film.html`, `music.html`, `media.html`, and `contact.html` are separate pages. `style.css` controls the common design. The `images/README.md` lists filenames used by the other pages. For Media, add `media-01.jpg`, `media-02.jpg`, and `media-03.jpg` to `images/`, then update their alt text and captions. Your email and Instagram are linked on `contact.html`.

GitHub stores each edit in this same repository. If GitHub Pages is enabled later, publishing from the `main` branch will update the public site when changes are committed.
