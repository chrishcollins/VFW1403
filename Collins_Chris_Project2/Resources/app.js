//JSON Object
var artists = {
	"artistsN": {
		"locationTitle": "Artists North",
		"artistList":  [
			{
				"name": "Andy Mineo", 
				"bio": "It  is absolutely undeniable that hip hop is becoming the universal language,” Mineo says expressing an unbridled enthusiasm for his artistic vehicle. “It’s so influential because you are able to say so much in a short period of time. The essence of hip hop is the boldness of it so you’re able to be exactly who you are. You are able to say exactly what you want. You represent exactly what is deepest and dearest to you and people respond to that. They respond to that realness."
			}, 
			{
				"name": "Trip Lee", 
				bio: "William Lee Barefield III is better known as Trip Lee.  As a child, Trip had dreams of being a professional athlete or famous rapper, so he began to hone his lyrical skills at the age of 12.  “I rapped about random stuff—how hot I was or how many girls I could pull,” Trip says.  But upon giving his life to Christ, at age 14, his focus changed from fortune, fame and women to serving and ministering the Gospel."
			}, 
			{
				"name": "Ambassador", 
				bio: "They call him THE AMBASSADOR…The A-M-B-A! Born William “Duce” Branch, he represents what appears to be two clashing cultures—the Kingdom of God and hip hop.  The Ambassador stands as a shining example of how hip hop can be properly submitted to God while avoiding the typical corruptions commonly associated with it. This tricky navigation did not develop without a struggle, but God has clearly maneuvered this man who is destined to impact the music industry and the world. "
				}
			]
	},
	

	"artistsS": {
		"locationTitle": "Artists South",
		"artistList": [
			{
				"name": "Lecrae", 
				bio: "As popular culture increasingly waves the banner of hedonism, the odds of a rapper who speaks of monogamy, contentment, and faith making his mark in mainstream Hip Hop seem slim. Yet, with several notable media appearances, chart-topping albums, along with a critically acclaimed mixtape and Grammy award to his credit, Lecrae has found himself on that narrow road while remaining true to his background and his worldview."
				}, 
			{
				"name": "Tedashii", 
				bio: "Born in East Texas, Tedashii “TDot” Anderson was raised to be very family-oriented, respectful and appreciative, but embracing the latter was often difficult in light of the economic conditions his family faced. While Tedashii’s robust stature and delivery on the mic catch the attention of most, his gentle spirit hints at an even deeper story behind the man and the music."
				}, 
			{
				"name": "Derek Minor", 
				bio: "Derek Minor lost his grandfather, grandmother and godmother in quick succession. He then surrendered his life to God and left a life where money and women were his focus."
				}
			]
		}
};

var mainWindow = Ti.UI.createWindow({
	title: "Artists",
	backgroundColor: "red"
});
var window;
var navWindow = Ti.UI.iOS.createNavigtionWindow({
	window: mainWindow
});

var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		title: this.text,
		backgroundColor: "red"
	});
	var detailText = Ti.UI.createLabel({
		text: this.details,
		top: 30,
		left: 15,
		right: 15
	});
	detailWindow.add(detailText);
	navWindow.openWindow(detailWindow);
};

var makeUI = function(){
	var spacing = 80;
	for(n in artists){
		var titleLabel = Ti.UI.createLabel({
		text: artists[n].locationTitle,
		backgroundColor: "black",
		top: spacing,
		left: 15,
		right: 15,
		height: 25,
		textAlign: "center",
		font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
		color: "white"
	});
	spacing = titleLabel.top + titleLabel.height + 10;
	console.log(spacing);
	
	for(m in artists[n].artistList){
		var artistLabel = Ti.UI.createLabel({
			text: artists[n].artistList[m].name,
			details: artists[n].artistList[m].bio,
			backgroundColor: "black",
			color: "white",
			font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
			top: spacing,
			left: 15,
			right: 15,
			height: 25,	
		});
		mainWindow.add(artistLabel);
		spacing =artistLabel.top + artistLabel.height + 10;
		artistLabel.addEventListener("click", getDetail);
	}
	mainWindow.add(titleLabel);
	spacing = artistLabel.top + artistLabel.height + 40;
	}
};

makeUI();


navWindow.open();