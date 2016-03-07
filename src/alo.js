var ModuleLoader = require('./utils/createjs/ModuleLoader');
var AnimationLoader = require('./utils/createjs/AnimationLoader');
var AnimationCanvas = require('./utils/createjs/AnimationCanvas');

function Alo() {

  this.module = new ModuleLoader();
  this.loader = new AnimationLoader();
  this.load = this.loader.load;
  this.Canvas = AnimationCanvas;

}

window.alo = new Alo();