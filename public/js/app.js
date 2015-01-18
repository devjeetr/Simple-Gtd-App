angular.module("sharedUI", ['ui.keypress']);
angular.module("mainDash", []);
angular.module("shared", []);

angular.module("app", ['sharedUI', 'mainDash', "shared"])

.controller("testCtrl", ["projectService", function(prjs) {
    var vm = this;
    vm.newProjText = "";

    vm.Projects = prjs;
    vm.Projects.update();

    vm.createProj = function (name) {
        return {
            projectName: name ,
            taskList: []
        };
    };


    vm.Update = function(){
        prjs.projects = 
    };


    vm.OnAdd = function(){
        prjs.create(vm.createProj(vm.newProjText));
        prjs.update();
        //console.log(vm.Projects[0]);
        vm.newProjText = "";
    };
}])

