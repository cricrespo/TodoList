//Controller

angular.module('app').controller('addListController' ,addList);


function addList(){

    var self = this;
    self.add = "";
    self.title = "adasdsa";
    self.todo = "";


    self.update = function(){

        var newTodo = {

            "title" : self.title,
            'todo' : self.todo

        };

        todoService.add(newTodo);
        console.log(todoService.list);

        
    }
        

}



