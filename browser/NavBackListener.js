/**************** 主客内部的情况增加返回事件控制 *****************/
var hidden                      = "hidden",             //document state property name
    visibilityChange            = "visibilitychange",   //EventName
    visibilityChangeCallBackSet = {};                   //Callback function set

if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

// IOS qq, Android uc 浏览器触发visibilitychange事件
document.addEventListener(visibilityChange, function() {
    if (!document[hidden]) {
        for (var key in visibilityChangeCallBackSet) {
            visibilityChangeCallBackSet[key].constructor == Function && visibilityChangeCallBackSet[key].call(null);
        }
    }
}, false);

// safari, Android qq, Android uc 浏览器触发pagehide事件
window.addEventListener('pagehide', function() {
    setTimeout(function() {
        for (var key in visibilityChangeCallBackSet) {
            visibilityChangeCallBackSet[key].constructor == Function && visibilityChangeCallBackSet[key].call(null);
        }
    });
})

module.exports = {
    /*
    *   Add event listen with special name
    *   @param {String} name        ::event name
    *   @param {Function} callBack  ::event callback function
    * */
    addListener: function (name, callBack) {
        if (name && callBack.constructor == Function) {
            visibilityChangeCallBackSet[name] = callBack;
        }
    },
    /*
    *   Remove event listen with special name
    *   @param {String} name::event name
    * */
    removeListener: function (name) {
        if (name && visibilityChangeCallBackSet.hasOwnProperty(name)) {
            delete visibilityChangeCallBackSet[name];
        }
    }
}
