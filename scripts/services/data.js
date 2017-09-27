'use strict';

angular.module('todoListApp')

.service('dataService', function($http){
	this.helloWorld = function() {
		console.log("This is the data service's method!");
	};
	
		
	this.getTodos = function(callback) {
		
			$http.get('mock/todos.json').then(callback)
	}
	
	this.deleteTodo	= function(todo) {
		
		console.log("The" + todo.name + " has been deleted!")
		
	};
	
	this.saveTodos = function(todos) {
		
		console.log(todos.length + " todos have been saved!")
		
	};
	
	this.helloConsole = function() {
		
		console.log('This is the hello console service!');
		
	}
	
});