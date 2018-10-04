export const getUrlParam = (sUrl, sKey) => {
  var left= sUrl.indexOf("?") + 1
  var right= sUrl.lastIndexOf("#")
  var parasString = sUrl.slice(left, right)
  var paras = parasString.split('&');
  var parasjson = {}
  paras.forEach(function (value, index, arr) {
      var a = value.split('=');
      parasjson[a[0]] !== undefined ? parasjson[a[0]] = [].concat(parasjson[a[0]], a[1]) : parasjson[a[0]] = a[1];
  });

  let result = arguments[1] !== void 0 ? (parasjson[arguments[1]] || '') : parasjson;
  return result
}
export const getUrlParam2 = (sUrl, sKey)=>{
  var result, Oparam = {};
  sUrl.replace(/[\?&]?(\w+)=(\w+)/g, function ($0, $1, $2){
      Oparam[$1] === void 0 ? Oparam[$1] = $2 : Oparam[$1] = [].concat(Oparam[$1], $2);
  });
  sKey === void 0 || sKey === '' ? result = Oparam : result = Oparam[sKey] || '';
  return result;
}
