// set typing speed and wait times
var timeInit = 300;     // initial wait before typing first line
var timeGap = 300;      // wait time between each line
var timeChar = 50;       // time until next letter

var cursorChar = '&#x2759;';

var originId = ['line1', 'line2','line3', 'line4'];
var originText = new Array();
for (var i = 0; i < originId.length; i++) {
  originText.push(document.getElementById(originId[i]).innerHTML);
}

var cursorLine = document.getElementById('cursor-line');

var currentTimeout;
var showCursor;

var typeWriter = function(index) {
  var loc = document.getElementById(originId[index]);
  var fullText = originText[index];
  var letterCount = 0;

  // this function spits out one letter per call, then calls the subsequent typeLetter()
  var typeLetter = function() {
    currentTimeout = setTimeout(function() {
      loc.className = 'visible';
      letterCount += 1;
      var showText = fullText.substring(0, letterCount);

      // stops the function from self-calling when all letters are typed
      if (letterCount === fullText.length) {
        loc.innerHTML = showText;
      } else {
        loc.innerHTML = showText + '<span class="typed-cursor">' + cursorChar + '</span>';
        typeLetter();
      }
    }, timeChar);
  };

  typeLetter();

  // show cursor on next line
  var totalTime = fullText.length * timeChar + timeChar;
  showCursor = setTimeout(function() {
    document.getElementById('cursor-line').className = 'visible';
  }, totalTime);
};

// calculated time delays
var delayTime = [timeInit];
var cumulativeDelayTime = [timeInit];
for (var i = 0; i < originId.length; i++) {
  var elapsedTimeLine = originText[i].length * timeChar + timeGap + timeChar * 2;
  delayTime.push(elapsedTimeLine);
  var sum = 0;
  for (var j = 0; j < delayTime.length; j++) {
    sum += delayTime[j];
  };
  cumulativeDelayTime.push(sum);
};

// calls setTimeout for each line
var typeLineTimeout = new Array();
for (var i = 0; i < originId.length; i++) {
  typeLineTimeout[i] = setTimeout((function(index) {
    return function() {
      cursorLine.className = 'hidden';
      typeWriter(index);
    }
  })(i), cumulativeDelayTime[i]);

};

// stops all timeouts
var skip = function() {
  clearTimeout(currentTimeout);
  clearTimeout(showCursor);
  for (var i = 0; i < typeLineTimeout.length; i++) {
    clearTimeout(typeLineTimeout[i]);
  };
};


var rewriteText = function(element, index, array) {
  var loc = document.getElementById(element);
  loc.innerHTML = originText[index];
  loc.className = 'visible';
};


// trigger skip and rewrite on pressing enter or spacebar
window.onkeydown = function(key){
  if (key.which === 13 || key.which === 32) {
    skip();
    originId.forEach(rewriteText);
    document.getElementById('cursor-line').className = 'visible';
  }
};
