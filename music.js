// Spotify's documented iframe controller supports play, but track seeking is not guaranteed.
window.onSpotifyIframeApiReady = (IFrameAPI) => {
  document.querySelectorAll('.release-card').forEach(card => {
    const button = card.querySelector('.release-play');
    const host = card.querySelector('.spotify-embed');
    IFrameAPI.createController(host, {uri: card.dataset.spotifyUri, width: '100%', height: 152}, controller => {
      button.addEventListener('click', () => {
        const open = button.getAttribute('aria-expanded') === 'true';
        if (open) {
          controller.pause();
          host.classList.remove('is-open');
          button.setAttribute('aria-expanded', 'false');
          button.setAttribute('aria-label', button.getAttribute('aria-label').replace(/^Pause /, 'Play '));
        } else {
          document.querySelectorAll('.release-card').forEach(other => {
            if (other !== card && other._spotifyController) {
              other._spotifyController.pause();
              other.querySelector('.spotify-embed').classList.remove('is-open');
              const otherButton = other.querySelector('.release-play');
              otherButton.setAttribute('aria-expanded', 'false');
              otherButton.setAttribute('aria-label', otherButton.getAttribute('aria-label').replace(/^Pause /, 'Play '));
            }
          });
          host.classList.add('is-open');
          button.setAttribute('aria-expanded', 'true');
          button.setAttribute('aria-label', button.getAttribute('aria-label').replace(/^Play /, 'Pause '));
          controller.play();
        }
      });
      card._spotifyController = controller;
    });
  });
};
