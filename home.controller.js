	angular.module("topspots").controller('HomeController', function($scope, topSpotFactory) {
    topSpotFactory.getTopSpots().then(
        function(response) {
        	console.log(response);
        	console.log(response.data);
            $scope.topspots = response.data;

        },
        function(err) {
            alert(err);
        }
    );
});
