Ti.UI.setBackgroundColor("#000");


var mainWindow = Ti.UI.createWindow({
	title: "Window One",
	backgroundColor: "#fff",
	backgroundImage: "Images/wood.jpg",
	
	
});

var myFirstView = Ti.UI.createView({
	backgroundColor: "#3F3F41",
	borderColor: "#3F3F41",
	borderRadius: 5,
	borderWidth: 1,
	height: "14%",
	top: "0%",
	left: "0%",
	right: "0%",
	
});

var myText = Ti.UI.createLabel({
	text: "Chuck Norris Facts",
	color: "9DC02E",
	font: {fontSize: 20, fontFamily: "HelveticaNeueBold", fontWeight: "Bold"},
	top: "50%",
	textAlign: "center"
});

var mySecondView = Ti.UI.createView({
	backgroundColor: "#3F3F41",
	borderColor: "#3F3F41",
	borderRadius: 5,
	borderWidth: 1,
	height: "10%",
	bottom: "0%",
	left: "0%",
	right: "0%",
	zIndex: 8
});

var factOne = Ti.UI.createLabel({
	text: '"When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris."',
	color: "#F2F2F2",
	font: {fontSize: 16, fontFamily: "HelveticaNeue"},
	left: "5%",
	right: "5%",
	textAlign: "center"
});


var nextLabelView = Ti.UI.createView({
	backgroundColor: "#9DC02E",
	borderColor: "Black",
	borderRadius: 5,
	borderWidth: 1,
	height: "6%",
	width: "30%",
	bottom: "2%",
	left: "15%",
	zIndex: 9
});

var nextLabel = Ti.UI.createLabel({
	text: "Next",
	color: "#37468B",
	font: {fontSize: 18, fontFamily: "HelveticaNeueBold", fontWeight: "Bold"},
	zIndex: 9
});

var previousLabelView = Ti.UI.createView({
	backgroundColor: "#9DC02E",
	borderColor: "Black",
	borderRadius: 5,
	borderWidth: 1,
	height: "6%",
	width: "30%",
	bottom: "2%",
	right: "15%",
	zIndex: 9
});

var previousLabel = Ti.UI.createLabel({
	text: "Previous",
	color: "#37468B",
	font: {fontSize: 18, fontFamily: "HelveticaNeueBold", fontWeight: "Bold"},
	zIndex: 9
});


mainWindow.add(myFirstView, mySecondView, factOne, nextLabel, previousLabel, nextLabelView, previousLabelView); 
myFirstView.add(myText);
nextLabelView.add(nextLabel);
previousLabelView.add(previousLabel);
mainWindow.open();