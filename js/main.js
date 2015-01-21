//Create the module. Next step is to add it to the html body using the ng-app directive to your main html page.
var app = angular.module('pirateTalk', []);


app.factory('PirateTalk', function ($http){
	
	return {
		translate: function(textToTranslate, successCallback){
			var apiURL = "http://isithackday.com/arrpi.php?text=" + textToTranslate + "&format=json&callback=JSON_CALLBACK";
			$http.jsonp(apiURL)
			.success(function(response){ 
				successCallback(response.translation.pirate); //for simplicity in this tutorial, using a callback instead of a promise
			});
		}
	}
});


//Create the controller. For simplicity, including this in one file, rather than separating this out.
app.controller('PirateController', function($scope, PirateTalk){
	
	//cast a controller instance into a variable, naming it 'vm' which stands for ViewModel. This is simply based on style guidelines
	var vm = this;
	vm.appTitle = "Talk Like A Pirate";
	vm.newText = PirateTalk.blah;
	vm.dataLoading = false;

	$scope.sendText = function(){
		vm.dataLoading = true;
		PirateTalk.translate($scope.originalText, function success(data){
			$scope.originalText = null; //reset the value of the text area field
			vm.newText = data;
			vm.dataLoading = false;
		});
	};
});
