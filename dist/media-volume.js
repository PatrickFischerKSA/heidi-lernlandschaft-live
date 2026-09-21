'use strict';
(() => {
  const volume = 0.15;
  const initialized = new WeakSet();
  let youtubeReady, vimeoReady;

  function loadScript(src, ready) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(ready());
      script.onerror = reject;
      document.head.append(script);
    });
  }

  function initialize(element) {
    if (initialized.has(element)) return;
    initialized.add(element);
    if (element instanceof HTMLMediaElement) {
      element.volume = volume;
      return;
    }
    const url = new URL(element.src, location.href);
    if (url.hostname === 'www.youtube-nocookie.com') {
      youtubeReady ||= new Promise((resolve, reject) => {
        if (window.YT?.Player) return resolve();
        window.onYouTubeIframeAPIReady = resolve;
        loadScript('https://www.youtube.com/iframe_api', () => {}).catch(reject);
      });
      youtubeReady.then(() => {
        if (!element.isConnected) return;
        new YT.Player(element, {events: {onReady: event => {
          event.target.setVolume(volume * 100);
          event.target.unMute();
        }}});
      }).catch(() => {});
    } else if (url.hostname === 'player.vimeo.com') {
      vimeoReady ||= loadScript('https://player.vimeo.com/api/player.js', () => window.Vimeo);
      vimeoReady.then(async sdk => {
        if (!element.isConnected) return;
        const player = new sdk.Player(element);
        await player.setVolume(volume);
        await player.setMuted(false);
      }).catch(() => {});
    }
  }

  function scan(root) {
    if (root.matches?.('video,audio,iframe')) initialize(root);
    root.querySelectorAll?.('video,audio,iframe').forEach(initialize);
  }
  // Dynamically opened films and comparison players get the same quiet start.
  new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(scan)))
    .observe(document.body, {childList: true, subtree: true});
  document.addEventListener('play', event => {
    if (event.target instanceof HTMLMediaElement) initialize(event.target);
  }, true);
  scan(document.body);
})();
