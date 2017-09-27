'use strict';

angular.module('todoListApp')

.controller('mainCtrl', function($scope, dataService) {
	
	$scope.addTodo = function() {
		var todo = {name: "This is a new todo."};
		$scope.todos.unshift(todo);
	};
	
	$scope.learningNgChange = function() {
		console.log("An input changed");
	};
	
	$scope.helloConsole = dataService.helloConsole;
	
	dataService.getTodos(function(response){
		
			console.log(response.data);
		
			$scope.todos = response.data;
		});
		
	$scope.deleteTodo = function(todo){
		$scope.todos.splice($scope.todos.indexOf(todo), 1);
		dataService.deleteTodo(todo);
	};	
	
	$scope.saveTodos = function() {
		var filteredTodos = $scope.todos.filter(function(todo) {
			if(todo.edited) {
				return todo;
			};
		})
		dataService.saveTodos(filteredTodos);
	};
	
});