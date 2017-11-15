angular.module('app').controller('todoController', ['$routeParams', 'todoService', todoController]);

function todoController($routeParams, todoService) {

    var self = this;

    self.title = '';
    self.todo = '';

    var data = todoService.get($routeParams.id);

    self.title = data.title;
    self.todo = data.todo;

}    