+function(){

    var module = angular.module('switch', []);

    module.directive('switch', function($timeout){

        return {

            link : function($scope, $element, $attributes){

                $scope.icon = {

                    left : $attributes.iconLeft,
                    right : $attributes.iconRight

                };

                $scope.label = {

                    left : $attributes.lbLeft,
                    right : $attributes.lbRight,
                    unavailable : $attributes.lbUnavailable

                };

                $scope.setState = function(state, preventEvent){

                    if(!preventEvent) $scope.state = state;

                    $scope.isAvailable = state > 0;
                    $scope.isLoading = !state;
                    $scope.isUnavailable = state < 0;

                };

                if(!angular.isUndefined($attributes.ngDisabled) && !$attributes.ngDisabled){

                    $scope.isDisabled = true;

                }

                if(angular.isUndefined($attributes.swState)){

                    $scope.state = 1;

                }
                else if(!$scope.state) $scope.state = 0;

                $scope.$watch('state', function(newValue, oldValue){

                    if(newValue != oldValue){

                        if(!oldValue){

                            var cycle = 700,
                                delay = new Date().getTime() - $scope.lastStateUpdate || 0;

                            delay = cycle - delay;

                            $timeout(function(){

                                $scope.setState(newValue, true);

                            }, delay > 0 ? delay : 0);

                        }
                        else $scope.setState(newValue, true);

                        $scope.lastStateUpdate = new Date().getTime();

                    }
                    else $scope.setState(newValue);

                });

                $scope.$watch('value', function(newValue, oldValue){

                    if(newValue != oldValue){

                        $scope.$parent.$eval($attributes.ngChange);

                    }

                });

            },

            replace : true,
            restrict : 'E',

            scope : {

                isDisabled : '=?ngDisabled',
                state : '=?swState',
                value : '=ngModel'

            },

            template : [

                '<div class="bpb-switch">',
                    '<div ng-show="isUnavailable">',
                        '<div class="bpb-switch-lb-unavailable">{{label.unavailable}}</div>',
                    '</div>',
                    '<div ng-show="!isUnavailable">',
                        '<img class="bpb-switch-icon-left" ng-show="icon.left" ng-src="{{icon.left}}" />',
                        '<span class="bpb-switch-lb-left" ng-show="isAvailable">{{label.left}}</span>',
                        '<div class="bpb-switch-area" ng-class="{ \'bpb-switch-on\' : value, \'bpb-switch-disabled\' : isDisabled || isLoading }" ng-click="isAvailable && !isDisabled && (value = !value)">',
                            '<div class="bpb-switch-padding">',
                                '<div class="bpb-switch-button"></div>',
                            '</div>',
                            '<div class="bpb-switch-loading" ng-show="isLoading">',
                                '<span class="bpb-switch-loading-block bpb-switch-loading-block-one"></span>',
                                '<span class="bpb-switch-loading-block bpb-switch-loading-block-two"></span>',
                                '<span class="bpb-switch-loading-block bpb-switch-loading-block-three"></span>',
                            '</div>',
                        '</div>',
                        '<span class="bpb-switch-lb-right" ng-show="isAvailable">{{label.right}}</span>',
                        '<img class="bpb-switch-icon-right" ng-show="icon.right" ng-src="{{icon.right}}" />',
                    '</div>',
                '</div>'

            ].join('')

        };

    });

}();