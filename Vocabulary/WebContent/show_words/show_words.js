var showWordsApp = angular.module("showWordsApp", []);
showWordsApp.controller('showWords', function() {
	
	this.shuffle = function(array) {
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

	this.wordsToLearn = JSON.parse(text);
	this.random = function() {
		return 0.5 - Math.random();

	};
	this.words = this.wordsToLearn.words;
	this.wordList = this.words.slice(0);
	this.shuffle(this.wordList);
	
	this.counter = 0;
	this.count = function() {
		if (this.counter < this.words.length-1) {
			this.counter++;
		} else {
			alert('no more');
		}
	}
	this.selectWord = function(word) {
		if (word == this.wordList[this.counter].eng) {
			this.count();
		}else{
			alert('bad');
		}
	}
	this.reset = function(){
		this.counter = 0;
		this.shuffle(this.wordList);
	}
	
	

});
