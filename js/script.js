console.log('script');

// dial
var myKnob = pureknob.createKnob(160, 160);
myKnob.setProperty('colorBG', '#f4f4f4');
myKnob.setProperty('colorFG', '#fbbf01');
myKnob.setProperty('colorLabel', '#f4f4f4');
myKnob.setProperty('trackWidth', 0.3);
myKnob.setProperty('valMin', 0);
myKnob.setProperty('valMax', 100);
myKnob.setValue(82);

var node = myKnob.node();
var elem = document.getElementById('dial');
elem.appendChild(node);
var listener = function (knob, value) {
    console.log(value);
};
myKnob.addListener(listener);