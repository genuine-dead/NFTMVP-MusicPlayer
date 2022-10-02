window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
  var list = document.getElementById('list');

  list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';

  document.getElementById('list-screen').classList.remove('slide-out-top');
  document.getElementById('list-screen').classList.add('slide-in-top');
  document.getElementById('list-screen').style.display = "block";
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
  document.getElementById('list-screen').classList.remove('slide-in-top');
  document.getElementById('list-screen').classList.add('slide-out-top');
  document.getElementById('list-screen').style.display = "none";
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
       "name": "Jack Straw",
      "artist": "Grateful Dead",
      "album": "Jan 13 1980 Oakland Colesum",
      "url": "https://ipfs.io/ipfs/QmNXwGLrDXznHZU9UtzWdTNcHnBKbpGHNFSDqw25S6SP53?filename=01%20-%20Jack%20Straw.flac",
      "cover_art_url": "https://ipfs.io/ipfs/QmeGLc4ffZS2cAdh1uqYnXkjpCAkM1TMB8opnVEZ2gHHkg?filename=DALL%C2%B7E%202022-09-24%2018.06.14%20-%20photorealistic%20illustration%2C%20magic%20mushroom%2C%20pychedelic%2C%20day-glo%20paint%2C%20flowers%2C%20skulls%20and%20roses%2C%20Ray%20Tracing%20Reflections%2C%20intricate%2C%20%20elegant%2C%20ornat.png"
    },
    {
      "name": "Franklin's Tower",
      "artist": "Grateful Dead",
      "album": "Jan 13 1980 Oakland Colesum",
      "url": "https://ipfs.io/ipfs/QmUwWzsNScENcEJwGgLRvqDPGXncPApFJZckrRKLwND542?filename=02%20-%20Franklin's%20Tower.flac",
      "cover_art_url": "https://ipfs.io/ipfs/QmTekARVetqfeqy7tW1Y9FtkLwtW9csr3A9CvqEFuq5cg5?filename=DALL%C2%B7E%202022-09-24%2018.07.22%20-%20photorealistic%20illustration%2C%20magic%20mushroom%2C%20Psychedelic%2C%20bioluminescence%2C%20intricate%2C%20%20elegant%2C%20ornate%2C%20unreal%20engine%2C%208k%2C%20by%20Mario%20Martinez.png"
    },
    {
      "name": "Minglewood Blues",
      "artist": "Grateful Dead",
      "album": "Jan 13 1980 Oakland Colesum",
      "url": "https://ipfs.io/ipfs/Qmdnz2ALaEBtsu6NUVqj2RHmMVmQhpB3eBhumTR1VXYTCd?filename=03%20-%20Minglewood%20Blues.flac",
      "cover_art_url": "https://ipfs.io/ipfs/QmSxvJh3nxiyFRikT4LJTAxXvGnNj2ViRQhARXjTYzHq1o?filename=DALL%C2%B7E%202022-09-24%2018.07.48%20-%20photorealistic%20illustration%2C%20magic%20mushroom%2C%20bioluminescence%2C%20flowers%2C%20%20Ray%20Tracing%20Reflections%2C%20intricate%2C%20%20elegant%2C%20ornate%2C%20unreal%20engine%2C%208k%2C%20by%20al.png"
    },
    
  ]
});
