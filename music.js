// Reveal Spotify's usable player instead of hiding its playback controls offscreen.
document.querySelectorAll('.release-card').forEach((card, index) => {
  const button = card.querySelector('.release-play');
  const title = card.querySelector('h2').textContent;
  const albumId = card.dataset.spotifyUri.split(':').pop();
  const panel = document.createElement('div');
  panel.className = 'release-player';
  panel.id = 'release-player-' + index;
  panel.hidden = true;
  card.append(panel);
  button.setAttribute('aria-controls', panel.id);
  button.setAttribute('aria-label', 'Open player for ' + title);
  button.addEventListener('click', () => {
    const opening = panel.hidden;
    document.querySelectorAll('.release-player').forEach(other => {
      other.hidden = true;
      other.replaceChildren();
      const otherButton = other.closest('.release-card').querySelector('.release-play');
      otherButton.setAttribute('aria-expanded', 'false');
      otherButton.setAttribute('aria-label', 'Open player for ' + other.closest('.release-card').querySelector('h2').textContent);
    });
    if (!opening) return;
    const iframe = document.createElement('iframe');
    iframe.src = 'https://open.spotify.com/embed/album/' + encodeURIComponent(albumId) + '?theme=0';
    iframe.title = title + ' — Spotify player';
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    const link = document.createElement('a');
    link.href = 'https://open.spotify.com/album/' + encodeURIComponent(albumId);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Listen on Spotify';
    panel.append(iframe, link);
    panel.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Close player for ' + title);
  });
});
