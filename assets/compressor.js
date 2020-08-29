var compressor = audioContext.createDynamicsCompressor();
//source.buffer = audioBuffer;
source.connect(compressor);
compressor.threshold.value = -40;
compressor.ratio.value = 12;
compressor.knee.value = 30;
compressor.release.value = 0.003;
compressor.attack.value = 0.250;


compressor.connect(audioContext.destination);
