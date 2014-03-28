//var getDetail = function(){
/* var playerWindow = Ti.UI.createWindow({
	statusBarHidden: false,
	statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
	backgroundColor: "transparent",	
	backgroundImage: "Images/RED_HOME.jpg",
	title: "Historic Players",
	color: "C6011F",
	top: 0
});

// Create a Button.
var playersButton = Ti.UI.createButton({
	backgroundColor: "transparent",
	backgroundImage: "Images/Clay.jpg",
	title : 'Players',
	font : {fontFamily : 'Arial',fontWeight : 'regular',fontSize : 18},
	height : 44,
	width : 250,
	top : photoButton.top + photoButton.height + 10,
	left : 0,
	textAlign: "left"
});
mainWindow.add(playersButton);

 navWindow.open(playerWindow);
 
playersButton.addEventListener("click", function() {
	navWindow.openWindow(playerWindow);
});


//JSON Object
var playerSection = {
	"players":{
		"headTitle": "Historical Team Players",
		"subTitle": "Big Red Machine",
		"playerList":  [
			{
				"name": "Pete Rose", 
				"image": "Images/pete-rose.jpg",
				"description": "Charlie Hustle",
				hasChild: true,
				classname: "tableRow"
			}, 
			{
				"name": "Johnny Bench",
				"image": "Images/BenchRookie.jpg", 
				"description": "Great Player",
				hasChild: true,
				classname: "tableRow"
			}, 
			{
				"name": "Ken Griffey", 
				"description": "Awesome Player",
				"image": "Images/BenchRookie.jpg",
				hasChild: true,
				classname: "tableRow"
			}
		]
	}
};



var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		title: this.text,

			});
	var detailText = Ti.UI.createLabel({
		text: this.details,
		color: "#fff",
		top: 30,
		left: 15,
		right: 15
	});
	detailWindow.add(detailText);
	navWindow.openWindow(detailWindow);
};

var aTable = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
});

playerWindow.add(aTable);
//newTable.setData(playerSectionOne);

aTable.addEventListener("click", function(event){
 	console.log(event.source.title);
});

var playerSections = [];
for (n in playerSection){
	var teamSection = Ti.UI.createTableViewSection({
	topTitle: playerSection.headTitle,
	bottomTitle: playerSection.subTitle,
});

for (var i=0, j=playerSection[n].playerList.length; i<j; i++){
  var myRow = Ti.UI.createTableViewRow({
  	title: playerSection[n].playerList[i].title,
  	description: playerSection[n].playerList[i].description,
  	color:"#000"
});
teamSection.add(myRow);
};
playerSections.push(teamSection);
};
//myRow.addEventListener("click", description);


aTable.setData(playerSections);
navWindow.add(aTable);
 playerWindow.add(navGroup);
 
 var playerWin = Ti.UI.createWindow({
 	title: event.source.title,
 	modal: true
 });
 
 var redPic = Ti.UI.createImageView({
 	image: event.source.img,
 	top: 10,
 	width: 100
 });
 
 var redText = ti.Ui.createLabel({
 	text: event.source.description,
 	top: 15,
 	width: 100,
 	font : {fontFamily : 'Arial',fontWeight : 'regular',fontSize : 18},
	color: "#fff",
 });

 detailWin.add(redPic, redText);
 navGroup.open(detailWindow);
*/