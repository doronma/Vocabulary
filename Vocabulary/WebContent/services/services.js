var vocServices = angular.module('vocServices', []);

vocServices.service('arrayUtil', function() {

	this.shuffle = function(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}
});

vocServices.service('wordManagerServer', function($http) {
	this.getData = function() {
		return $http({
			method : "GET",
			url : "http://localhost:8080/getWords"
		}).then(function(result) {
			return result.data;
		});
	}
	this.getWordGroupNames = function() {
		return $http({
			method : "GET",
			url : "http://localhost:8080/getWordGroupNameList"
		}).then(function(result) {
			return result.data;
		});
	}
	this.getWordGroup = function(groupName){
		var currentURL = 'http://localhost:8080/getWordsExByName?groupName=' + groupName;
		return $http({
			method : "GET",
			url : currentURL
		}).then(function(result) {
			return result.data;
		});
	}
	
	this.sendWordGroup = function(wordGroup){
		var currentURL = 'http://localhost:8080/addWordGroup';
		return $http({
			method : "POST",
			url : currentURL,
			data : wordGroup
		}).then(function(result){
			console.log('in post then');
			return result.data;
		});
		}
	
	this.deleteWordGroup = function(groupName){
		var currentURL = 'http://localhost:8080/deleteWordGroup';
		return $http({
			method : "POST",
			url : currentURL,
			data : groupName
		}).then(function(result){
			console.log('in post then');
			return result.data;
		}, function (error) {
            // translate the error
			console.log('some error...' + error);
			return 'error';
			
         });

	}
	
	

});

vocServices.service('wordManagerSession', function(wordManagerServer) {
	
	this.getCurrentWordList = function() {
		return this.currentWordList.wordList;
	}
	
	
	this.setCurrentWordList = function(newWordList){
		this.currentWordList = newWordList;
	}
	
	this.getCurrentWordListObject = function(){
		return this.currentWordList;
	}

	this.getSelectedGroupName = function() {
		return this.selectedGroupName;
	}
	
	this.setSelectedGroupName = function(selectedGroupName){
		this.selectedGroupName = selectedGroupName;
	}
	
	this.setWordGroupNameList = function(wordGroupNameList){
		this.wordGroupNameList = wordGroupNameList;
	}
	this.getWordGroupNameList = function(){
		return this.wordGroupNameList;
	}
	this.setShouldUpdateWordGroupNameList = function(someBoolean){
		this.shouldUpdateWordGroupNameList = someBoolean;
	}
	this.getShouldUpdateWordGroupNameList=function(){
		if (this.shouldUpdateWordGroupNameList==null){
			this.shouldUpdateWordGroupNameList=false;	
		}
		return this.shouldUpdateWordGroupNameList;
	}
	
	
	
});
