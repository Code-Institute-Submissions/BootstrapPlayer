
# BootstrapPlayer

![iamresponsive iamge3](https://github.com/pbtrad/BootstrapPlayer/blob/master/assets/images/iamresponsivescreenshot3.png)


Bootstrap player is a music player with a comprehensive range of audio manipulation options using the [Web Audio API](https://www.w3.org/TR/webaudio/), for audiophiles, sound engineers and those who just want to tweek the music they listen to.

Bass, mids, trebles, can all be controlled by the listener with parametric and graphic equalisers, with extra options of a compressor divided up into it's own smaller elements.

## UX

The purpose of the site is to provide the user a detailed range of audio manipulation options, with a responsive working audio interface.

**User Stories**

* As a audiophile I would like to be able to change certain elements of sound in an effort to explore the audio possibilities at the touch of a button, and also have these options on my mobile device.

* As a sound engineer I can use these audio tools as a template for my profession on the go.

* Some people may be sensitive the certain frequencies, such a person might like to change the frequencies to create a more comfortable listening experience.

## Features

**Existing Features**

**Player**

* The initial loaded page features a basic music player with play, pause, next song, previous song functions. An image, normally an album cover is positioned above the functional player.
The player and all the options are contained within a mobile phone size div, a design inspired by [BBC Radio](https://www.bbc.co.uk/sounds/player/bbc_radio_five_live).

**Parametric Equaliser**


![para-eq-shot](https://github.com/pbtrad/BootstrapPlayer/blob/master/assets/images/paraeqscreenshot.png)

* A parametric equaliser allows the user to modify three aspects of the audio, the frequency, gain and bandwidth.  The website gives the option for 3 single band parametric equalisers-High, Mid, Low.
A large range of sound control is possible with the parametric equaliser.  The knob design uses [JQuery-Knob](https://github.com/aterrien/jQuery-Knob).

**Graphic Equaliser**

![graphic-eg-shot](https://github.com/pbtrad/BootstrapPlayer/blob/master/assets/images/graphic-eq-screenshot.png)

* Unlike a parametric equaliser, a graphic equaliser allows the user to modify only fixed frequencies, but the advantage is that you can cut or boost the level on equally spaced frequencies. The website contains a seven band graphic equaliser built using the range slider options from [JQueryUI](https://jqueryui.com/). The frequencies the user is able to change ranges from a low of high

**Compressor**

![para-eq-shot](https://github.com/pbtrad/BootstrapPlayer/blob/master/assets/images/compressorshot.png)

*The Web Audio API has availabe to developers a Dynamics Compressor Node.  A compressor attenuates an audio signal when its decibel level exceeds a specific threshold.  The Dynamics Compressor Node is an object that provides five properties all of which are provided on the interface.

* Threshold

The threshold is the decibel value compression will start taking effect. 

* Ratio

Determines how much compression is administered.

* Knee

A decibel value representing the range above the threshold, for smooth transition.

* Release

Sets the release speed of compressed effect.

* Attack

Sets the attack speed of compressed effect.

**Delay**

The delay option provides an echoing delay to the audio adding some reverb.  This effect is created using the Web Audio API Delay Node.  It is contained within the compressor box for design purposes.

**Spectrum Analyser**

![analyser-shot](https://github.com/pbtrad/BootstrapPlayer/blob/master/assets/images/analysershot.png)

The website features a working Spectrum Analyser for an audiovisual animation.

**Features Left to Implement**

The Web Audio API has many more options available for a complete audio interface, including convolver nodes, channel splitter nodes, and with the Web Audio API's timing clock, looping options can be created.  The website can be turned into a radio player, or may be linked to a library of sounds for audio engineering creativity.

## Technologies Used

1. **HTML** : HTML was used in the construction of the website.

2. **CSS** : CSS was used for styling.

3. **javaScript** : javaScript is the programming language used for the main player and all the sound control options.  

4. **jQuery** : jQuery is the javaScript library used.

5. **jQuery-Knob** : The controls for the parametric equaliser and the compressor are made using [jQuery-Knob](https://github.com/aterrien/jQuery-Knob).

6. **jQueryUI** : The range sliders for the graphic equaliser are styled with [jQueryUI](https://jqueryui.com/).

7. **Web Audio API** : The [Web Audio API](https://www.w3.org/TR/webaudio/) specification developed by W3C describes a high-level JavaScript API for processing and synthesizing audio in web applications. The primary paradigm is of an audio routing graph, where a number of AudioNode objects are connected together to define the overall audio rendering.

8. **Bootstrap** : The CSS framework Bootstrap is used for responsive styling.

9. **Visual Studio Code** : Microsoft's Visual Studio Code is the code editor used to build the website.

10. **Git** : A version control system for tracking changes in source code during software development.

11. **GitHub** : A company that provides hosting for software development version control using Git.

12. **Chrome Developer Tools** : Chrome DevTools was instrumental in debugging the console and fixing the javaScript.

13. **Firefox Element Inspector** : Much of the CSS debugging was done using Firefox Element Inspector for it's usability.

14. **W3C Markup Validation Service** : All HTML and CSS was run through the validation process.

15. **Fontawesome** : The player buttons are fontawesome icons.

## Testing

1. **Responsiveness** : http://ami.responsivedesign.is/ was used to see how the website performs on different Apple screen sizes.  Developer Tools on Chrome, Firefox and Edge were used to see website on all the various viewport sizes.

2. **CSS** : Firefox Element Inspector was primarily used for testing the CSS as it has more user friendly CSS debugger than Chrome.

3. **javaScript** : Chrome Dev Tools was the primary source for javaScript testing as it's console is the best for debugging.  The code was also run through https://codebeautify.org/jsvalidate, a javaScript code validator.  The console is showing no errors or warnings after much debugging.

**Major javaScript Bugs, Errors and Warnings**

* Bug: WARNING "the audiocontext was not allowed to start. it must be resumed (or created) after a user gesture on the page. https://goo.gl/7k7wlu".
* Solution: A polyfill added to the Play button (player.js-line 106) - "if (audioContext.state !== 'running') {
    audioContext.resume();"
  } -- This is required since changes made to audio on browsers using the Web Audio API to stop unwanted audio playing- https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio. No audio will play on Chrome or Safari without audioContext(resume) at a user gesture, although would work on Firefox.
  
* Bug: WARNING "Added non-passive event listener to a scroll-blocking 'touchstart' event.
Consider marking event handler as 'passive' to make the page more responsive".
* Solution: A polyfill  added to player.js-line 192 - "    (function () {
  if (typeof EventTarget !== "undefined") {
    let func = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (type, fn, capture) {
      this.func = func;
      if (typeof capture !== "boolean") {
        capture = capture || {};
        capture.passive = false;
      }"
      this.func(type, fn, capture);
    };
  };
  -- This was a warning regarding the responsiveness of the controls with touch-screen scrollability.


**Graphic Equaliser**

i. Play audio track.

ii. Scroll to Graphic Equaliser range sliders.

iii. Slide the 6kHz and 12kHz sliders to top, higher frequencies are more pronounced. Slide the 64Hz and 150Hz sliders to the bottom, the bass is reduced.

**Open Issues**

The Spectrum Analyser has loading issues as it is created on a canvas, sometimes it takes a reload of the page to fix the issue. The FFT was value reduced for loading purposes.

The knobs made using jQuery-Knob are also canvas based and it is very difficult to debug in the console for sizing and responsiveness as canvas is not a DOM. The only way of inspection using Chrome Dev tools/developer preferences/experiments/Canvas Inspections and it very limited

## Deployment

1. Github account created at https://github.com/ - My account URL: https://github.com/pbtrad/.

2. Files uploaded from Visual Studio Code through Git to Github repository at https://github.com/pbtrad/BootstrapPlayer.

3. To publish the website and see it on the web, I went to Settings, then to GitHub Pages, selected Master Branch as a publishing source and saved it. The page was published and the URL made available; Your site is published at https://pbtrad.github.io/BootstrapPlayer/#player.
 
**How users can deploy to a local system**
 
In order to run the code on a local machine, you would go to my Github repository at  https://github.com/pbtrad, just above the file click  "Clone or download", this button will give you options to clone with HTTPS, open in desktop or download as a zip file. To continue cloning steps to take are:

* Open Git Bash
* Change the current working directory to the location where you want the cloned directory to be made.
* Type git clone then add the URL: https://github.com/pbtrad/BootstrapPlayer.git.
* Press enter and clone is created.

## Credits

**Content**

1. The player design and javaScript taken from [geeksforgeeks.org](https://www.geeksforgeeks.org/create-a-music-player-using-javascript/).

2. The Spectrum Analyser is based on the example used on Mozilla MDN WebDocs at https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode.

3. The knob design uses [jQuery-Knob](https://github.com/aterrien/jQuery-Knob), created by Anthony Terrien.

4. The overall final design for desktop was inspired by https://www.bbc.co.uk/sounds/player/bbc_radio_five_live.

5. All the the code for the sound manipulation comes from https://www.w3.org/TR/webaudio/ and https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API.

**Media**

All media-images and tracks are open source or with the permission of the artist.

*Images
* https://unsplash.com/@martinengel
* https://source.unsplash.com/Qrspubmx6kE/640x360
* https://unsplash.com/@naomitamar
* https://unsplash.com/@giorgiotrovato
* https://unsplash.com/@arstyy

*Tracks
https://freemusicarchive.org/ for Upbeat Party by Scott Holmes and Linertie by Yarostan.
Julia Delaney's by the Bothy Band used with permission.
Ahern's Egg and Stormy Weather by Peter Browne used with permission - http://www.peterbrownemusic.com/.

Various snippets of HTML CSS and Bootstrap taken from 
* https://www.w3schools.com/
* https://getbootstrap.com/
* https://stackoverflow.com/.

**Acknowledgements**

1. Code Institute Slack channels and those who contributed to them.
2. Adegbenga Adeye for mentoring support throughout the project.








