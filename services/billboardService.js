//Service

angular.module('app').service('list', ['$http', listService]);

function listService ($http){

    var billboard = {
        
        get:get,
        list:[]

    }

    return billboard;

    // const imdb = require('imdb-api');

    function get(billboardId){

        $http.get('http://www.omdbapi.com/?t=batman&apikey=4ef6afba')
        .then(function(data, status,headers,config){
            console.log(data, 'bien');
            billboard.list = data.data;
        }, function(data, status,headers,config){
          //Error
          console.log(data, 'Mal');
        });        



    }    
}
