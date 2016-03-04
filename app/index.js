'use strict';

var ButtonA = require('./ButtonA'); // Animation Module
var ButtonB = require('./ButtonB'); // Animation Module

var ModuleLoader = require('./utils/createjs/ModuleLoader');

function Main() {
  console.log('Main: instance');

  var module = new ModuleLoader();

  var buttonAContainer = document.querySelector('#buttonA');
  var buttonBContainer = document.querySelector('#buttonB');

  this.init = function() {
    console.log('Main: init');

    module.load('animations/button-a', ButtonA, animationLoadComplete, {
      target: buttonAContainer,
      transparent: true
    });
    module.load('animations/button-b', ButtonB, animationLoadComplete, {
      target: buttonBContainer,
      transparent: true
    });
  }

  function animationLoadComplete(instance) {
    console.log('Main: loadComplete', instance);
  }

  this.init();

}

var main = new Main();
