function ButtonB(context, data) {
  console.log('ButtonB: instance');

  var root = context;
  var lib = data.lib;

  this.root = context;
  this.parent = null;

  this.init = function(parent) {
    console.log('ButtonB: init');
    this.parent = parent;
  }.bind(this);

  root.hitSquare.addEventListener('mouseover', function() {
    root.gotoAndPlay('over');
  });

  root.hitSquare.addEventListener('mouseout', function() {
    root.gotoAndPlay('out');
  });
}

module.exports = ButtonB;
