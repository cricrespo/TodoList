angular.module('app').controller('showTodoController', [ 'todoService', showTodoController]);


function showTodoController(todoService){

    var self = this;

    self.title = "";
    self.todo = "";
    self.calendar = "";
    self.time =  "";
    self.id = ""
    self.remove = remove;
    

    
    var data = todoService.get();
    return data;


    function remove(id){
        alert(id);
        todoService.remove(id);
    }



}