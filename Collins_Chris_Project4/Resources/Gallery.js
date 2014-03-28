//var currentWindow = Ti.UI.currentWindow;

var galleryWin = Ti.UI.createWindow({
	statusBarHidden:false,
	statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
	backgroundColor: "#A71930",
	backgroundImage: "OtherImages/dark-fabric.png",
	top: 0,
	bottom: 0,
	title: "Reds' Photos"
	});
		


//gallery files from the Gallery
var galleryFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Gallery");//only looks at folder
var galleryFiles = galleryFolder.getDirectoryListing();//this looks at the files within folder and creates an array

var numImages = galleryFiles.length;

var counter, random = 0;

// Create a Button.
var photoButton = Ti.UI.createButton({
	backgroundColor: "transparent",
	backgroundImage: "Images/Clay.jpg",
	title : 'Photos',
	font : {fontFamily : 'Ariel',fontWeight : 'regular',fontSize : 18},
	height : 44,
	width : 200,
	top : mainView.top + 10,
	left : 0,
	textAlign: "left"
});
mainWindow.add(photoButton);

photoButton.addEventListener("click", function() {
	navWindow.openWindow(galleryWin);
});


var galleryView = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 300,
	width: 300,
	width: "auto"
}); 
galleryWin.add(galleryView);

/*
var tView = Ti.UI.createView({
	backgroundColor: "#000",
	top: 350,
	height: 50,
	left: 10,
	right: 10
});
galleryWin.add(tView);

var tLabel = Ti.UI.createLabel({
	text: "Reds History",
	font : {fontFamily : 'Ariel',fontWeight : 'regular',fontSize : 18},
	color: "#fff",
	left: 15,
});
tView.add(tLabel); */

var randomPic = function(){
	random = Math.floor((Math.random()*numImages)+1);
	if(random ==counter){
		random = Math.floor((Math.random()*numImages)+1);
	}
	var pics = Ti.UI.createImageView({
		image: "Gallery/" + galleryFiles[random],
		height: 350,
		width: 350
		
	});


galleryView.add(pics);
counter = random;
};

var randomButton = Ti.UI.createButton({
	backgroundColor: "transparent",
	backgroundImage: "Images/Clay.jpg",
	title : 'Random Image',
	font : {fontFamily : 'Ariel',fontWeight : 'regular',fontSize : 18},
	height : 44,
	width : 200,
	bottom: 10,
	left : 0,
	textAlign: "left"
});

randomButton.addEventListener("click", randomPic);

galleryWin.add(randomButton);
navWindow.open();