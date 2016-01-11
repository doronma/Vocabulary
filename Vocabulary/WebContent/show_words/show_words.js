var showWordsApp = angular.module("showWordsApp", [ 'vocServices' ]);
showWordsApp.controller('showWords', function(arrayUtil, wordManager) {

	this.count = function() {
		if (this.counter < this.words.length - 1) {
			this.counter++;
		} else {
			this.status = 'finished';
		}
	}
	// check for Word Selection
	this.selectWord = function(word) {
		this.status = 'active';
		if (word == this.wordList[this.counter].eng) {
			this.count();
			this.lastResult = true;
		} else {
			this.lastResult = false;
		}
	}

	// check for Word Translation
	this.checkWord = function() {
		this.status = 'active';
		if (this.translation == this.wordList[this.counter].eng) {
			this.count();
			this.lastResult = true;
			this.translation='';
		} else {
			this.lastResult = false;
		}
	}
	this.reset = function() {
		this.counter = 0;
		this.status = 'start';
		arrayUtil.shuffle(this.wordList);
	}

	this.actionSuccess = function() {
		return this.status == 'active' && this.lastResult
	}

	this.actionError = function() {
		return this.status == 'active' && !this.lastResult
	}

	this.actionSuccessAll = function() {
		return this.status == 'finished' && this.lastResult
	}

	this.init = function() {
		this.selectedList = wordManager.getSelectedList();
		this.words = wordManager.getCurrentWordList();
		this.wordList = this.words.slice(0);
		this.lastResult;
		this.counter = 0;
		this.translation = "";
		this.reset();
	}
	this.init();

});
