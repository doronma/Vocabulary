angular.module("myApp", ['navigator']).

controller("mainController", function (wordManagerSession) {
	this.isGroupSelected = function(){
		var booleanResult = !(wordManagerSession.getSelectedGroupName()==null);
		return booleanResult;
	}

});
