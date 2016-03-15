# Alo - Adobe Animate CreateJS Export Loader

Alo helps with loading exported CreateJS from Adobe Animate and Adobe Flash. It also makes it possible to load multiple Animate/Flash animations on screen at the same time, with completely separate canvas elements.

# Usage

Alo requires the animations be exported as 'index.js', and be contained in their own folder. This helps keep image and other assets from conflicting between animations. For example, a bird animation containing a bird animation should be structured like this:

    /bird/images/bird.png - image used in animation
    /bird/index.fla - source animate/flash file
    /bird/index.js - exported CreateJS code

From here you would load the your animation like this:

    alo.load('/bird', '#birdContainer', function(stage){ stage.root.gotoAndPlay('flap') });

# Methods

**alo.load** ( animationUrl, targetElement, callback, [options] )
 > Loads the given animation. When the animation is completely loaded, the callback is called passing a reference to the stage Container of the given animation's display list.

# Options

Alo methods accept an optional options object. The options are:

**transparent** (default: FALSE) _Boolean_
 > If TRUE, this sets the background of the canvas element to transparent. 

**fps** (default: FLA fps) _Number_
 > If set, this overwrites the FPS set in the FLA of the animation.

# Modules

Alo callbacks are called after the display list has been fully constructed but _before_ rendering. This is before code on the timeline has ran. So it's safe to add features animations can use on the timeline at this point, such as triggering particle effects. Here's an example of what a basic module using Alo could look like:

    function BirdModule(stage) {

      var root = stage.root; // root of the display list. same as "scene 1".
      var lib = stage.lib; // reference to the library of MovieClips for this animation

      var numberStars = 20;

      root.hitSquare.addEventListener('click', function() { // referencing the hitSquare MovieClip in our animation stage, adding a click event listener.
        root.gotoAndPlay('flap');
      });

      root.generateStars = function() { // attaching this to the "root" MovieClip alows you to be able to call this method from the root timeline.
        while(numberStars--) {
          var star = new lib.Star(); // assuming we have a Star MovieClip, we can instanciate a new instance of the MovieClip from the library (stage.lib);
          star.x = stage.width * Math.random();
          star.y = stage.height * Math.random();

          root.addChild(star);
        }
      }

    }

# Stage Object

The Stage object contains some useful read-only properties:

**lib** _Object_
 > An object containing references to all MovieClips used in the animation. This is similar to the library in the Animate/Flash IDE, but excludes things that arent used in the final animation.

**root** _Container_
 > The root MovieClip of the animation.

**width** _Number_
 > The width of the animation.

**height** _Number_
 > The height of the animation.

**fps** _Number_
 > The frames per second of the animation.

**backgroundColor** _Hexadecimal_
 > The background color of the animation.

# Requirements

From the CreateJS suite: 
 * EaselJS
 * TweenJS
 * PreloadJS