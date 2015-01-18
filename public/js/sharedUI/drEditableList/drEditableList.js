 angular.module('sharedUI')
 
 .directive('drEditableList', function(){
    return{
        restrict: 'E',
        replace: false,
        scope: {
            drList: '=',
            drDisplayVar: "@",
            drOnAdd: "&",
            drNewItemText: "=",
            drUpdate: "&",
            drSelected: '='
        },
        templateUrl: 'js/sharedUI/drEditableList/drEditableList.html',
        link: drEditableListLink
    };
 });
     

function drEditableListLink(scope, elem, attr){
    scope.isEditable = false;
    scope.onFocus = false;
    scope.PrepareForAdd = function(){
        scope.onFocus = true;
        scope.isEditable = true;
    };
    
    scope.OnAdd = function(){
        if(scope.drNewItemText != ""){
            scope.drOnAdd();
            scope.OnCancel();
        }
    };
    
    scope.OnCancel = function(){
        scope.drNewItemText = "";
        scope.isEditable = false;
        scope.onFocus = false;
    };
}
     
            
