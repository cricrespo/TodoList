
angular.module('app').service('todoService', ['$http', '$firebaseArray', '$firebaseObject', todoService]);

function todoService($http, $firebaseArray, $firebaseObject){

    console.log('List Todo');

    var todo =  {
        list: [],
        objectList: {},
        get: get,
        add: add,
        clear: clear
    };

    init();

    return todo;

    function init() {
		var ref = firebase.database().ref('todolist-cede0');
		todo.list = $firebaseArray(ref);
		todo.objectList = $firebaseObject(ref);
		console.log('list');
    }
    
    function add(todObject){
        todo.list.$add(todObject);
    }


}