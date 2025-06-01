// easeInCubic(t) = t^3
// easeOutCubic(t) = 1 - (1 - t)^3
// https://www.desmos.com/Calculator/xdcpjko3t2
export const easeInOutCubic = (t: number) => {
  return t < 0.5 ? 4 * Math.pow(t, 3) : 1 - 4 * Math.pow(1 - t, 3);
};
