var compressor = audioContext.createDynamicsCompressor();
//source.buffer = audioBuffer;
source.connect(compressor);
compressor.threshold.value = -40;
compressor.ratio.value = 12;
compressor.knee.value = 30;
compressor.release.value = 0.003;
compressor.attack.value = 0.250;


compressor.connect(audioContext.destination);

/*---Delay---*/

//var sound = audioContext.createBufferSource();
var delayAmount = audioContext.createGain();
var delay = audioContext.createDelay();
//sound.buffer = AudioBuffer;
delay.delayTime.value = 0.6;
delayAmount.gain.value = 0;
source.connect(delay);
delay.connect(delayAmount);
delayAmount.connect(delay);
delayAmount.connect(audioContext.destination);
//source.connect (audioContext.destination);
//source.start(audioContext.currentTime);
delay.connect(audioContext.destination);