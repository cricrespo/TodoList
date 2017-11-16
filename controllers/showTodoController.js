angular.module('app').controller('showTodoController', [ 'todoService', showTodoController]);


function showTodoController(todoService){

    var self = this;

    self.title = "";
    self.todo = "";
    self.calendar = "";
    self.time =  "";


    var data = todoService.get();

    // for ( var i=0; i<data.length; i++ ){

    //     self.title = data[i].title;
    //     self.todo = data[i].todo;
    //     self.calendar = data[i].calendar;
    //     self.time =  data[i].time;
    // }



}