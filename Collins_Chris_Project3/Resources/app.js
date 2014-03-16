var mainWindow = Ti.UI.createWindow({
	backgroundColor: "black",
	backgroundImage: "Images/dark-fabric.png",
	top: 10	
});

var border = Ti.UI.createView({
	backgroundColor: "transparent",
	height: 1,
	width: pWidth,
	top: 20
});




var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Images");
var imageFiles = imagesFolder.getDirectoryListing();

console.log(imageFiles);
//layout logic
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var rowCount = 4;
var margin = 10;
var trueCanvasWidth = (pWidth-(margin * (rowCount + 1))); //width of device minus all of the spaces
var imageSize = (trueCanvasWidth / rowCount); //size determines the size of all of the elements so that they fit in the row and have space between them.

var mainWin = Ti.UI.createWindow({
	backgroundImage: "Images/dark-fabric.png",
	layout: "horizontal",
	top: 10	
});

var border = Ti.UI.createView({
	backgroundColor: "transparent",
	height: 1,
	width: pWidth,
	top: 20
});

var viewContainer = Ti.UI.createScrollView({
	top: 0, //0 because of the horizontal layout
	layout: "horizontal",
	width: pWidth,
	contentWidth: pWidth,  //scrollable area
	height: pHeight - border.height - border.top,
	showVerticalScrollIndicator: true, //Boolean 
	backgroundColor: "transparent",
});

for(var i=0; i<imageFiles.length; i++){
	var view = Ti.UI.createView({
		backgroundColor: "transparent",
		borderColor: "transparent",
		borderSize: 1,
		borderRadius: 5,
		top: margin,
		left: margin,
		width: imageSize,
		height: imageSize	
	});
	var newImage = Ti.UI.createImageView({
		image: "images/" + imageFiles[i],
		top: 0,
		height: 100,
  		width: 100,
 		hires: true,
		contentMode: 'aspectfill',
  		clipsToBounds: true,
  
	});
	view.add(newImage);
	//var text = Ti.UI.createLabel({text: i+1, color: "#fff"});
	//view.add(text);
	viewContainer.add(view);
}

mainWin.add(border);
mainWin.add(viewContainer);
mainWin.open();
