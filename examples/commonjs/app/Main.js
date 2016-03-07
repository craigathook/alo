'use strict';

var Button = require('./Button'); // Animation Module

var ModuleLoader = require('./utils/createjs/ModuleLoader');

function Main() {
  console.log('Main: instance');

  var module = new ModuleLoader();

  var buttonAContainer = document.querySelector('#buttonA');
  var buttonBContainer = document.querySelector('#buttonB');

  this.init = function() {
    console.log('Main: init');

    module.load('animations/button-a', Button, animationLoadComplete, {
      target: buttonAContainer,
      transparent: true
    });
    module.load('animations/button-b', Button, animationLoadComplete, {
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
