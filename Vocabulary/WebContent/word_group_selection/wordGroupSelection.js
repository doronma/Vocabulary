var wordGroupSelectionApp = angular.module("wordGroupSelectionApp",
		[ 'vocServices' ]);
wordGroupSelectionApp.controller('wordGroupSelection', function(wordManagerSession,
		wordManagerServer,$state) {

	this.selectRow = function(groupName) {
		wordManagerSession.setSelectedGroupName(groupName);
		this.selectedGroupName = groupName
		wordManagerServer.getWordGroup(groupName).then(function(result) {
			wordManagerSession.setCurrentWordList(result)
		
		});
	}
	
	this.selectRowAndShowWords = function(groupName){
		wordManagerSession.setSelectedGroupName(groupName);
		this.selectedGroupName = groupName
		wordManagerServer.getWordGroup(groupName).then(function(result) {
			wordManagerSession.setCurrentWordList(result);
			$state.go('show_words');
		});
		
	}
	
	this.editWordGroup = function(groupName){ 
		console.log('in Edit Word Group');
		wordManagerSession.setSelectedGroupName(groupName);
		this.selectedGroupName = groupName
		wordManagerServer.getWordGroup(groupName).then(function(result) {
			wordManagerSession.setCurrentWordList(result);
			wordManagerSession.setEditMode(true);
			$state.go('edit_words');
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
	
	
	this.deleteWordGroup = function(groupName){
		console.log('Deleting - ' + groupName);
		var currentController = this;
		wordManagerServer.deleteWordGroup(groupName).then(function(result) {
			console.log('result is - ' + result);
			currentController.getWordGroupNameList();
			wordManagerSession.setShouldUpdateWordGroupNameList(false);
		});
		
		
	}

	// fetch data on startup
	this.init = function() {
		this.isLoading = true;
		wordManagerSession.setEditMode(false);
		if (wordManagerSession.getSelectedGroupName()== null || wordManagerSession.getShouldUpdateWordGroupNameList()) {
			this.getWordGroupNameList();
			 wordManagerSession.setShouldUpdateWordGroupNameList(false);	
		
		}else{
			this.selectedGroupName = wordManagerSession.getSelectedGroupName();
			this.wordGroupNameList = wordManagerSession.getWordGroupNameList();
			this.isLoading = false;
		}
	}
	this.init();

});
