# Robin Wohner — Artist Portfolio

A new single-page portfolio with blue and forest-green sections, original photography, six releases, biography, live piano performance, a Tower score excerpt and contact links.

## Preview

Open `index.html` for a quick local look. For the embedded concert player, serve the folder over HTTP:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. YouTube requires an HTTP referrer; when opening the HTML directly, the concert image links to YouTube. Spotify and YouTube playback need an internet connection and may depend on provider availability or account restrictions. Neither embed starts before a visitor requests it.

There are no dependencies, build steps, or new hosting subscriptions. The site remains compatible with GitHub Pages.

## Content

See `EDITING.md`. Previously shared About, Music, Contact and Films URLs redirect into the relevant section. Film scoring inquiries live in Contact until there are actual film projects to display.
