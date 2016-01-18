var vocServices = angular.module('vocServices', []);

vocServices.service('arrayUtil', function() {

	this.shuffle = function(array) {
		console.log('shuffling array...');
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
			return result.data
		})
	}
	this.getWordGroupNames = function() {
		return $http({
			method : "GET",
			url : "http://localhost:8080/getWordGroupNameList"
		}).then(function(result) {
			return result.data
		})
	}
	this.getWordGroup = function(groupName){
		var currentURL = 'http://localhost:8080/getWordsExByName?groupName=' + groupName;
		return $http({
			method : "GET",
			url : currentURL
		}).then(function(result) {
			return result.data
		})
	}

});

vocServices.service('wordManager', function(wordManagerServer) {
	
	this.getCurrentWordList = function() {
		return this.currentWordList.wordList;
	}

	
	this.setCurrentWordList = function(newWordList){
		this.currentWordList = newWordList;
	}

	this.getSelectedGroupName = function() {
		return this.selectedGroupName;
	}
	
	this.setSelectedGroupName = function(selectedGroupName){
		this.selectedGroupName = selectedGroupName;
	}
	
});
