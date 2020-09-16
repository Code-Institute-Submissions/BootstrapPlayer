//DynamicsCompressor Node created

var compressor = audioContext.createDynamicsCompressor();

source.connect(compressor);
compressor.threshold.value = -40;
compressor.ratio.value = 12;
compressor.knee.value = 30;
compressor.release.value = 0.003;
compressor.attack.value = 0.250;


compressor.connect(audioContext.destination);

/*---Delay---*/

var delayAmount = audioContext.createGain();
var delay = audioContext.createDelay();
delay.delayTime.value = 0;
delayAmount.gain.value = 0;
source.connect(delay);
delay.connect(delayAmount);
delayAmount.connect(delay);
delayAmount.connect(audioContext.destination);
delay.connect(audioContext.destination);