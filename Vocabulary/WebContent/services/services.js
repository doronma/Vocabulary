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

vocServices.service('wordManager', function() {

	this.animals = '{ "words" : [' + '{ "eng":"Dog" , "heb":"כלב" },'
			+ '{ "eng":"Cat" , "heb":"חתול" },'
			+ '{ "eng":"Elephant" , "heb":"פיל" },'
			+ '{ "eng":"Fish" , "heb":"דג" },'
			+ '{ "eng":"Spider" , "heb":"עכביש" },'
			+ '{ "eng":"Zebra" , "heb":"זברה" },'
			+ '{ "eng":"Shark" , "heb":"כריש" },'
			+ '{ "eng":"Tree" , "heb":"עץ" },'
			+ '{ "eng":"Flower" , "heb":"פרח" },'
			+ '{ "eng":"Frog" , "heb":"צפרדע" }]}';

	this.weekDays = '{ "words" : [' + '{ "eng":"Sunday" , "heb":"יום ראשון" },'
			+ '{ "eng":"Monday" , "heb":"יום שני" },'
			+ '{ "eng":"Tuesday" , "heb":"יום שלישי" },'
			+ '{ "eng":"Wednesday" , "heb":"יום רביעי" },'
			+ '{ "eng":"Thursday" , "heb":"יום חמישי" },'
			+ '{ "eng":"Friday" , "heb":"יום שישי" },'
			+ '{ "eng":"Saturday" , "heb":"יום שבת" }]}';

	this.wordGroupJson = '{"wordGroup" : [' + '{"groupName":"Animals"},'
			+ '{"groupName":"WeekDays"},' + '{"groupName":"WeekDays2"},'
			+ '{"groupName":"WeekDays3"},' + '{"groupName":"WeekDays4"},'
			+ '{"groupName":"WeekDays5"},' + '{"groupName":"WeekDays6"},'
			+ '{"groupName":"WeekDays7"},' + '{"groupName":"WeekDays8"},'
			+ '{"groupName":"WeekDays9"},' + '{"groupName":"WeekDays10"}'
			+ ']}';

	this.getCurrentWordList = function() {
		return this.wordsToLearn.words;
	}

	this.getWordGroup = function() {
		return this.wordGroup.wordGroup;
	}

	this.updateWordList = function(selectedList) {
		if (selectedList == "Animals") {

			this.currentWordListJson = this.animals;
		}
		if (selectedList == "WeekDays") {
			this.currentWordListJson = this.weekDays;
		}
		this.wordsToLearn = JSON.parse(this.currentWordListJson);
		this.selectedListName = selectedList;

	}

	this.getSelectedList = function() {
		return this.selectedListName;
	}

	this.init = function() {
		this.wordGroup = JSON.parse(this.wordGroupJson);
		this.updateWordList('WeekDays');
	}
	this.init();
});
