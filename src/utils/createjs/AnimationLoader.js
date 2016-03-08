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

  function canvasLoaded(root) {
    this.callback(root);
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
