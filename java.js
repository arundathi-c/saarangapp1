// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			url: 'https://en.wikipedia.org/wiki/Cat',
			title: 'Cat',
			image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'
		},
		{
			url: 'https://en.wikipedia.org/wiki/Dog',
			title: 'Dog',
			image: 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'
		},
		{
			url: 'https://en.wikipedia.org/wiki/Lion',
			title: 'Lion',
			image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg'
		},
		{
			url: 'https://en.wikipedia.org/wiki/Tiger',
			title: 'Tiger',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHyg3ktQQPUaN6-j8NEggN6mhasMZ5VyqLNgmhNypQiEzhfuytzQ'
		},
		{
			url: 'https://en.wikipedia.org/wiki/Rabbit',
			title: 'Rabbit',
			image: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Rabbit_in_montana.jpg'
		},
		{
			url: 'https://en.wikipedia.org/wiki/',
			title: 'Giraffe',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvWrdzQ5jd2LXC1LymC2cuDy_CNX0w2LnYnqfko799ay2fe8n'
		},
		{
			url: 'https://en.wikipedia.org/wiki/Hippopotamus',
			title: 'Hippo',
			image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Hippopotamus_amphibius_in_Tanzania_4041_Nevit.jpg/1200px-Hippopotamus_amphibius_in_Tanzania_4041_Nevit.jpg'
		}
	];


}
