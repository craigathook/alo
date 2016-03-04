function ButtonA(context, data){
  console.log('ButtonA: instance');

  var root = context;
  var lib = data.lib;

  this.root = context;
  this.parent = null;

  this.init = function(parent) {
    console.log('ButtonA: init');
    this.parent = parent;
  }.bind(this);

  root.hitArea.addEventListener('mouseover', function(){
      root.gotoAndPlay('over');
    });

  root.hitArea.addEventListener('mouseout', function(){
    root.gotoAndPlay('out');
  });
  
}

module.exports = ButtonB;