var facts = ["When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris.", "Chuck Norris counted to infinity - twice.", "There used to be a street named after Chuck Norris, but it was changed because nobody crosses Chuck Norris and lives.", "Chuck Norris is the reason why Waldo is hiding.", "The quickest way to a mans heart is with Chuck Norris fist.", "Chuck Norris destroyed the periodic table, because Chuck Norris only recognizes the element of surprise.", "Chuck Norris can cut through a hot knife with butter."];
 
var i = 0;

var next = function(){
	if(factText.text === facts[0]) {
		i ++;
	}
	else(factText.text = facts[i]);
	factView.add(factText);
	i =0;
};

var previous = function() {
	if(factText === facts[i]) {
		 i--;
	} 
	 
	factText.text = facts[0];
	factView.add(factText);
	i = facts.length;
	
};
nextButtonView.addEventListener("click", next);
previousButtonView.addEventListener("click", previous);