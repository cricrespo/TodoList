
angular.module('app').service('todoService', ['$http', '$firebaseArray', '$firebaseObject', todoService]);

function todoService(){

    console.log('List Todo');

    var list =  {
        list: {},
        objectList: {},
        get: get,
        add: add,
        clear: clear,
    };

    init();

    return list;

    function init() {
		var ref = firebase.database().ref('TodoList/Todo');
		product.list = $firebaseArray(ref);
		product.objectList = $firebaseObject(ref);
		console.log('list');
	}


}