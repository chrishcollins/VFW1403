var facts = ["1.  When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris.", "2.  Chuck Norris counted to infinity - twice.", "3.  There used to be a street named after Chuck Norris, but it was changed because nobody crosses Chuck Norris and lives.", "4.  Chuck Norris is the reason why Waldo is hiding.", "5.  The quickest way to a mans heart is with Chuck Norris fist.", "6.  Chuck Norris destroyed the periodic table, because Chuck Norris only recognizes the element of surprise.", "7.  Chuck Norris can cut through a hot knife with butter."];

var counter = 0;

var next = function(){
	if(counter == facts.length) {
		counter = 0;
	}
	
	factText.text = facts[counter];
	factView.remove(factText);
	factView.add(factText);
	counter ++;
	
};

var previous = function() {
	if(counter == facts.length) {
		counter = -1;
	} 
	 
	factText.text = facts[counter];
	factView.remove(factText);
	factView.add(factText);
	counter --;
	
};
nextButtonView.addEventListener("click", next);
previousButtonView.addEventListener("click", previous);