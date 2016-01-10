var showWordsApp = angular.module("showWordsApp", [ 'vocServices' ]);
showWordsApp.controller('showWords', function(arrayUtil, wordGroup) {

	// this.words = this.wordsToLearn.words;
	this.words = wordGroup.getCurrentWordList();
	this.wordList = this.words.slice(0);
	arrayUtil.shuffle(this.wordList);
	this.lastResult;
	this.dirty = false;
	this.counter = 0;
	this.translation = "";
	this.count = function() {
		if (this.counter < this.words.length - 1) {
			this.counter++;
		} else {
			alert('no more');
		}
	}
	this.selectWord = function(word) {
		this.dirty = true;
		if (word == this.wordList[this.counter].eng) {
			this.count();
			this.lastResult = true;
		} else {
			this.lastResult = false;
		}
	}

	this.checkWord = function() {
		this.dirty = true;
		if (this.translation == this.wordList[this.counter].eng) {
			this.count();
			this.lastResult = true;
		} else {
			this.lastResult = false;
		}
	}
	this.reset = function() {
		this.counter = 0;
		this.dirty = false
		arrayUtil.shuffle(this.wordList);
	}

});
