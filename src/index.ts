import * as PIXI from "pixi.js";

import filter0 from "./filter0.frag";
import filter1 from "./filter1.frag";
import filter2 from "./filter2.frag";
import filter3 from "./filter3.frag";

const width = window.innerWidth;
const height = window.innerHeight;

const resolution = { w: width, h: height };

let video = document.createElement("video");
video.id = "video";
video.autoplay = true;

let media = navigator.mediaDevices
  .getUserMedia({
    audio: false,
    video: {
      width: { ideal: resolution.w },
      height: { ideal: resolution.h },
    },
  })
  .then(function (stream) {
    video.srcObject = stream;
  });

const stage = new PIXI.Container();
const renderer = PIXI.autoDetectRenderer({
  width: width,
  height: height,
  resolution: 1,
  antialias: true,
});
renderer.view.style.transform = "scaleX(-1)";
document.body.appendChild(renderer.view);
const mm = PIXI.Texture.from(video);
const img = new PIXI.Sprite(mm);
stage.addChild(img);
img.width = width;
img.height = height;
const uniforms = {
  time: 1.0,
  rand: 1.0,
};

let filtter = filter0;
switch (location.hash) {
  case "#1":
    filtter = filter1;
    break;
  case "#2":
    filtter = filter2;
    break;
  case "#3":
    filtter = filter3;
    break;
  default:
    break;
}

let myFilter = new PIXI.Filter(undefined, filtter, uniforms);
stage.filters = [myFilter];

let count = 0;
function _canvasUpdate() {
  myFilter.uniforms.time = count / 60;
  myFilter.uniforms.rand = Math.random();
  renderer.render(stage);
  requestAnimationFrame(_canvasUpdate);
}
_canvasUpdate();
