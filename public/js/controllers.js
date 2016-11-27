var doacao = angular.module('doacao', ['ng', 'ngRoute']);

/*
doacao.controller('itensTableController', function($scope) {
	//console.log("item: " + item);
	//console.log("categoria: " + category);
	//console.log("foto: " + photo);
});*/

doacao.controller('ngoController', function($scope, $http) {
    $http.get('http://openalvaras.herokuapp.com/alvaras/items?find={%22NOME_EMPRESARIAL%22:%22A%20A%20C%20P%20ASSOCIACAO%20DE%20APOIO%20A%20CRIANCA%20COM%20PARALISI%22}&limit=3').success(function(data) {
		$scope.license = data.NUMERO_DO_ALVARA;
		$scope.street = data.ATIVIDADE_SECUNDARIA2;
		$scope.number = data.ENDERECO;
		$scope.zipcode = data.BAIRRO;
    });
});
