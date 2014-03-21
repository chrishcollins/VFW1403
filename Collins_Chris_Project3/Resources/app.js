Ti.UI.setBackgroundColor("transparent");

//Create main window
var mainWindow = Ti.UI.createWindow({
	statusBarHidden:false,
	statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
	backgroundColor: "#fff",
	backgroundImage: "OtherImages/metal.png",
	top: 40,	
});
//var navWindow = Ti.UI.iOS.createNavigationWindow({
//	window: mainWindow

var loadFile = require("artists");

mainWindow.open();