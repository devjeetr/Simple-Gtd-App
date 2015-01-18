angular.module('sharedUI')

.directive('drFocusable', function($timeout){
    return{
        restrict: 'A',
        scope:{
            focus: "="
        },
        link: function(scope, elem, attrs){
            scope.$watch('focus', function(){
                $timeout(function(){
                   elem[0].focus(); 
                })
            });
        }
    };
});