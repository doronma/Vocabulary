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

	this.wordGroupJson = '{"wordGroup" : [' + '{"groupName":"Animals"},'
			+ '{"groupName":"WeekDays"},' + '{"groupName":"WeekDays2"},'
			+ '{"groupName":"WeekDays3"},' + '{"groupName":"WeekDays4"},'
			+ '{"groupName":"WeekDays5"},' + '{"groupName":"WeekDays6"},'
			+ '{"groupName":"WeekDays7"},' + '{"groupName":"WeekDays8"},'
			+ '{"groupName":"WeekDays9"},' + '{"groupName":"WeekDays10"}'
			+ ']}';

	this.getCurrentWordList = function() {
		return this.wordsToLearn.vocabularyWordList;
	}

	this.getWordGroup = function() {
		return this.wordGroup.wordGroup;
	}

	this.updateWordList = function(selectedList) {
		if (selectedList == "Animals") {
			this.wordsToLearn = JSON.parse(this.animals);
		}
		if (selectedList == "WeekDays") {
			this.wordsToLearn = this.weekDays;
		}
		this.selectedListName = selectedList;

	}

	this.getSelectedList = function() {
		return this.selectedListName;
	}

	this.init = function() {
		this.wordGroup = JSON.parse(this.wordGroupJson);
		//this.updateWordList('WeekDays');
		var wordManagerService = this;

		wordManagerServer.getData().then(function(result) {
			wordManagerService.weekDays = result;
			alert('ok');
			
			wordManagerService.updateWordList('WeekDays');
			
		});

	}

	this.init();
});
