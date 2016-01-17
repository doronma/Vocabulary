var wordGroupSelectionApp = angular.module("wordGroupSelectionApp",
		[ 'vocServices' ]);
wordGroupSelectionApp.controller('wordGroupSelection', function(wordManager,
		wordManagerServer) {

	this.selectRow = function(groupName) {
		wordManager.updateWordList(groupName);
		this.selectedGroupName = wordManager.getSelectedGroupName();
	}
	this.init = function() {
		var currentController = this;
		wordManagerServer.getWordGroupNames().then(function(result) {
			currentController.wordGroupNameList = result;
			currentController.selectedGroupName = currentController.wordGroupNameList[0]
		})
	}
	this.init();

});
