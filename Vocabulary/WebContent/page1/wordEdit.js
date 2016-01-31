var wordEditApp = angular.module("wordEditApp", [ 'xeditable' ]);
wordEditApp.run(function(editableOptions) {
	editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2',
	// 'default'
});
wordEditApp.controller('wordEdit', function($filter) {
	this.myName = 'Doron';

	this.user = {
		status : 2
	};

	this.statuses = [ {
		value : 1,
		text : 'status1'
	}, {
		value : 2,
		text : 'status2'
	}, {
		value : 3,
		text : 'status3'
	}, {
		value : 4,
		text : 'status4'
	} ];

	this.showStatus = function() {
		var selected = $filter('filter')(this.statuses, {
			value : this.user.status
		});
		return (this.user.status && selected.length) ? selected[0].text
				: 'Not set';
	};

	this.checkName = function(data) {
		if (data !== 'awesome') {
			return "Username should be `awesome`";
		}
	};

	this.saveUser = function() {
		console.log('in save form...')
	}

	//
	this.users = [ {
		id : 1,
		name : 'awesome user1',
		status : 2,
		groupName : 'admin'
	}, {
		id : 2,
		name : 'awesome user2',
		status : undefined,
		groupName : 'vip'
	}, {
		id : 3,
		name : 'awesome user3',
		status : 2
	} ];

	this.saveUserFromRow = function(data, id) {
		// $scope.user not updated yet
		console.log('in saveUserFromRow');
	};

	// remove user
	this.removeUser = function(index) {
		this.users.splice(index, 1);
	};

	// add user
	this.addUser = function() {
		this.inserted = {
			id : this.users.length + 1,
			name : '',
			status : null,

		};
		this.users.push(this.inserted);
	};

	this.showUsers = function() {
		console.log(this.users);
	};

});
