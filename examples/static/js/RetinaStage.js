// Norm McGarry CreateJS Retina Adapter

var RetinaStage = function(canvas, devicePixelRatio) {
  createjs.Stage.call(this, canvas);
  this._stage = this;
  this.snapToPixelEnabled = false;

  this.rawWidth = this.canvas.width;
  this.rawHeight = this.canvas.height;

  this.devicePixelRatio = devicePixelRatio;
  createjs.Touch.enable(this);
};
RetinaStage.prototype = Object.create(createjs.Stage.prototype);

RetinaStage.prototype._devicePixelRatio = 1;

Object.defineProperty(RetinaStage.prototype, "devicePixelRatio", {
  enumerable: true,
  configurable: true,
  set: function(devicePixelRatio) {
    this._devicePixelRatio = devicePixelRatio;
    this.calibrateDevicePixelRatioScaling(this.rawWidth, this.rawHeight);
  },
  get: function() {
    return this._devicePixelRatio;
  }
});

Object.defineProperty(RetinaStage.prototype, "stageWidth", {
  enumerable: true,
  configurable: true,
  get: function() {
    return this.canvas.width / this.devicePixelRatio;
  }
});

Object.defineProperty(RetinaStage.prototype, "stageHeight", {
  enumerable: true,
  configurable: true,
  get: function() {
    return this.canvas.height / this.devicePixelRatio;
  }
});

/**
Creates support for retina displays on canvas.
*/
RetinaStage.prototype.calibrateDevicePixelRatioScaling = function(width, height) {
  if (this.devicePixelRatio !== 1) {
    // reset the canvas width and height with window.devicePixelRatio applied
    this.canvas.setAttribute('width', Math.round(width * this.devicePixelRatio));
    this.canvas.setAttribute('height', Math.round( height * this.devicePixelRatio));

    // force the canvas back to the original size using css
    this.canvas.style.width = width+'px';
    this.canvas.style.height = height+'px';

    // set CreateJS to render scaled
    this.scaleX = this.scaleY = this.devicePixelRatio;
  }
};

RetinaStage.prototype.resize = function(width, height) {
  this.rawWidth = width;
  this.rawHeight = height;
  this.calibrateDevicePixelRatioScaling(width, height);
  this.dispatchEvent('resize');
};

createjs.DisplayObject.prototype.stage = null;
createjs.DisplayObject.prototype._stage = null;
Object.defineProperty(createjs.Container.prototype, "stage", {
  enumerable: true,
  configurable: true,
  get: function() {
    return this._stage;
  },
  set: function(stage) {
    var oldstage = this._stage;
    this._stage = stage;
    for(var i = 0; i < this.children.length; i++) {
      this.children[i].stage = stage;
    }
    if(stage == null) {
      this.dispatchEvent("removedfromstage");
    }
    else if(oldstage !== stage) {
      this.dispatchEvent("addedtostage");
    }
  }
});

createjs.DisplayObject.prototype.cache = function(x, y, width, height, scale) {
        // draw to canvas.
        scale = scale||2;
        if (!this.cacheCanvas) { this.cacheCanvas = createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"); }
        this._cacheWidth = width;
        this._cacheHeight = height;
        this._cacheOffsetX = x;
        this._cacheOffsetY = y;
        this._cacheScale = scale;
        this.updateCache();
    };

createjs.Container.prototype._addChild = createjs.Container.prototype.addChild;
createjs.Container.prototype.addChild = function(child) {
  createjs.Container.prototype._addChild.apply(this, arguments);
    var l = arguments.length;
    if (l > 1) {
        for (var i=0; i<l; i++) { arguments[i].stage = this.stage; }
        return arguments[l-1];
    }
  child.stage = this.stage;
  return child;
};
createjs.Container.prototype._addChildAt = createjs.Container.prototype.addChildAt;
createjs.Container.prototype.addChildAt = function(child) {
  createjs.Container.prototype._addChildAt.apply(this, arguments);
  var l = arguments.length;
  if (l > 1) {
    for (var i=0; i<l; i++) { arguments[i].stage = this.stage; }
    return arguments[l-1];
  }
  child.stage = this.stage;
  return child;
};

createjs.Container.prototype._removeChild = createjs.Container.prototype.removeChild;
createjs.Container.prototype.removeChild = function(child) {
  createjs.Container.prototype._removeChild.apply(this, arguments);
  var l = arguments.length;
  if (l > 1) {
    for (var i=0; i<l; i++) { arguments[i].stage = null; }
    return arguments[l-1];
  }
  child.stage = null;
  return child;
};

createjs.Container.prototype._removeChildAt = createjs.Container.prototype.removeChildAt;
createjs.Container.prototype.removeChildAt = function(child) {
  createjs.Container.prototype._removeChildAt.apply(this, arguments);
  var l = arguments.length;
  if (l > 1) {
    for (var i=0; i<l; i++) { arguments[i].stage = null; }
    return arguments[l-1];
  }
  child.stage = null;
  return child;
};


createjs.ColorFilter.canHandlePixelManipulation = function() {
  if(createjs.ColorFilter._canHandlePixelManipulation) {
    return createjs.ColorFilter._canHandlePixelManipulation;
  }
  function canHandleTrPxMan() {
      var c, s1,s2;
      c = document.createElement('canvas');
      c.width = 2;
      c.height = 2;
      c = c.getContext("2d");
      c.fillStyle = "rgba(10,20,30,0.5)";
      c.fillRect(0,0,1,1);
      s1 = c.getImageData(0,0,1,1);
      c.putImageData(s1, 1, 0);
      s2 = c.getImageData(1,0,1,1);
      return (s2.data[0] === s1.data[0] && s2.data[1] === s1.data[1] && s2.data[2] === s1.data[2] && s2.data[3] === s1.data[3]);
  }
  createjs.ColorFilter._canHandlePixelManipulation = canHandleTrPxMan();
  return createjs.ColorFilter._canHandlePixelManipulation;
};
createjs.ColorFilter.canHandlePixelManipulation();

createjs.ColorFilter.prototype.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
  targetCtx = targetCtx || ctx;
  if (targetX == null) { targetX = x; }
  if (targetY == null) { targetY = y; }
  var imageData;
  try {
    imageData = ctx.getImageData(x, y, width, height);
  }
  catch(e) {
    //if (!this.suppressCrossDomainErrors) throw new Error("unable to access local image data: " + e);
    return false;
  }
  var data = imageData.data;
  var l = data.length;

  var canhandle = createjs.ColorFilter._canHandlePixelManipulation;
  var alpha = null;
  for (var i=0; i<l; i+=4) {

    if(canhandle){
      data[i] = data[i]*this.redMultiplier+this.redOffset ;
      data[i+1] = data[i+1]*this.greenMultiplier+this.greenOffset;
      data[i+2] = data[i+2]*this.blueMultiplier+this.blueOffset;
      data[i+3] = data[i+3]*this.alphaMultiplier+this.alphaOffset;
    }
    else{
      data[i] = data[i]*this.redMultiplier+this.redOffset ;
      data[i+1] = data[i+1]*this.greenMultiplier+this.greenOffset;
      data[i+2] = data[i+2]*this.blueMultiplier+this.blueOffset;
      data[i+3] = data[i+3]*this.alphaMultiplier+this.alphaOffset;

      alpha =  255/data[i+3];

      data[i] /= alpha;
      data[i+1] /= alpha;
      data[i+2] /= alpha;
    }
  }

  targetCtx.putImageData(imageData, 0, 0);
  return true;
};

