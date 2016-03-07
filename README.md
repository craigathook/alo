# Alo - Adobe Animate CreateJS Export Loader

Alo helps with loading exported CreateJS from Adobe Animate and Adobe Flash. It also makes it possible to load multiple Animate/Flash animations on screen at the same time, with completely separate canvas elements.

# Usage

Alo requires the animations be exported as 'index.js', and be contained in their own folder. This helps keep image and other assets from conflicting between animations. For example, a bird animation containing a bird animation should be structured like this:

    /bird/images/bird.png - image used in animation
    /bird/index.fla - source animate/flash file
    /bird/index.js - exported CreateJS code

From here you would load the your animation like this:

    alo.load('/bird', '#birdContainer', function(root){ root.gotoAndPlay('flap') });

# Alo Module

Alo Modules are just javascript Functions/Classes with some very basic additional suggested structure. Alo Modules are instanciated _before_ the stage has rendered. This is _before_ code on the timeline has ran. So it's safe to add features animators can use on the timeline, such as triggering particle effects. Here's an example of the most basic Alo Module:

    function BirdModule(context, data) {

      var root = context; // root of the display list. same as "scene 1".
      var lib = data.lib; // reference to the library of MovieClips for this animation

      root.hitSquare.addEventListener('click', function() { // referencing the hitSquare movieclip in our animation stage, adding a click event listener.
        root.gotoAndPlay('flap');
      });
    }

From here you would load the your animation like this:

    module.load('/bird', BirdModule, onLoadComplete, {
      target: birdContainerDiv,
      transparent: true
    });

# Methods/Classes

Alo has these methods and classes:

 > **alo.Canvas** (_AnimationCanvas_) - When instanced, it creates a CreateJS canvas in the given target with the given CreateJS animation data.
 
 > **alo.Loader** (_AnimationLoader_) - Loads the given animation with a callback that returns the root of the given animation's display list.
 
 > **alo.module** (_ModuleLoader_) - Instantiates a CommonJS module with a reference to the root of the given animation's display list. The module is instantiated BEFORE any frame is rendered, so methods in this module can be accessible on the animation's timeline.

# Requirements

From the CreateJS suite: 
 * EaselJS
 * TweenJS
 * PreloadJS