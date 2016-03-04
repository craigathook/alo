function AnimationLoader() {
  console.log('AnimationLoader: instance');

  var loadManifest = [];
  var loadIndex = 0;
  var loadScript;

  if(Enabler) {
    loadScript = Enabler.loadScript;
  } else {
    loadScript = scriptLoader;
  }

  this.animationLoaded = function(e) {
    console.log('AnimationLoader: animationLoaded');
    var animationData = {};
    animationData.lib = window.lib;
    animationData.images = window.images;
    animationData.img = {};
    animationData.ss = window.ss;

    window.lib = null;
    //window.images = null; 
    // this *isn't* done because a referemce to global images 
    // variable is passed into the createjs closure. nullifying 
    // this variable breaks that reference.
    window.ss = null;

    //console.log(animationData);

    // prepend the animation name to the image urls
    if(animationData.lib.properties.manifest) {
      for(var i in animationData.lib.properties.manifest) {
        animationData.lib.properties.manifest[i].src = this.name + '/' + animationData.lib.properties.manifest[i].src;
      }
    }

    this.callback(animationData);
  };

  this.load = function(animationName, callback) {
    var loadData = {
      name: animationName,
      callback: callback
    };

    loadScript(animationName + '/index.js', this.animationLoaded.bind(loadData));
  }.bind(this);

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
