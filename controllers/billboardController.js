//Controller

angular.module('app').controller('billboardController' ,['list', searchBillboard]);


function searchBillboard(list){

    var self = this;
    self.list = list;
    self.code;
    self.search = search;

    function search(){
        
            list.get(self.list);
        
        }
        

}


