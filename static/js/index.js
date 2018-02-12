(function() {
  let player = document.getElementById('player');
  let aLi = document.getElementsByClassName('playlist-item');

  player.src = aLi[0].getAttribute('data-link');
})();