Ti.UI.setBackgroundColor("#000");

var mainWindow = Ti.UI.createWindow({
	title: "Window One",
	backgroundColor: "#fff",
	backgroundImage: "Images/wood.jpg",
	
	
});

var myFirstView = Ti.UI.createView({
	backgroundColor: "#333",
	borderColor: "#333",
	borderRadius: 5,
	borderWidth: 1,
	height: 100,
	top: 0,
	left: 0,
	right: 0
	
});
mainWindow.add(myFirstView); 
mainWindow.open();
