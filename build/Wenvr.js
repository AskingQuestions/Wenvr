(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Client = require("./client.js");
var Ui = require("./ui.js");
var Element = require("./elementShiv.js");

var Wenvr = function () {};

Wenvr.tools = Element; //For now

Wenvr.data = Client.settings.setup();

Wenvr.ui = Ui;

window.Wenvr = Wenvr;
},{"./client.js":2,"./elementShiv.js":3,"./ui.js":4}],2:[function(require,module,exports){
module.exports = {
    settings: {
        setup: function () {
            if (!("wenvr" in localStorage))
                localStorage.wenvr = {
                    version: "1.0.0",
                    profiles: {},
                    index: 0,
                    defaultProfile: false
                };
            return localStorage.wenvr;
        },
        get: function (profile) {
            if (!("profile" in Wenvr.data.profiles))
                return false;
            return Wenvr.data.profiles[profile];
        },
        create: function (profile) {
            Wenvr.data.index++;
            Wenvr.data.profiles[profile] = {name: profile, id: Wenvr.data.index, settings: {}};
        }
    }
};
},{}],3:[function(require,module,exports){
module.exports = {
    getElement: function (value) { //Find an element with a string, jQuery object, array, or html element.
        var rtn = false;
        if (typeof value == "string") {
            rtn = document.querySelector(value);
        }else if (typeof value == "object") {
            if (value instanceof (jQuery || Array)) {
                rtn = value[0];
            }else{
                rtn = value;
            }
        }
        return rtn;
    }
};
},{}],4:[function(require,module,exports){
module.exports = {
    loadFullClient: function (e) {
        e = Wenvr.tools.getElement(e);
        e.innerHTML = "Loaded";
    }
};
},{}]},{},[1,2,3,4]);
