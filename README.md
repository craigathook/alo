# Adobe Animate CreateJS Utilities

Utilities to help with handling exported CreateJS from Adobe Animate and Adobe Flash. Contains these components:

AnimationCanvas - When instanced, it creates a CreateJS canvas in the given target with the given CreateJS animation data.
AnimationLoader - Loads the given animation with a callback that returns the root of the given animation's display list.
ModuleLoader - Instantiates a CommonJS module with a reference to the root of the given animation's display list. The module is instantiated BEFORE any frame is rendered, so methods in this module can be accessible on the animation's timeline.