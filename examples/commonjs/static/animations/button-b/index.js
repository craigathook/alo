(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 30,
	color: "#CCCCCC",
	manifest: []
};



// symbols:



(lib.mc_over = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AqfKgQkXkWAAmKQAAmJEXkWQEWkXGJAAQGKAAEWEXQEXEWAAGJQAAGKkXEWQkWEXmKAAQmJAAkWkXgApspsQkBECAAFqQAAFrEBECQECEBFqAAQFrAAECkBQEBkCAAlrQAAlqkBkCQkCkBlrAAIAAAAQlqAAkCEBgAFiGNIAAjhQAAhpArkXIAmAAQArETAABsIAADigAg6GNIAAjhQAAhpArkXIAlAAQArETAABsIAADigAnYGNIAAjhQABhpArkXIAmAAQArETAABsIAADigAFikjQgYgZAAghQAAgjAYgZQAYgYAjAAQAhAAAYAYQAZAZAAAjQAAAhgZAZQgYAYghAAQgjAAgYgYgAg6kjQgYgZAAghQAAgjAYgZQAZgYAhAAQAhAAAYAYQAYAZABAjQgBAhgYAZQgYAYghAAQghAAgZgYgAnXkjQgYgZAAghQAAgjAYgZQAYgYAjAAQAhAAAYAYQAZAZAAAjQAAAhgZAZQgYAYghAAQgjAAgYgYg");
	this.shape.setTransform(91.5,91.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.6,190.3,190.3);


(lib.mc_a = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AqfKgQkXkWAAmKQAAmJEXkWQEWkXGJAAQGKAAEWEXQEXEWAAGJQAAGKkXEWQkWEXmKAAQmJAAkWkXgApspsQkBECAAFqQAAFrEBECQECEBFqAAQFrAAECkBQEBkCAAlrQAAlqkBkCQkCkBlrAAIAAAAQlqAAkCEBgAjlGYIAAtYQCcgIBFAAQB+AABFA3QBGA3AABlQAAA9gsAwQgtAyg2AMQBmAZAvA2QAuA6AABhQAABxhTBEQhSBDiGAAgAhwgRIAAFGQA8AFAgABQBtAAAzgqQAygqAAhaQAAhUgwgnQgxgmhuAAgAhwljIAAD3QAlADA2ABQClgBAAiHQAAh2iXAAQg6AAgvADg");
	this.shape.setTransform(91.5,91.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.6,-3.6,190.3,190.3);


(lib.hit = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AXSAAQAAJpm1G0Qm0G1ppAAQpoAAm1m1Qm0m0AAppQAApoG0m1QG1m0JoAAQJpAAG0G0QG1G1AAJog");
	this.shape.setTransform(150,150);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.247)").s().p("AwcQdQm1m0AAppQAApoG1m1QG0mzJogBQJpABG0GzQG1G1gBJoQABJpm1G0Qm0G0ppAAQpoAAm0m0g");
	this.shape_1.setTransform(150,150);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{over:1,out:23});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(22).call(this.frame_22).wait(23));

	// hit
	this.hitSquare = new lib.hit();
	this.hitSquare.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.hitSquare).wait(45));

	// mc
	this.instance = new lib.mc_over();
	this.instance.setTransform(150,150,1,1,0,0,0,91.5,91.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:-1.6,alpha:0.009},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-8,alpha:0.045},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-23.9,alpha:0.133},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:-53.4,alpha:0.297},0).wait(1).to({scaleX:1.27,scaleY:1.27,rotation:-83.5,alpha:0.464},0).wait(1).to({scaleX:1.34,scaleY:1.34,rotation:-105.3,alpha:0.585},0).wait(1).to({scaleX:1.39,scaleY:1.39,rotation:-121.2,alpha:0.673},0).wait(1).to({scaleX:1.43,scaleY:1.43,rotation:-133.2,alpha:0.74},0).wait(1).to({scaleX:1.46,scaleY:1.46,rotation:-142.7,alpha:0.793},0).wait(1).to({scaleX:1.48,scaleY:1.48,rotation:-150.4,alpha:0.835},0).wait(1).to({scaleX:1.5,scaleY:1.5,rotation:-156.6,alpha:0.87},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:-161.7,alpha:0.898},0).wait(1).to({scaleX:1.53,scaleY:1.53,rotation:-165.9,alpha:0.922},0).wait(1).to({scaleX:1.54,scaleY:1.54,rotation:-169.4,alpha:0.941},0).wait(1).to({scaleX:1.55,scaleY:1.55,rotation:-172.2,alpha:0.957},0).wait(1).to({scaleX:1.56,scaleY:1.56,rotation:-174.5,alpha:0.97},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:-176.3,alpha:0.98},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:-177.7,alpha:0.987},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:-178.8,alpha:0.993},0).wait(1).to({scaleX:1.58,scaleY:1.58,rotation:-179.5,alpha:0.997},0).wait(1).to({scaleX:1.58,scaleY:1.58,rotation:-179.9,alpha:0.999},0).wait(1).to({rotation:-180,alpha:1},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:-181.6,alpha:0.991},0).wait(1).to({scaleX:1.55,scaleY:1.55,rotation:-188,alpha:0.955},0).wait(1).to({scaleX:1.5,scaleY:1.5,rotation:-203.9,alpha:0.867},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:-233.4,alpha:0.703},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:-263.5,alpha:0.536},0).wait(1).to({scaleX:1.24,scaleY:1.24,rotation:-285.3,alpha:0.415},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:-301.2,alpha:0.327},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:-313.2,alpha:0.26},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:-322.7,alpha:0.207},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-330.4,alpha:0.165},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-336.6,alpha:0.13},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:-341.7,alpha:0.102},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-345.9,alpha:0.078},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-349.4,alpha:0.059},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-352.2,alpha:0.043},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-354.5,alpha:0.03},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-356.3,alpha:0.02},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-357.7,alpha:0.013},0).wait(1).to({scaleX:1,scaleY:1,rotation:-358.8,alpha:0.007},0).wait(1).to({scaleX:1,scaleY:1,rotation:-359.5,alpha:0.003},0).wait(1).to({scaleX:1,scaleY:1,rotation:-359.9,alpha:0.001},0).wait(1).to({rotation:-360,alpha:0},0).wait(1));

	// mc
	this.instance_1 = new lib.mc_a();
	this.instance_1.setTransform(150,150,1,1,0,0,0,91.5,91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1,scaleY:1,rotation:-1.6,alpha:0.991},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-8,alpha:0.955},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-23.9,alpha:0.867},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:-53.4,alpha:0.703},0).wait(1).to({scaleX:1.27,scaleY:1.27,rotation:-83.5,alpha:0.536},0).wait(1).to({scaleX:1.34,scaleY:1.34,rotation:-105.3,alpha:0.415},0).wait(1).to({scaleX:1.39,scaleY:1.39,rotation:-121.2,alpha:0.327},0).wait(1).to({scaleX:1.43,scaleY:1.43,rotation:-133.2,alpha:0.26},0).wait(1).to({scaleX:1.46,scaleY:1.46,rotation:-142.7,alpha:0.207},0).wait(1).to({scaleX:1.48,scaleY:1.48,rotation:-150.4,alpha:0.165},0).wait(1).to({scaleX:1.5,scaleY:1.5,rotation:-156.6,alpha:0.13},0).wait(1).to({scaleX:1.52,scaleY:1.52,rotation:-161.7,alpha:0.102},0).wait(1).to({scaleX:1.53,scaleY:1.53,rotation:-165.9,alpha:0.078},0).wait(1).to({scaleX:1.54,scaleY:1.54,rotation:-169.4,alpha:0.059},0).wait(1).to({scaleX:1.55,scaleY:1.55,rotation:-172.2,alpha:0.043},0).wait(1).to({scaleX:1.56,scaleY:1.56,rotation:-174.5,alpha:0.03},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:-176.3,alpha:0.02},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:-177.7,alpha:0.013},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:-178.8,alpha:0.007},0).wait(1).to({scaleX:1.58,scaleY:1.58,rotation:-179.5,alpha:0.003},0).wait(1).to({scaleX:1.58,scaleY:1.58,rotation:-179.9,alpha:0.001},0).wait(1).to({rotation:-180,alpha:0},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:-181.6,alpha:0.009},0).wait(1).to({scaleX:1.55,scaleY:1.55,rotation:-188,alpha:0.045},0).wait(1).to({scaleX:1.5,scaleY:1.5,rotation:-203.9,alpha:0.133},0).wait(1).to({scaleX:1.41,scaleY:1.41,rotation:-233.4,alpha:0.297},0).wait(1).to({scaleX:1.31,scaleY:1.31,rotation:-263.5,alpha:0.464},0).wait(1).to({scaleX:1.24,scaleY:1.24,rotation:-285.3,alpha:0.585},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:-301.2,alpha:0.673},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:-313.2,alpha:0.74},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:-322.7,alpha:0.793},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-330.4,alpha:0.835},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-336.6,alpha:0.87},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:-341.7,alpha:0.898},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-345.9,alpha:0.922},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-349.4,alpha:0.941},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-352.2,alpha:0.957},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-354.5,alpha:0.97},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-356.3,alpha:0.98},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-357.7,alpha:0.987},0).wait(1).to({scaleX:1,scaleY:1,rotation:-358.8,alpha:0.993},0).wait(1).to({scaleX:1,scaleY:1,rotation:-359.5,alpha:0.997},0).wait(1).to({scaleX:1,scaleY:1,rotation:-359.9,alpha:0.999},0).wait(1).to({rotation:-360,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150.5,150.5,299,299);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;