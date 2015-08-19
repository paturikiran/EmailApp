/**
 * Created by kiran on 8/19/2015.
 */
app.controller('mainController',['$scope','$state',
    function($scope,$state){
        var initializeCtrl = function () {
        $scope.leftMenu =[
            {"name":"Inbox","emailCount":40},
                {"name":"Starred","emailCount":20
                },
                {"name":"Important","emailCount":10
                },
                {"name":"Sent","emailCount":10
                },
                {"name":"Drafts","emailCount":20
                }


        ];
            $scope.loadView = function(viewname){
                $state.go(viewname);
            };
        };

        initializeCtrl();
    }
]);