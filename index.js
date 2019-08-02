var Nirvana = document.getElementById("nirvana");
var isPlaying = false;

function playNirvana () {

  if (isPlaying) (
    nirvana.pause()
  )

else {
  nirvana.play();



}

}

nirvana.onplaying = function() {

  isPlaying = true;



}

nirvana.onpause = function() {
  isPlaying = false;

}
