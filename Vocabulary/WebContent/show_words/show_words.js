var showWordsApp = angular.module("showWordsApp", ['vocServices']);
showWordsApp.controller('showWords', function(arrayUtil) {
	
	

	this.wordsToLearn = JSON.parse(text);
	this.random = function() {
		return 0.5 - Math.random();

	};
	this.words = this.wordsToLearn.words;
	this.wordList = this.words.slice(0);
	arrayUtil.shuffle(this.wordList);
	
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
