var nav = angular.module("navigator", ['ui.router','dogApp','showWordsApp','wordGroupSelectionApp']);

nav.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
        url: '/home',
        templateUrl: '../main/partial_home.html'
    })
    
        .state('word_group_selection', {
        url: '/word_group_selection',
        templateUrl: '../wordGroupSelection/wordGroupSelection.html'
    })
    
         .state('show_words', {
        url: '/show_words',
        templateUrl: '../show_words/show_words.html'
    })
    
    
     .state('word_selection', {
        url: '/word_selction',
        templateUrl: '../show_words/word_selection.html'
    })
    
     .state('write_words', {
        url: '/write_words',
        templateUrl: '../show_words/write_words.html'
    })
     .state('edit_words', {
        url: '/edit_words',
        templateUrl: '../wordGroupSelection/wordGroupEditor.html'
    })
    
    


    // nested list with custom controller
    .state('home.list', {
        url: '/list',
        templateUrl: '../page1/partial-home-list.html',
        controller: 'dogs'
    })

    // nested list with just some random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
        url: '/about',
        views: {

            // the main template will be placed here (relatively named)
            '': { templateUrl: '/page1/partial-about.html' },

            // the child views will be defined here (absolutely named)
            'columnOne@about': { template: 'Look I am a column!' },

            // for column two, we'll define a separate controller 
            'columnTwo@about': { 
                templateUrl: '/page1/table-data.html',
                controller: 'scotchController'
            }
        }
        
    });

});

nav.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});



