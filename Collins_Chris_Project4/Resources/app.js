


Ti.UI.setBackgroundColor = ("C6011F");
var mainWindow = Ti.UI.createWindow({
	statusBarHidden: false,
	statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
	backgroundImage: "Images/baseball-grass.jpg",
	title: "Cincinnati Reds",
	color: "C6011F",
	top: 0
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});



var mainView = Ti.UI.createView({
	backgroundColor: "black",
	opacity: .1,
	height: 172,
	top: 80
});

var logo = Ti.UI.createView({
	backgroundImage: "Images/RedsLogo.png",
	top: 5,
	height: 80,
	width: 100,
	right: 20
});
mainWindow.add(mainView, logo);




Ti.include("Gallery.js", "players.js", "quesfun.js");

navWindow.open(); 