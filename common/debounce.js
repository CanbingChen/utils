//防抖
function debounce(fn, wait) {
  var timeout = null;
  return function() {
      if(timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(fn, wait);
  }
}

//window.addEventListener('scroll', debounce(handle, 500));
