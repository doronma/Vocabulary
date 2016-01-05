var showWordsApp = angular.module("showWordsApp", []);
showWordsApp.controller('showWords', function() {

	this.wordsToLearn = JSON.parse(text);
	this.random = function() {
		return 0.5 - Math.random();

	};
	this.words = this.wordsToLearn.words;
	this.wordList = this.words.slice(0);
	
	this.counter = 0;
	this.count = function() {
		if (this.counter < this.words.length) {
			this.counter++;
		} else {
			alert('no more');
		}
	}
	this.selectWord = function(word) {
		if (word == this.words[this.counter].eng) {
			this.count();
		}else{
			alert('bad');
		}
	}

});
