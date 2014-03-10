Titanium.UI.setBackgroundColor("black");


var artistsNorth = [
{title: "Andy Mineo", bio: "It is absolutely undeniable that hip hop is becoming the universal language,” Mineo says expressing an unbridled enthusiasm for his artistic vehicle. “It’s so influential because you are able to say so much in a short period of time. The essence of hip hop is the boldness of it so you’re able to be exactly who you are. You are able to say exactly what you want. You represent exactly what is deepest and dearest to you and people respond to that. They respond to that realness."}, 
{title: "Trip Lee", bio: "William Lee Barefield III is better known as Trip Lee.  As a child, Trip had dreams of being a professional athlete or famous rapper, so he began to hone his lyrical skills at the age of 12.  “I rapped about random stuff—how hot I was or how many girls I could pull,” Trip says.  But upon giving his life to Christ, at age 14, his focus changed from fortune, fame and women to serving and ministering the Gospel."}, 
{title: "KB", bio: "Kevin Burgess was raised in Southern Illinois.  But KB’s struggles beyond the classroom and his environment would soon overwhelm him, leaving him on the verge of committing suicide.  Fortunately, amidst these ups and downs during his second semester, KB was introduced to Christian rap. “I was given a cd with eight tracks on it, and I loved every one of them. I couldn’t believe it was Christian music, because the dude on the cover looked just like me” he remembers. It was that same cd, at age 16, that introduced him to Jesus, and KB has been walking with the Lord ever since. "}
];

var artistsSouth = [
{title: "Lecrae", bio: "As popular culture increasingly waves the banner of hedonism, the odds of a rapper who speaks of monogamy, contentment, and faith making his mark in mainstream Hip Hop seem slim. Yet, with several notable media appearances, chart-topping albums, along with a critically acclaimed mixtape and Grammy award to his credit, Lecrae has found himself on that narrow road while remaining true to his background and his worldview."}, 
{title: "Tedashii", bio: "Born in East Texas, Tedashii “TDot” Anderson was raised to be very family-oriented, respectful and appreciative, but embracing the latter was often difficult in light of the economic conditions his family faced. While Tedashii’s robust stature and delivery on the mic catch the attention of most, his gentle spirit hints at an even deeper story behind the man and the music."}, 
{title: "Derek Minor", bio: "Derek Minor lost his grandfather, grandmother and godmother in quick succession. He then surrendered his life to God and left a life where money and women were his focus."}
];

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "red"
});

var titleView = Ti.UI.createView({
	height: 65,
	backgroundColor: "white",
	top: 0,
	 backgroundGradient: {
        type: 'linear',
        startPoint: { x: '50%', y: '0%' },
        endPoint: { x: '50%', y: '100%' },
        colors: [ { color: '#4c4c4c', offset: 0.0}, { color: '#2c2c2c', offset: 0.47 }, { color: '#000000', offset: 1.0 } ],
    }
   
});

var border = Ti.UI.createView({
	backgroundColor: "dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "Hip Hop Artists",
	color: "white",
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
	top: 30,
	width: "100%",
	textAlign: "center"
});

var artistsTable = Ti.UI.createTableView({ //do i need this section here?
	data: artistsNorth,
	top: border.top + border.height,
	
});

