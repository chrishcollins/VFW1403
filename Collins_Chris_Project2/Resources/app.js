Titanium.UI.setBackgroundColor('#000');
var mainWindow = Ti.UI.createWindow({
	title: "Artists",
});


var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow,
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED
});

var loadFile = require("rapartists");

navWindow.open();