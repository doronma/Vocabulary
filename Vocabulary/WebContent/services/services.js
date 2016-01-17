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

});

vocServices.service('wordManager', function(wordManagerServer) {

	this.animals = '{ "vocabularyWordList" : ['
			+ '{ "engWord":"Dog" , "hebWord":"כלב" },'
			+ '{ "engWord":"Cat" , "hebWord":"חתול" },'
			+ '{ "engWord":"Elephant" , "hebWord":"פיל" },'
			+ '{ "engWord":"Fish" , "hebWord":"דג" },'
			+ '{ "engWord":"Spider" , "hebWord":"עכביש" },'
			+ '{ "engWord":"Zebra" , "hebWord":"זברה" },'
			+ '{ "engWord":"Shark" , "hebWord":"כריש" },'
			+ '{ "engWord":"Tree" , "hebWord":"עץ" },'
			+ '{ "engWord":"Flower" , "hebWord":"פרח" },'
			+ '{ "engWord":"Frog" , "hebWord":"צפרדע" }]}';

	this.weekDays1 = '{ "vocabularyWordList" : ['
			+ '{ "engWord":"Sunday1" , "hebWord":"יום ראשון" },'
			+ '{ "engWord":"Monday" , "hebWord":"יום שני" },'
			+ '{ "engWord":"Tuesday" , "hebWord":"יום שלישי" },'
			+ '{ "engWord":"Wednesday" , "hebWord":"יום רביעי" },'
			+ '{ "engWord":"Thursday" , "hebWord":"יום חמישי" },'
			+ '{ "engWord":"Friday" , "hebWord":"יום שישי" },'
			+ '{ "engWord":"Saturday" , "hebWord":"יום שבת" }]}';

	
	this.getCurrentWordList = function() {
		return this.wordsToLearn.vocabularyWordList;
	}

	

	this.updateWordList = function(selectedGroupName) {
		if (selectedGroupName == "Animals") {
			this.wordsToLearn = JSON.parse(this.animals);
		}
		if (selectedGroupName == "WeekDays") {
			this.wordsToLearn = this.weekDays;
		}
		this.setSelectedGroupName(selectedGroupName);

	}

	this.getSelectedGroupName = function() {
		return this.selectedGroupName;
	}
	
	this.setSelectedGroupName = function(selectedGroupName){
		this.selectedGroupName = selectedGroupName;
	}

	this.init = function() {
		//this.wordGroup = JSON.parse(this.wordGroupJson);
		//this.updateWordList('WeekDays');
		var wordManagerService = this;

		wordManagerServer.getData().then(function(result) {
			wordManagerService.weekDays = result;
			
			
			wordManagerService.updateWordList('WeekDays');
		});
		
		


	}

	this.init();
});
