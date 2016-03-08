var AnimationLoader = require('./AnimationLoader');
var AnimationCanvas = require('./AnimationCanvas');

var loader = new AnimationLoader();

function ModuleLoader() {

  this.load = function(animationName, target, _module, options) {
    var options = options || {};
    if(typeof(target) == 'string') {
      target = document.querySelector(target);
    }
    //console.log('ModuleLoader: load:', animationName);
    var moduleData = {
      name: animationName,
      target: target,
      module: _module,
      callback: options.onLoaded || function(){},
      options: options,
      animationData: null
    };

    loader.load(animationName, this.loadComplete.bind(moduleData));

  }.bind(this);

  this.loadComplete = function(animationData) {
    this.animationData = animationData;
    expand = new AnimationCanvas(animationData, this.target, moduleLoaded.bind(this), this.options);
  };

  function moduleLoaded(stage) {
    //console.log('ModuleLoader: moduleLoaded');
    var moduleInstance = new this.module(stage, this.animationData);
    this.callback(moduleInstance);
  }
}

module.exports = ModuleLoader;
