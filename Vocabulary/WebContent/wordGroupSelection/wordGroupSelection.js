var wordGroupSelectionApp = angular.module("wordGroupSelectionApp",
		[ 'vocServices' ]);
wordGroupSelectionApp.controller('wordGroupSelection', function(wordManager) {
	this.wordGroup = wordManager.getWordGroup();
	this.selectRow = function(groupName) {
		wordManager.updateWordList(groupName);
		this.selectedList = wordManager.getSelectedList();
	}
	this.init = function() {
		this.selectedList = wordManager.getSelectedList();
	}
	this.init();

});
