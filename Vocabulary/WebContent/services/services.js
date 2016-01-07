var vocServices = angular.module('vocServices', []);

vocServices.service('arrayUtil', function() {

	this.shuffle = function(array) {
		console.log('shuffling array...');
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}
});

vocServices.service('wordGroup', function() {
	
	 this.group = '{ "words" : [' +
     '{ "eng":"Dog" , "heb":"כלב" },' +
     '{ "eng":"Cat" , "heb":"חתול" },' +
     '{ "eng":"Elephant" , "heb":"פיל" },' +
     '{ "eng":"Fish" , "heb":"דג" },' +
     '{ "eng":"Spider" , "heb":"עכביש" },' +
     '{ "eng":"Zebra" , "heb":"זברה" },' +
     '{ "eng":"Shark" , "heb":"כריש" },' +
     '{ "eng":"Tree" , "heb":"עץ" },' +
     '{ "eng":"Flower" , "heb":"פרח" },' +
     '{ "eng":"Frog" , "heb":"צפרדע" }]}'
	
	this.wordsToLearn = JSON.parse(this.group);
	this.getCurrentWordList = function(){
		return this.wordsToLearn.words;
	}
});
