/**
 * Created by Joseph on 8/25/2014.
 */
angular.module('RemainingTasks', [])
    .directive('remainingTasks', function() {
        return {
            restrict: 'A',
            scope: true,
            templateUrl: "js/directives/templates/RemainingTasks.html",
            controller: function() {
            }
        }
    });