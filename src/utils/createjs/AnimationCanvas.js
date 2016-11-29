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

  var options = mergeOptions(defaults, options || {});

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
      this.canvas.style.backgroundColor = lib.properties.color;
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
