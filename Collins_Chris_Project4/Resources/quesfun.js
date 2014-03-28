
var otherWindow = Ti.UI.createWindow({
	statusBarHidden: false,
	statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
	backgroundImage: "Images/baseball-grass.jpg",
	title: "Question Fun",
	color: "C6011F",
	top: 0,
	exitOnClose: true
});

// Create a Button.
var otherButton = Ti.UI.createButton({
	backgroundColor: "transparent",
	backgroundImage: "Images/Clay.jpg",
	title : 'Reds Trivia',
	font : {fontFamily : 'Ariel',fontWeight : 'regular',fontSize : 18},
	height : 44,
	width : 300,
	top : playersButton.top + playersButton.height + 10,
	left : 0,
	textAlign: "left"
});
mainWindow.add(otherButton);

otherButton.addEventListener("click", function() {
	navWindow.openWindow(otherWindow);
});

//Buttons to clear text field
var clearButton = Ti.UI.createButton({
	title: "Clear",
	height: 24,
	width: 52
});

var submitButton = Ti.UI.createButton({
	title: "Submit",
	height: 24,
	width: 60
});


var rGabLabel = Ti.UI.createLabel({
	color: "#fff",
	font: {fontType: "Arial", fontSize: 14, fontStyle: "bold"},
	text: "Enter your answers for some fun.",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 10,
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE
});
otherWindow.add(rGabLabel);



var qtext1 = Ti.UI.createLabel({
	color: "#fff",
	font: {fontType: "Arial", fontSize: 18, fontStyle: "bold"},
	text: "What is your name?",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 40,
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE
});
otherWindow.add(qtext1);


var text1 = Ti.UI.createTextField({
	top: 80,
	height: 30,
	width: 300,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Enter answer.",
	keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
});
otherWindow.add(text1);



var qtext2 = Ti.UI.createLabel({
	color: "#fff",
	font: {fontType: "Arial", fontSize: 18, fontStyle: "bold"},
	text: "What is your favorite City?",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 140,
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE
});
otherWindow.add(qtext2);


var text2 = Ti.UI.createTextField({
	top: 180,
	height: 30,
	width: 300,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Enter answer.",
	keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
	rightButton: submitButton
});
otherWindow.add(text2);

otherWindow.addEventListener("click", function(e){
	text1.blur();
});

 otherWindow.addEventListener("click", function(e){
	text2.blur();
});


submitButton.addEventListener("click", function(e){
	alert(text1.value + " likes to watch baseball " + "in " + text2.value +".");
});

navWindow.open();