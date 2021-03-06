"use strict";

//Knobs for parametric equaliser 

$(function () {

    $(".freqDial").knob({
        release: function (valueFreqDial) {
            parametricEQ1.frequency.value = valueFreqDial;
        }
    });

    $(".bandwidthDial").knob({
        release: function (valueBandwidthDial) {
            parametricEQ1.Q.value = valueBandwidthDial;
        }
    });

    $(".gainDial").knob({
        release: function (valueGainDial) {
            parametricEQ1.gain.value = valueGainDial;
        }
    });

    $(".freqDial").knob({
        change: function (valueFreqDial) {
            parametricEQ2.frequency.value = valueFreqDial;
        }
    });

    $(".bandwidthDial").knob({
        change: function (valueBandwidthDial) {
            parametricEQ2.Q.value = valueBandwidthDial;
        }
    });

    $(".gainDial").knob({
        change: function (valueGainDial) {
            parametricEQ2.gain.value = valueGainDial;
        }
    });

    $(".freqDial").knob({
        change: function (valueFreqDial) {
            parametricEQ3.frequency.value = valueFreqDial;
        }
    });

    $(".bandwidthDial").knob({
        change: function (valueBandwidthDial) {
            parametricEQ3.Q.value = valueBandwidthDial;
        }
    });

    $(".gainDial").knob({
        change: function (valueGainDial) {
            parametricEQ3.gain.value = valueGainDial;
        }
    });

    //Compressor knobs

    $(".thresholdDial").knob({
        change: function (valueThresholdDial) {
            compressor.threshold.value = valueThresholdDial;
        }
    });

    $(".ratioDial").knob({
        change: function (valueRatioDial) {
            compressor.ratio.value = valueRatioDial;
        }
    });

    $(".kneeDial").knob({
        change: function (valueKneeDial) {
            compressor.knee.value = valueKneeDial;
        }
    });

    $(".releaseDial").knob({
        change: function (valueReleaseDial) {
            compressor.release.value = valueReleaseDial;
        }
    });

    $(".attackDial").knob({
        change: function (valueAttackDial) {
            compressor.attack.value = valueAttackDial;
        }
    });

    $(".delayDial").knob({
        change: function (valueDelayDial) {
            delay.delayTime.value = valueDelayDial;
        }
    });

});

