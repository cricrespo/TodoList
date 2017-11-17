angular.module('app').controller('showTodoController', [ 'todoService', showTodoController]);


function showTodoController(todoService){

    var self = this;

    self.title = "";
    self.todo = "";
    self.calendar = "";
    self.time =  "";


    var data = todoService.get();
    return data;



}