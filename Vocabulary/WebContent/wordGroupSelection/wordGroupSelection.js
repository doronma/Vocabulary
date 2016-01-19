var wordGroupSelectionApp = angular.module("wordGroupSelectionApp",
		[ 'vocServices' ]);
wordGroupSelectionApp.controller('wordGroupSelection', function(wordManagerSession,
		wordManagerServer) {

	this.selectRow = function(groupName) {
		wordManagerSession.setSelectedGroupName(groupName);
		this.selectedGroupName = groupName
		wordManagerServer.getWordGroup(groupName).then(function(result) {
			wordManagerSession.setCurrentWordList(result)
		});
	}

	this.getWordGroupNameList = function() {
		var currentController = this;
		wordManagerServer.getWordGroupNames().then(
				function(result) {
					currentController.wordGroupNameList = result;
					wordManagerSession.setWordGroupNameList(result);
					currentController.isLoading = false;
					// set first group as current group
					currentController
							.selectRow(currentController.wordGroupNameList[0]);
				})
	}

	// fetch data on startup
	this.init = function() {
		this.isLoading = true;
		if (wordManagerSession.getSelectedGroupName()== null) {
			this.getWordGroupNameList();
		
		}else{
			this.selectedGroupName = wordManagerSession.getSelectedGroupName();
			this.wordGroupNameList = wordManagerSession.getWordGroupNameList();
			this.isLoading = false;
		}
	}
	this.init();

});
