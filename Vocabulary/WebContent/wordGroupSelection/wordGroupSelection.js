var wordGroupSelectionApp = angular.module("wordGroupSelectionApp",
		[ 'vocServices' ]);
wordGroupSelectionApp.controller('wordGroupSelection', function(wordManager,
		wordManagerServer) {

	this.selectRow = function(groupName) {
		wordManager.setSelectedGroupName(groupName);
		this.selectedGroupName = groupName
		wordManagerServer.getWordGroup(groupName).then(function(result) {
			wordManager.setCurrentWordList(result)
		});
	}

	this.getWordGroupNameList = function() {
		var currentController = this;
		wordManagerServer.getWordGroupNames().then(
				function(result) {
					currentController.wordGroupNameList = result;
					// set first group as current
					// grroup
					currentController
							.selectRow(currentController.wordGroupNameList[0]);
				})
	}

	// fetch data on startup
	this.init = function() {
		this.getWordGroupNameList();
	}
	this.init();

});
