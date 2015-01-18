angular.module("shared")

.factory("projectService", ["$http", function($http){
    var projects_ = {};
    projects_.projects = [];

    projects_.getProjects = function(){
     return $http.get('/projects').success(function(data){

         angular.copy(data, projects_.projects);
        });
    }
    projects_.create = function(project){
        return $http.post('/projects', project)
            .success(function(data){
                projects_.projects.push(data);
        });
    };

    projects_.update = function(){
        projects_.getProjects();

        console.log(projects_.projects);
    };

    return projects_;
}]);