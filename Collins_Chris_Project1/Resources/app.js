Ti.UI.setBackgroundColor("#000");


var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#fff",
	backgroundImage: "Images/wood.jpg",
	
	
});

var logoImage = Ti.UI.createView({
	backgroundImage: "Images/Chuck_Norris.png",
	height: "25%",
	width: "25%",
	top: "16%",
	right: "5%",
	
	
});



var headerView = Ti.UI.createView({
	backgroundColor: "#3F3F41",
	borderColor: "#3F3F41",
	borderRadius: 5,
	borderWidth: 1,
	height: "14%",
	top: "0%",
	left: "0%",
	right: "0%"
	
});

var headerText = Ti.UI.createLabel({
	text: "Chuck Norris Facts",
	color: "9DC02E",
	font: {fontSize: 20, fontFamily: "HelveticaNeueBold", fontWeight: "Bold"},
	top: "50%",
	textAlign: "center"
});



var footerView = Ti.UI.createView({
	backgroundColor: "#3F3F41",
	borderColor: "#3F3F41",
	borderRadius: 5,
	borderWidth: 1,
	height: "10%",
	bottom: "0%",
	left: "0%",
	right: "0%",
	
});




var factView = Ti.UI.createView({
	backgroundColor: "000",
	borderRadius: 5,
	borderWidth: 1,
	height: "30%",
	top: "35%",
	left: "0%",
	right: "0%",
	
});



var factText = Ti.UI.createLabel({
	text: 'Click next to begin.',
	color: "#F2F2F2",
	font: {fontSize: 16, fontFamily: "HelveticaNeue"},
	left: "5%",
	right: "5%",
	textAlign: "center",
	
});


var nextButtonView = Ti.UI.createView({
	backgroundColor: "#9DC02E",
	borderColor: "Black",
	borderRadius: 5,
	borderWidth: 1,
	height: "6%",
	width: "30%",
	bottom: "2%",
	left: "5%",
	
});

var nextButtonText = Ti.UI.createLabel({
	text: "Next",
	color: "#37468B",
	font: {fontSize: 18, fontFamily: "HelveticaNeueBold", fontWeight: "Bold"},
	
});


 

var previousButtonView = Ti.UI.createView({
	backgroundColor: "#9DC02E",
	borderColor: "Black",
	borderRadius: 5,
	borderWidth: 1,
	height: "6%",
	width: "30%",
	bottom: "2%",
	left: "15%",
	
});

var previousButtonText = Ti.UI.createLabel({
	text: "Previous",
	color: "#37468B",
	font: {fontSize: 18, fontFamily: "HelveticaNeueBold", fontWeight: "Bold"},
	
});

var loadFile = require("NorrisFacts");

mainWindow.add(headerView, footerView, factView, nextButtonView, previousButtonView, logoImage); 
headerView.add(headerText);
factView.add(factText);
nextButtonView.add(nextButtonText);
previousButtonView.add(previousButtonText);
mainWindow.open();