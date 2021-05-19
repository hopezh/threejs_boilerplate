# threejs_boilerplate

A boilerplate for three.js project

---

## References

1. [How to organize your Three.js code in a cleaner way](https://pierfrancesco-soffritti.medium.com/how-to-organize-the-structure-of-a-three-js-project-77649f58fa3f)

> The goal of this solution is to separate as much as possible each component of the application. Different parts of the application shouldn’t know much about each other and, when possible, nothing at all.


- Web-oriented code (relative to the DOM, events, etc), shouldn’t know anything about the Three.js world and, vice versa, Three.js code shouldn’t know anything about the DOM.

- The Three.js side of the app should be modularized, it should be the composition of a bunch of **independent components**.

> An **_high level component (or container)_** is used as the entry point of the Three.js application, it is responsible for **initializing and managing the scene**, but it doesn’t know anything about the actual content of the scene. The only thing it knows is that it contains a bunch of other components that should be updated at every frame.

> The **main** is the entry point to the Javascript side of the application, it has access to the DOM and contains the SceneManager. The main has three basic responsibilities:


- create the SceneManager, while passing a canvas to it (so that SceneManager won’t have to meddle with the DOM).

- attach listeners to the DOM events we care about (such as windowresize or mousemove).

- start the render loop, by calling requestAnimationFrame().

> The **SceneManager** is responsible for handling the Three.js side of the app, which is completely hidden from the main. It knows nothing about the DOM. The SceneManager is our higher level component.


2. [The Structure of a three.js App](https://discoverthreejs.com/book/first-steps/app-structure/)

> `main.js` is the entry point for our JavaScript application, and we’ll fill it up in the next chapter. The `type="module"` attribute tells the browser we’re writing JavaScript modules. If this is new to you, head over to **[A.4: JavaScript Modules](https://discoverthreejs.com/book/appendix/javascript-modules/)**, which has everything you need to know about JavaScript modules to follow the code in this book.
