//Controller

angular.module('app').controller('addListController',['todoService', addList]);

console.log('controller');

    function addList(todoService){

        var self = this;
        
        self.add = "";
        self.title = "";
        self.todo = "";
        self.calendar = "";
        self.time =  "";
        self.update = update;


    function update(){

        var newTodo = {
            "title" : self.title,
            'todo' : self.todo,
            'calendar' :  Date(self.calendar | 'medium'),
            'time' : Date(self.time | "HH:mm:ss" )
        };
    
        todoService.add(newTodo);
        console.log(todoService.list);
    }
}




