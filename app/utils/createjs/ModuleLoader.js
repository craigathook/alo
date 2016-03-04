var AnimationLoader = require('./AnimationLoader');
var AnimationCanvas = require('./AnimationCanvas');

var loader = new AnimationLoader();

function ModuleLoader() {

  this.load = function(animationName, module, callback, options) {
    var options = options || {};
    console.log('ModuleLoader: load:', animationName);
    var moduleData = {
      name: animationName,
      module: module,
      callback: callback,
      options: options,
      animationData: null
    };

    loader.load(animationName, this.loadComplete.bind(moduleData));

  }.bind(this);

  this.loadComplete = function(animationData) {
    this.animationData = animationData;
    expand = new AnimationCanvas(animationData, moduleLoaded.bind(this), this.options);
  };

  function moduleLoaded(stage) {
    console.log('ModuleLoader: stageLoaded');
    var moduleInstance = new this.module(stage, this.animationData);
    this.callback(moduleInstance);
  }
}

module.exports = ModuleLoader;
