(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var AnimationLoader = require('./utils/createjs/AnimationLoader');
var AnimationCanvas = require('./utils/createjs/AnimationCanvas');

function Alo() {

  var loader = new AnimationLoader();

  this.load = loader.load;
  this.Canvas = AnimationCanvas;

}

window.alo = new Alo();
},{"./utils/createjs/AnimationCanvas":2,"./utils/createjs/AnimationLoader":3}],2:[function(require,module,exports){
function AnimationCanvas(animation, target, callback, options) {
  //console.log('AnimationCanvas: instance');
  this.canvas;
  this.stage;
  this.exportRoot;
  this.loadError;

  var defaults = {
    transparent: false,
    fps: null,
    onTick: null
  };

  var options = mergeOptions(defaults, options);

  this.target = target;
  this.transparent = options.transparent;
  this.onTick = options.onTick;
  this.onLoaded = callback;

  var loader = new createjs.LoadQueue(false);
  var lib;
  var images = animation.images;
  var ss;
  var ssUrl = animation.ssUrl;

  if(animation) {
    lib = animation.lib;
    //images = animation.img;
    ss = animation.ss;
  }

  this.init = function() {
    //console.log('AnimationCanvas: init()');
    createjs.MotionGuidePlugin.install();

    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'canvas');
    this.canvas.setAttribute('width', lib.properties.width);
    this.canvas.setAttribute('height', lib.properties.height);
    if(!this.transparent) {
      this.canvas.setAttribute('style', 'style="background-color:"' + lib.properties.color);
    }

    loader.addEventListener('fileload', this.handleFileLoad);
    loader.addEventListener('complete', this.handleComplete);
    loader.addEventListener('error', this.handleError);

    if (lib.properties.manifest.length == 0) {
        //console.log('AnimationCanvas: Loading spritesheet.');
        loader.loadFile({src: ssUrl+'/index_atlas_.json', type: 'spritesheet', id: 'index_atlas_'}, true);
    } else {
      //console.log('AnimationCanvas: Loading images.');
      loader.loadManifest(lib.properties.manifest);
    }
  }.bind(this);

  this.handleFileLoad = function(evt) {
    //console.log('AnimationCanvas: handleFileLoad()',evt.item.id);
    if (evt.item.type == 'image') {
      images[evt.item.id] = evt.result;
      //window.img[evt.item.id] = evt.result;
    }
  }.bind(this);

  this.handleError = function (err) {
    //console.log('AnimationCanvas: Error loading images.');
    if(err.data.src == 'images/index_atlas_.json') {
      //console.log('AnimationCanvas: No images found.');
    }
    loader.removeEventListener('complete', this.handleComplete);
    this.handleComplete(null);
    
  }.bind(this);

  this.handleComplete = function (evt) {
    //console.log('AnimationCanvas: handleComplete()');
    images = {};
    if(evt) {
      var queue = evt.target;
      ss['index_atlas_'] = queue.getResult('index_atlas_');
    }

    this.exportRoot = new lib.index();

    window.exportRoot = this.exportRoot;

    if(this.target) {
      this.target.appendChild(this.canvas);
    } else {
      document.body.appendChild(this.canvas);
    }

    devicePixelRatio = window.devicePixelRatio || 1;

    this.pixelRatio = devicePixelRatio;

    if (devicePixelRatio < 1) {
      devicePixelRatio = 1;
    }

    if(window.hasOwnProperty('RetinaStage')) {
      this.stage = new RetinaStage(this.canvas, devicePixelRatio);
    } else {
      this.stage = new createjs.Stage(this.canvas);
    }

    this.stage.addChild(this.exportRoot);
    this.stage.enableMouseOver(24);
    createjs.Touch.enable(this.stage);

    // hook up references
    this.stage.root = this.stage.children[0];
    this.stage.lib = lib;
    this.stage.container = this.target;
    this.stage.width = lib.properties.width;
    this.stage.height = lib.properties.height;
    this.stage.backgroundColor = lib.properties.color;
    this.stage.fps = lib.properties.fps;
    this.onLoaded(this.stage);
    this.stage.update();

    createjs.Ticker.setFPS( options.fps || lib.properties.fps);
    //createjs.Ticker.setFPS(60);
    if(this.onTick) {
      createjs.Ticker.addEventListener('tick', this.onTick);
    }
    createjs.Ticker.addEventListener('tick', this.stage);

  }.bind(this);

  function mergeOptions(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
  }

  this.init();
}

module.exports = AnimationCanvas;

},{}],3:[function(require,module,exports){
var AnimationCanvas = require('./AnimationCanvas');

function AnimationLoader() {
  //console.log('AnimationLoader: instance');

  var loadManifest = [];
  var loadIndex = 0;
  var loadScript;

  if(window.hasOwnProperty('Enabler')) {
    loadScript = Enabler.loadScript;
  } else {
    loadScript = scriptLoader;
  }

  this.animationLoaded = function(e) {
    //console.log('AnimationLoader: animationLoaded');
    var animationData = {};
    animationData.lib = window.lib;
    animationData.images = window.images;
    animationData.img = {};
    animationData.ss = window.ss;
    animationData.ssUrl = this.name+'/images';

    window.lib = null;
    window.ss = null;

    //console.log(animationData);

    // prepend the animation name to the image urls
    if(animationData.lib.properties.manifest) {
      for(var i in animationData.lib.properties.manifest) {
        animationData.lib.properties.manifest[i].src = this.name + '/' + animationData.lib.properties.manifest[i].src;
      }
    }
    /*
    if(animationData.ss) {
      for(var i in animationData.ss) {
        console.log('ss',animationData.ss, animationData.ss[i]);
        animationData.ss[i].src = this.name + '/' + animationData.ss[i].src;
      }
    }
    */

    var target = null;
    if(this.target) {
      if(typeof(this.target) == 'string') {
        target = document.querySelector(this.target);
      } else {
        target = this.target;
      }
      this.options.target = target;
      var newCanvas = new AnimationCanvas(animationData, target, canvasLoaded.bind(this), this.options);
    } else {
      this.callback(animationData);
    }
  };

  this.load = function(animationName, _target, _callback, _options) {
    var callback = null;
    var target = null;
    var options = _options;

    if(typeof(_target) == 'function') {
      callback = _target;
    } else {
      target = _target;
      callback = _callback;
    }

    var loadData = {
      name: animationName,
      callback: callback,
      target: target,
      options: options
    };

    loadScript(animationName + '/index.js', this.animationLoaded.bind(loadData));
  }.bind(this);

  function canvasLoaded(stage) {
    this.callback(stage);
  };

  function scriptLoader(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
  } /**/
}

module.exports = AnimationLoader;

},{"./AnimationCanvas":2}]},{},[1])


//# sourceMappingURL=alo.js.map
