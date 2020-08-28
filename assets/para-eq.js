var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext();

var source = audioContext.createMediaElementSource(curr_track);
var parametricEQ1 = audioContext.createBiquadFilter();
parametricEQ1.type = "peaking";
parametricEQ1.gain.value = 0; // allow the user to change this
parametricEQ1.Q.value = 1; // allow the user to change this
parametricEQ1.frequency.value = 1000;

source.connect(parametricEQ1);
parametricEQ1.connect(audioContext.destination);

var parametricEQ2 = audioContext.createBiquadFilter();
parametricEQ2.type = "peaking";
parametricEQ2.gain.value = 0; // allow the user to change this
parametricEQ2.Q.value = 1; // allow the user to change this
parametricEQ2.frequency.value = 64;

source.connect(parametricEQ1);
parametricEQ2.connect(audioContext.destination);

var parametricEQ3 = audioContext.createBiquadFilter();
parametricEQ3.type = "peaking";
parametricEQ3.gain.value = 0; // allow the user to change this
parametricEQ3.Q.value = 1; // allow the user to change this
parametricEQ3.frequency.value = 12000;

source.connect(parametricEQ1);
parametricEQ3.connect(audioContext.destination);