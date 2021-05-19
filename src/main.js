import { RenderSettings } from "rhino3dm";
import { Camera, Group, Scene } from "../vendor/three/build/three.module.js";

// import {
//   Camera,
//   Group,
//   Scene,
// } from "https://unpkg.com/three@0.117.0/build/three.module.js";

import { OrbitControls } from "../vendor/three/examples/jsm/controls/OrbitControls.js";
// import { OrbitControls } from "https://unpkg.com/three@0.117.0/examples/jsm/controls/OrbitControls.js";

const canvas = document.getElementById("canvas");
const sceneManager = new SceneManager(canvas);

bindEventListeners();

render();

function bindEventListeners() {
  window.onresize = resizeCanvas;
  resizeCanvas();
}

function resizeCanvas() {
  canvas.style.width = "100%";
  canvas.style.height = "100%";

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  sceneManager.onWindowResize();
}

function render() {
  requestAnimationFrame(render);
  sceneManager.update();
}
