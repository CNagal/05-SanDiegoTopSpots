angular.module("topspots").factory("topSpotFactory", function($http){
	return{
		getTopSpots: function() {
			return $http.get("topspot.json");
		}
	};
});