var showWordsApp = angular.module("showWordsApp", [ 'vocServices' ]);
showWordsApp.controller('showWords', function(arrayUtil, wordManagerSession) {

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
		if (word == this.wordList[this.counter].engWord) {
			this.count();
			this.lastResult = true;
		} else {
			this.lastResult = false;
		}
	}

	// check for Word Translation
	this.checkWord = function() {
		this.status = 'active';
		if (this.translation == this.wordList[this.counter].engWord) {
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
	
	this.isGroupSelected = function(){
		return !wordManagerSession.getSelectedGroupName==null
	}
	
	this.getShowHint =function(){
		if (this.swShowHint==null){
			this.swShowHint=false;
		}
		return this.swShowHint;
	}
	
	this.showHint = function(showHintValue){
		this.swShowHint = showHintValue;
	}

	this.init = function() {
		this.selectedList = wordManagerSession.getSelectedGroupName();
		this.words = wordManagerSession.getCurrentWordList();
		this.wordList = this.words.slice(0);
		this.lastResult;
		this.counter = 0;
		this.translation = "";
		this.reset();
	}
	this.init();

});
