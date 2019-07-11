var toString = Object.prototype.toString;

export const isArray = function isArray(val) {
  return toString.call(val) === '[object Array]';
}
