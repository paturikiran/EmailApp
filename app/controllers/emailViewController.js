/**
 * Created by kiran on 8/20/2015.
 */
/**
 * Created by kiran on 8/20/2015.
 */
(function() {
    'use strict';

    var emailViewController = function (fetchDataService, $scope) {
        var url = 'app/mock/emails.json';
        fetchDataService.getContent(url)
            .then(function(response){
                $scope.emails = response.data;
            });
    };

    angular.module('iisEmail')
        .controller ('emailViewController',
        ['fetchDataService', '$scope', emailViewController]);
}());