if(Ti.Platform.name === "iPhone OS"){
	artistsTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var artistsNorthSection = Ti.UI.createTableViewSection({
	headerTitle: "Northern Rappers",
	footerTitle: "Artists from NYC, Philly, & Illinois",
	
});


var openBio = function(){
	var bioWindow = Ti.UI.createWindow ({
		backgroundColor: "f5f5f5",
		
	});
		var bioTitleView = Ti.UI.createView({
		height: 65,
		backgroundColor: "#red",
		top: 0, backgroundGradient: {
        type: 'linear',
        startPoint: { x: '50%', y: '0%' },
        endPoint: { x: '50%', y: '100%' },
        colors: [ { color: '#4c4c4c', offset: 0.0}, { color: '#2c2c2c', offset: 0.47 }, { color: '#000000', offset: 1.0 } ],
    }
		
	});
	
	var bioBorder = Ti.UI.createView({
		backgroundColor: "dbdbdb",
		height: 1,
		top: bioTitleView.height + bioTitleView.top
	});
	
	var bioTitleLabel = Ti.UI.createLabel({
		text: this.title,   //"this" is a reserved object in js.  It will always reference back to the object that called the function.
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		color: "white",
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var bioText = Ti.UI.createLabel({
		text: this.bioDesc,
		font: {fontSize: 14, fontFamily: "Arial"},
		top: bioBorder.height + bioBorder.top + 40,
		left: 10,
		right: 10
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "fff",
		height: 50,
		font: {fontSize: 12, fontFamily: "Arial"},
		width: "100%",
		bottom: 0,
		textAlign: "center"
		
	});
	
	var closeWindow = function(){
		bioWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	
	closeButton.addEventListener("click", closeWindow);
	
	bioTitleView.add(bioTitleLabel);
	bioWindow.add(bioTitleView, bioBorder, bioText, closeButton);
	
	bioWindow.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};


for(var i=0, j=artistsNorth.length; i<j; i++){
	var row = Ti.UI.createTableViewRow({
		title: artistsNorth[i].title,
		bioDesc: artistsNorth[i].bio,
		hasChild: true
		 		
	});

if(Ti.Platform.name === "iPhone OS"){
	row.hasChild = false; 
	row.hasDetail = true; //hasDetail supported by iOS letting user know there is additonal information.
	}

	artistsNorthSection.add(row);
	row.addEventListener("click", openBio);
	
}







var artistsTable = Ti.UI.createTableView({ //do i need this section here?
	data: artistsSouth,
	top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS"){
	artistsTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var artistsSouthSection = Ti.UI.createTableViewSection({
	headerTitle: "Southern Rappers",
	footerTitle: "Artists from Atlanta, Houston, & Tennessee"
});


var openBio = function(){
	var bioWindow = Ti.UI.createWindow ({
		backgroundColor: "f5f5f5",
		
	});
		var bioTitleView = Ti.UI.createView({
		height: 65,
		backgroundColor: "#fff",
		top: 0,
		 backgroundGradient: {
        type: 'linear',
        startPoint: { x: '50%', y: '0%' },
        endPoint: { x: '50%', y: '100%' },
        colors: [ { color: '#4c4c4c', offset: 0.0}, { color: '#2c2c2c', offset: 0.47 }, { color: '#000000', offset: 1.0 } ],
    }
		
	});
	
	var bioBorder = Ti.UI.createView({
		backgroundColor: "dbdbdb",
		height: 1,
		top: bioTitleView.height + bioTitleView.top
	});
	
	var bioTitleLabel = Ti.UI.createLabel({
		text: this.title,   //"this" is a reserved object in js.  It will always reference back to the object that called the function.
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		color: "white",
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var bioText = Ti.UI.createLabel({
		text: this.bioDesc,
		font: {fontSize: 14, fontFamily: "Arial"},
		top: bioBorder.height + bioBorder.top + 40,
		left: 10,
		right: 10
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "fff",
		height: 50,
		font: {fontSize: 12, fontFamily: "Arial"},
		width: "100%",
		bottom: 0,
		textAlign: "center"
		
	});
	
	var closeWindow = function(){
		bioWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	
	closeButton.addEventListener("click", closeWindow);
	
	bioTitleView.add(bioTitleLabel);
	bioWindow.add(bioTitleView, bioBorder, bioText, closeButton);
	
	bioWindow.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};


for(var i=0, j=artistsSouth.length; i<j; i++){
	var row = Ti.UI.createTableViewRow({
		title: artistsSouth[i].title,
		bioDesc: artistsSouth[i].bio,
		hasChild: true
		 		
	});

if(Ti.Platform.name === "iPhone OS"){
	row.hasChild = false; 
	row.hasDetail = true; //hasDetail supported by iOS letting user know there is additonal information.
	}

	artistsSouthSection.add(row);
	row.addEventListener("click", openBio);
	
}







var artistsSections = [artistsNorthSection, artistsSouthSection];

artistsTable.setData(artistsSections); //you can also bring down the line above and do this artistsTable.setData([artistsNorthSection, artistsSouthSection]);

//artistsTable.setData(artists); can set or define data to the table here if you don't define within the tableView itself
//.setData() will only accept an array data type.
titleView.add(titleLabel);
mainWindow.add(titleView, border, artistsTable);
mainWindow.open();
