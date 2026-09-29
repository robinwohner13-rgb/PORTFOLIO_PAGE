// Spotify's documented iframe controller supports play, but track seeking is not guaranteed.
window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const station = document.createElement('div');
  station.className = 'spotify-player-station';
  station.setAttribute('aria-hidden', 'true');
  document.body.append(station);
  document.querySelectorAll('.release-card').forEach(card => {
    const button = card.querySelector('.release-play');
    const host = document.createElement('div');
    station.append(host);
    IFrameAPI.createController(host, {uri: card.dataset.spotifyUri, width: '100%', height: 152}, controller => {
      button.addEventListener('click', () => {
        const open = button.getAttribute('aria-pressed') === 'true';
        if (open) {
          controller.pause();
          button.setAttribute('aria-pressed', 'false');
          button.setAttribute('aria-label', button.getAttribute('aria-label').replace(/^Pause /, 'Play '));
        } else {
          document.querySelectorAll('.release-card').forEach(other => {
            if (other !== card && other._spotifyController) {
              other._spotifyController.pause();
              const otherButton = other.querySelector('.release-play');
              otherButton.setAttribute('aria-pressed', 'false');
              otherButton.setAttribute('aria-label', otherButton.getAttribute('aria-label').replace(/^Pause /, 'Play '));
            }
          });
          button.setAttribute('aria-pressed', 'true');
          button.setAttribute('aria-label', button.getAttribute('aria-label').replace(/^Play /, 'Pause '));
          controller.play();
        }
      });
      card._spotifyController = controller;
    });
  });
};
