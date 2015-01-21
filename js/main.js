//Create the module. Next step is to add it to the html body using the ng-app directive to your main html page.
var app = angular.module('pirateTalk', []);


app.factory('PirateTalk', function ($http){
	return {
		translate: function(textToTranslate){
			var apiURL = "http://isithackday.com/arrpi.php?text=" + textToTranslate + "&format=json&callback=JSON_CALLBACK";
			$http.jsonp(apiURL)
			.success(function(response){ console.log(response);return response; });
		}
	}

});




//Create the controller. For simplicity, including this in one file, rather than separating this out.
app.controller('PirateController', function($scope, PirateTalk){
	
	//cast a controller instance into a variable, naming it 'vm' which stands for ViewModel. This is simply based on style guidelines
	var vm = this;
	vm.appTitle = "Talk Like A Pirate";

	PirateTalk.translate('Hello my friend, do you know where I can get a beer');

});
