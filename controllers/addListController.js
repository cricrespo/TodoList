//Controller

angular.module('app').controller('addListController' ,addList);


function addList(){

    var self = this;
    self.add = "";
    self.title = "";
    self.todo = "";


    function update(){

        var newTodo = {

            "title" : self.title,
            'todo' : self.todo

        };

        todoService.add(newTodo);
        console.log(todoService.list);

        
    }
        

}


