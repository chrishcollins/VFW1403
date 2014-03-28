//layout logic
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var rowCount = 4;
var margin = 10;
var trueCanvasWidth = (pWidth-(margin * (rowCount + 1))); //width of device minus all of the spaces
var imageSize = (trueCanvasWidth / rowCount); //size determines the size of all of the elements so that they fit in the row and have space between them.
console.log(imageSize);

var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Images");
var imageFiles = imagesFolder.getDirectoryListing();
console.log(imageFiles[i]);

//Button to click to enter gallery
var enterButton = Ti.UI.createButton({
	backgroundImage: "OtherImages/button_dark.png",
	backgroundSelectedImage: "OtherImages/button_dark_push.png",
	height: 300,
	width: 400
});

var logoView = Ti.UI.createView({
	backgroundImage: "OtherImages/GlassTxt.png",
	height: 100,
	width: 320,
	top: 30
});

mainWindow.add(enterButton, logoView);


//Imgage Gallery Window

var galleryWin = Ti.UI.createWindow({
	statusBarHidden:false,
	statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
	backgroundColor: "#fff",
	backgroundImage: "OtherImages/dark-fabric.png",
	top: 40,
	bottom: 0,
	title: "Artist Photos",
	color: "orange"
	});

var galleryView = Ti.UI.createView({
	backgroundColor: "black",
	top: 0,
	height: 40
}); 

var galleryLabel = Ti.UI.createLabel({
	text: "Artist Gallery",
	backgroundColor: "transparent",
	color: "white",
	font: {fontSize: 16, fontFamily: "Helvetica", fontWeight: "light"},
});

galleryView.add(galleryLabel);

var openGallery = function(){
	galleryWin.open();
};

var border = Ti.UI.createView({
	backgroundColor: "transparent",
	height: 1,
	width: pWidth,
	top: 20
});

enterButton.addEventListener("click", openGallery);


var viewContainer = Ti.UI.createScrollView({
	top: 40, //0 because of the horizontal layout
	bottom: 80,
	layout: "horizontal",
	width: pWidth,
	contentWidth: pWidth,  //scrollable area
	height: pHeight - border.height - border.top,
	showVerticalScrollIndicator: true, //Boolean 
	backgroundColor: "transparent",
});

for(var i=0, j=imageFiles.length; i<j; i++){
	var view = Ti.UI.createImageView({
		backgroundColor: "transparent",
		borderColor: "transparent",
		borderSize: 1,
		borderRadius: 5,
		top: margin,
		left: margin,
		width: imageSize,
		height: imageSize	
	});

var newImageView = Ti.UI.createImageView({
	image: "images/" + imageFiles[i],
	//title: imageFiles[i],
	top: 0,
	height: 100,
	width: 100,
	hires: true,
	contentMode: 'aspectfill',
	clipsToBounds: true,
});
	view.add(newImageView);
	viewContainer.add(view);


var closeButton = Ti.UI.createButton({
	title: "Close",
	color: "white",
	backgroundColor: "black",
	height: 35,
	width: 320,
	bottom: 0
});

//Button to close gallery window
closeButton.addEventListener("click", function(e){
	galleryWin.close();
});

};
	
//var openImage = function(e) {
	var largeImageWin = Ti.UI.createWindow({
		statusBarHidden:false,
		statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
		backgroundColor: "#fff",
		backgroundImage: "OtherImages/metal.png",
		top: 40
});

//Opens images folder to display each image individually in a new window
viewContainer.addEventListener("click", function(e){
	largeImageWin.open(); 
});

var largeView = Ti.UI.createView({
	backgroundColor: "transparent",
	height: imageSize,
	width: imageSize,
	top: 60
});

largeImageWin.add(largeView);
//largeImageWin.open();


var largeImageView = Ti.UI.createImageView({
	image: "Images/" +  imageFiles[i],
	title: imageFiles[i]
	});

largeView.add(largeImageView);

var imageName = Ti.UI.createLabel({
	bottom: largeView.bottom,
	backgroundColor: "black",
	opacity: "20%",
	font: {fontSize: 10, fontFamily: "Helvetica", fontWeight: "light"}, 

	});

largeImageWin.add(imageName);

var closeImageButton = Ti.UI.createButton({
	title: "Close",
	color: "white",
	backgroundColor: "black",
	height: 35,
	width: 320,
	bottom: 0
});
largeImageWin.add(closeImageButton);

//Button to close individual image window
closeImageButton.addEventListener("click", function(e){
	largeImageWin.close();
});


galleryWin.add(viewContainer, border, closeButton, galleryView);