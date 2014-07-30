+function(){

    var module = angular.module('switch', [

        // ...

    ]);

    module.directive('switch', function(){

        return {

            link : function($scope, $element, $attributes){

                //

            },

            replace : true,

            restrict : 'E',

            scope : {

                "isLoading" : "=",

                "model" : "=",

                "labels" : "=",

                "left-label" : "=",

                "right-label" : "=",

                "unavailable-label" : "="

            },

            template : [

                '<div>...</div>'

            ].join('')

        };

    });

}();