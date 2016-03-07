function Button(context, data) {
  console.log('Button: instance');

  var root = context;
  var lib = data.lib;

  root.hitSquare.addEventListener('mouseover', function() {
    root.gotoAndPlay('over');
  });

  root.hitSquare.addEventListener('mouseout', function() {
    root.gotoAndPlay('out');
  });
}

module.exports = Button;
