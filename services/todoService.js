
angular.module('app').service('todoService', ['$http', '$firebaseArray', '$firebaseObject', todoService]);


function todoService($http, $firebaseArray, $firebaseObject){

	console.log('Product Service instantiated!')

    var todo = {
        list: [],
        objectList: {},
        add: add
    };

    init();

    return todo;

    function init() {
		var ref = firebase.database().ref('TodoList');
		todo.list = $firebaseArray(ref);
		todo.objectList = $firebaseObject(ref);
		console.log('list');
    }


    
    function add(todObject){
        
        todo.list.$add(todObject);
    }


}