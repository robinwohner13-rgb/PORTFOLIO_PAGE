// Load an actual player on request. Removing other embeds stops overlapping playback.
document.querySelectorAll('.release').forEach(card => {
  const button = card.querySelector('.cover-button');
  const panel = card.querySelector('.release-player');
  const title = card.querySelector('h3').textContent;
  button.addEventListener('click', () => {
    const opening = panel.hidden;
    document.querySelectorAll('.release').forEach(other => {
      other.querySelector('.release-player').hidden = true;
      other.querySelector('.release-player').replaceChildren();
      const otherButton = other.querySelector('.cover-button');
      otherButton.setAttribute('aria-expanded', 'false');
      otherButton.setAttribute('aria-label', 'Open player for ' + other.querySelector('h3').textContent);
      otherButton.querySelector('.cover-action').innerHTML = '<span aria-hidden="true">▷</span> Listen';
    });
    if (!opening) return;
    const iframe = document.createElement('iframe');
    iframe.src = 'https://open.spotify.com/embed/album/' + encodeURIComponent(card.dataset.album) + '?theme=0';
    iframe.title = title + ' — Spotify player';
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    const link = document.createElement('a');
    link.href = 'https://open.spotify.com/album/' + encodeURIComponent(card.dataset.album);
    link.target = '_blank'; link.rel = 'noopener noreferrer';
    link.textContent = 'Open ' + title + ' on Spotify';
    panel.append(iframe, link);
    panel.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Close player for ' + title);
    button.querySelector('.cover-action').textContent = 'Close player';
  });
});
// YouTube requires an HTTP referrer. On file:// retain the reliable YouTube link.
const concert = document.querySelector('.concert-launch');
if (concert && /^https?:$/.test(location.protocol)) {
  const launch = document.createElement('button');
  launch.type = 'button'; launch.className = concert.className;
  launch.setAttribute('aria-label', 'Play Robin Wohner’s live piano performance');
  launch.innerHTML = concert.innerHTML;
  launch.style.cssText = 'padding:0;border:0;color:inherit;background:transparent;font:inherit';
  concert.replaceWith(launch);
  launch.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/pJ6nPZSP5-0?autoplay=1';
    iframe.title = 'Robin Wohner — live piano performance';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    document.querySelector('#concert-frame').replaceChildren(iframe);
  });
}
