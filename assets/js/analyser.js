const audioEle = new Audio();
audioEle.crossOrigin = 'anonymous';
curr_track.crossOrigin = 'anonymous';
audioEle.src = "";
audioEle.autoplay = true;
audioEle.preload = 'auto';

//Create analyser node
const analyserNode = audioContext.createAnalyser();
analyserNode.fftSize = 1024;

const bufferLength = analyserNode.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

//Set up audio node network
source.connect(analyserNode);
analyserNode.connect(audioContext.destination);

//Create 2D canvas
const canvas = document.getElementById('spectrum');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const canvasCtx = canvas.getContext('2d');
canvasCtx.clearRect(0, 0, canvas.width, canvas.height);


function draw() {
  //Schedule next redraw
  requestAnimationFrame(draw);

  //Get spectrum data
  analyserNode.getByteFrequencyData(dataArray);
  //Draw black background
  canvasCtx.fillStyle = 'rgba(55, 46, 46)';
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  //Draw spectrum
  const barWidth = (canvas.width / bufferLength) * 2.5;
  let posX = 0;
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = (dataArray[i] + 600) * 2;
    canvasCtx.fillStyle = '#fff';
    canvasCtx.fillRect(posX, canvas.height - barHeight / 3, barWidth, barHeight / 3);
    posX += barWidth + 1;
  }
};

draw();
