
var mainWindow = Ti.UI.createWindow({
	title: "Artists",
});

mainWindow.backgroundColor = "black";

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var loadFile = require("rapartists");

navWindow.open();