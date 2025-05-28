/*
  shader for the background
*/

// calculation accuracy for WebGL render
#ifdef GL_ES
  precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_baseColor;

/*
  gradient for the background
  works by shifting vectors multiplied by cos
*/
void colorVector3ShiftGradient(
  inout vec3 trip,
  float warpsScale,
  float waveMultiplicator,
  float waveSize,
  float time
) {
  vec3 permutationVectorCos = trip.yzx + (time * .25);

  // wave first
  trip.xyz += warpsScale 
    * ((waveSize * waveMultiplicator) + .1)
    * cos(3. * permutationVectorCos);
  
  // wave second
  trip.xyz += warpsScale 
    * ((waveSize * waveMultiplicator) + .05) 
    * cos(11. * permutationVectorCos);

  // wave tertius
  trip.xyz += warpsScale 
    * ((waveSize * waveMultiplicator) + .025)
    * cos(17. * permutationVectorCos);
}

void main()
{
  const float speedAnimation = .1;
  const float ratioVatiation = 0.05;
  const float waveStartGradient = .01;
  const float waveMultiplicatorGradient = 2.;
  const float warpsScaleGradient = 1.5;
  const float mixRatioFilter = 0.3;
  const float mixBrightnessFolter = 1.;
  const float alphaFragColor = 1.;

  float t = u_time * speedAnimation;
  vec3 baseColor = u_baseColor;
  vec3 variationColors = vec3(
    ratioVatiation * cos(t),
    ratioVatiation * cos(t + 2.0),
    ratioVatiation * cos(t + 3.0)
  );

  vec3 color = baseColor + variationColors;

  colorVector3ShiftGradient(
    color,
    warpsScaleGradient,
    waveStartGradient,
    waveMultiplicatorGradient,
    u_time
  );

  color = mix(color, vec3(mixBrightnessFolter), mixRatioFilter);

  gl_FragColor = vec4(color, alphaFragColor);
}
