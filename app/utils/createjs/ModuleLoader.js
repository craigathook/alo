var AnimationLoader = require('./createjs/AnimationLoader');
var AnimationCanvas = require('./createjs/AnimationCanvas');

var cjsLoader = new CreateJSLoader();

function ModuleLoader() {

  this.load = function(animationName, module, callback, options){
    var options = options || {};
    console.log('ModuleLoader: load:', animationName);
    var moduleData = {
      name: animationName,
      module: module,
      callback: callback,
      options: options,
      animationData: null
    }
    cjsLoader.load(animationName, this.loadComplete.bind(moduleData));
  }.bind(this);

  this.loadComplete = function(animationData){
    this.animationData = animationData;
    expand = new CreateJSCanvas(animationData, moduleLoaded.bind(this), this.options);
  }

  function moduleLoaded(stage){
    console.log('ModuleLoader: stageLoaded');
    var moduleInstance = new this.module(stage, this.animationData);
    this.callback(moduleInstance);
  }
}

module.exports = ModuleLoader;