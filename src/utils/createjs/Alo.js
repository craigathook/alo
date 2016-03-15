var AnimationLoader = require('./AnimationLoader');
var AnimationCanvas = require('./AnimationCanvas');

function Alo() {

  var loader = new AnimationLoader();

  this.load = loader.load;
  this.Canvas = AnimationCanvas;

}

module.exports = new Alo();