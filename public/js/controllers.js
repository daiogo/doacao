var doacao = angular.module('doacao', ['ng', 'ngRoute']);

doacao.controller('itensTableController', function($scope) {
	console.log("item: " + item);
	console.log("categoria: " + category);
	console.log("foto: " + photo);
});

/*
smartfare.controller('nameController', function($scope) {});

<div ng-controller="nameController">
	<label>Nome: </label>
	<input type="text" ng-model="myName">
	<h4>Olá {{myName}}</h4>
</div>
*/
