var Client = require("./client.js");
var Ui = require("./ui.js");
var Element = require("./elementShiv.js");

var Wenvr = function () {};

Wenvr.tools = Element; //For now

Wenvr.data = Client.settings.setup();

Wenvr.ui = Ui;

window.Wenvr = Wenvr;