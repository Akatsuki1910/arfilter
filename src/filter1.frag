// deuteranopes
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
  mat3 a=mat3(.0809444,-.130504,.116721,-.0102485,.0540193,-.113615,-.000365297,-.00412161,.693511);
  mat3 b=mat3(1.,0.,0.,.494207,0.,1.24827,0.,0.,1.);
  mat3 c=mat3(17.8824,43.5161,4.11935,3.45565,27.1554,3.86714,.0299566,.184309,1.46709);
  vec3 d=.957237*color.rgb+.0213814;
  gl_FragColor=vec4(vec3(d*c*b*a),1.);
}