var wordGroupSelectionApp = angular.module("wordGroupSelectionApp", [ 'vocServices' ]);
wordGroupSelectionApp.controller('wordGroupSelection', function( wordGroup) {
	this.wordGroup = wordGroup.getWordGroup();
	console.log(this.wordGroup);
	
});

