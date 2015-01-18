angular.module('sharedUI')

.directive('drEditableText', function(){
    return {
    restrict: "A",
    require: "ngModel",
    scope: {
        onDelete: "&",
        drUpdate: "&"
    },
    link: function(scope, element, attrs, ngModel) {
      function read() {

        ngModel.$setViewValue(element.text());
          scope.drUpdate();
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keydown change", function(event) {
          
          //prevent newline
          if(event.which == 13){
            event.preventDefault();
          }
          
          //lose focus on enter or esc
          if(event.which == 27 || event.which == 13){
            element[0].blur();
          }
          
          scope.$apply(read);
          
          
      });
    }
  };
});
