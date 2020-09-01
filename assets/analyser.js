const audioEle = new Audio();
audioEle.crossOrigin = 'anonymous';
curr_track.crossOrigin = 'anonymous';
//audioEle.src = '04 - The Maids of Michelstown.mp3';//insert file name here
//audioEle.src = "https://edge.audioxi.com/98";
audioEle.src = "";
audioEle.autoplay = true;
audioEle.preload = 'auto';

//const audioSourceNode = audioContext.createMediaElementSource(curr_track);

//Create analyser node
const analyserNode = audioContext.createAnalyser();
//analyserNode.fftSize = 256;
analyserNode.fftSize = 4096;

const bufferLength = analyserNode.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

//Set up audio node network
source.connect(analyserNode);
analyserNode.connect(audioContext.destination);

//Create 2D canvas
//const canvas = document.createElement('canvas');
const canvas = document.getElementById('spectrum');
//canvas.style.position = 'absolute';
//canvas.style.top = 0;
//canvas.style.left = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const canvasCtx = canvas.getContext('2d');
canvasCtx.clearRect(0, 0, canvas.width, canvas.height);


function draw() {
  //Schedule next redraw
  requestAnimationFrame(draw);

  //Get spectrum data
  //analyserNode.getFloatFrequencyData(dataArray);
  analyserNode.getByteFrequencyData(dataArray);
  //Draw black background
  canvasCtx.fillStyle = '#372E2E';
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  //Draw spectrum
  const barWidth = (canvas.width / bufferLength) * 2.5;
  let posX = 0;
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = (dataArray[i] + 600) * 2;
    canvasCtx.fillStyle = '#fff';
    canvasCtx.fillRect(posX, canvas.height - barHeight / 2, barWidth, barHeight / 2);
    posX += barWidth + 1;
  }
};

draw();