var ModuleLoader = require('./utils/createjs/ModuleLoader');
var AnimationLoader = require('./utils/createjs/AnimationLoader');
var AnimationCanvas = require('./utils/createjs/AnimationCanvas');

function AnimateUtils() {

  this.module = new ModuleLoader();
  this.loader = new AnimationLoader();
  this.Canvas = AnimationCanvas;

}

window.AnimateUtils = new AnimateUtils();