// nomal
precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D uTex;
uniform float time;
uniform float rand;

float random(vec2 st){
  return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

void main(void){
  vec2 vtc=vTextureCoord;
  vec4 color=texture2D(uTex,vtc);
  gl_FragColor=vec4(color);
}