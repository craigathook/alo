var ModuleLoader = require('./ModuleLoader');
var AnimationLoader = require('./AnimationLoader');
var AnimationCanvas = require('./AnimationCanvas');

function Alo() {

  this.module = new ModuleLoader();
  this.loader = new AnimationLoader();
  this.load = this.loader.load;
  this.Canvas = AnimationCanvas;

}

module.exports = Alo;