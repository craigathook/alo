'use strict';

var Button = require('./Button'); // Animation Module

var ModuleLoader = require('../../../src/utils/createjs/ModuleLoader');

function Main() {
  console.log('Main: instance');

  var module = new ModuleLoader();

  var buttonAContainer = document.querySelector('#buttonA');
  var buttonBContainer = document.querySelector('#buttonB');

  this.init = function() {
    console.log('Main: init');

    module.load('animations/button-a', buttonAContainer, Button, {
      onLoaded: animationLoadComplete,
      transparent: true
    });
    module.load('animations/button-b', buttonBContainer, Button, {
      onLoaded: animationLoadComplete,
      transparent: true
    });
  }

  function animationLoadComplete(instance) {
    console.log('Main: loadComplete', instance);
  }

  this.init();

}

var main = new Main();
