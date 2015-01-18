angular.module("mainDash")

.directive('drTask', function(){
   return{
    restrict: "E",
    templateUrl: 'js/mainDash/task/drTask.html'
   };
});