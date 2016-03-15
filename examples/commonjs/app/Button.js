function Button(stage) {
  console.log('Button: instance');

  var root = stage.root;
  var lib = stage.lib;

  root.hitSquare.addEventListener('mouseover', function() {
    root.gotoAndPlay('over');
  });

  root.hitSquare.addEventListener('mouseout', function() {
    root.gotoAndPlay('out');
  });
}

module.exports = Button;
