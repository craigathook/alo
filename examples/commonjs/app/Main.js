'use strict';

var Button = require('./Button'); // Animation Module
var alo = require('../../../src/utils/createjs/Alo');

function Main() {
  console.log('Main: instance');

  var buttonAContainer = document.querySelector('#buttonA');
  var buttonBContainer = document.querySelector('#buttonB');

  var buttonA;
  var buttonB;

  alo.load('animations/button-a', buttonAContainer, buttonA_LoadComplete, { transparent: true });
  alo.load('animations/button-b', buttonBContainer, buttonB_LoadComplete, { transparent: true });

  function buttonA_LoadComplete(stage) {
    console.log('Main: buttonA_LoadComplete');
    buttonA = new Button(stage);
  }

  function buttonB_LoadComplete(stage) {
    console.log('Main: buttonB_LoadComplete');
    buttonB = new Button(stage);
  }

}

var main = new Main();
 