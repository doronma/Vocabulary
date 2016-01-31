var wordEditApp = angular.module("wordEditApp", [ 'xeditable' ]);
wordEditApp.run(function(editableOptions) {
	editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2',
	// 'default'
});
wordEditApp.controller('wordEdit', function(wordManagerServer,wordManagerSession) {

	this.checkEngWord = function(data) {
		if (data.length == 0) {
			return "English Word should have a value";
		}
	};
	
	this.checkHebWord = function(data) {
		if (data.length == 0) {
			return "מילה בעברית חייבת להכיל ערך";
		}
	};

	this.saveWord = function() {
		console.log('in save form...')
	}

	//

	this.saveWordFromRow = function(data) {
		// $scope.user not updated yet
		console.log('in saveUserFromRow');
	};

	// remove user
	this.removeWord = function(index) {
		this.words.splice(index, 1);
	};

	// add user
	this.addWord = function() {
		this.inserted = {
			engWord : '',
			hebWord : '',

		};
		this.words.push(this.inserted);
	};

	this.showWords = function() {
		console.log(this.words)
	};
	
	this.saveData = function(){
		this.wordGroup = {
			id : '0',
			groupName:this.groupName,
			wordList : this.words	
		};
		wordManagerServer.sendWordGroup(this.wordGroup);
	}

	this.init = function() {
		this.groupName = '';
		this.words = [];
		this.addWord();
	}
	this.init();

});
