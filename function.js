// https://www.chartjs.org/


window.function = function (time, fweight, align, fsize, width, height) {

  // data
  time = time.value ?? "";
  fweight = fweight.value ?? "600";
  align = align.value ?? "center";
  fsize = fsize.value ?? "20";
  width = width.value ?? "100";
  height = height.value ?? "100";

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
  </head>
  <body>
   <!-- Display the countdown timer in an element -->
<div class = "container">
<p id="pre"></p>
<button id="btn" onclick="playBuffer()">Play Buffer!</button>
</div>
<audio controls id = "audio" src = "https://www.fesliyanstudios.com/play-mp3/4385" />
<style>

.container {
text-align: center;
width: ${width}vw;
height: ${height}vh;
}

#btn {
text-align: center;
font-family: verdana;
color: white;
font-size: 15px;
width: 200px;
background-color: #12A89E;
padding: 10px 24px;
border: none;
border-radius: 8px;
}

#pre {
font-weight: ${fweight};
text-align: ${align};
font-family: verdana;
font-size: ${fsize}px;
}

@media (prefers-color-scheme: dark) {

#pre {
color: #12A89E;
}
}

@media (prefers-color-scheme: light) {

#pre {
color: #12A89E;
}
}

</style>
<script>
// Set the date we're counting down to
const mediaElement = document.getElementById("audio");
const url = mediaElement.src;
let sourceBuffer;


const ctx = new AudioContext();

fetch(url)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
  .then(audioBuffer => {
    sourceBuffer = ctx.createBufferSource();
    sourceBuffer.buffer = audioBuffer;
    sourceBuffer.connect(ctx.destination);
    document.getElementById("btn").disabled = false;
  });

function playElement() {
  // To be honest, I have no idea, why this has to be in an event listener
  // Also, seems to have to be right before the play call for some reason
  // Does not make sense to me, I hope it's a quirk of the snippet environment
  mediaElement.addEventListener('play', () => {
    const sourceElement = ctx.createMediaElementSource(mediaElement);
    sourceElement.connect(ctx.destination);
  });
  mediaElement.play();
}

function playBuffer() {
  sourceBuffer.start();
}

</script>
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}
