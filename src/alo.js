var AnimationLoader = require('./utils/createjs/AnimationLoader');
var AnimationCanvas = require('./utils/createjs/AnimationCanvas');

function Alo() {

  var loader = new AnimationLoader();

  this.load = loader.load;
  this.Canvas = AnimationCanvas;

}

window.alo = new Alo();