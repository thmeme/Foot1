angular.module('app')
    .controller('DashboardController', function($scope, CurrentUser, UserService, NgMap) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
        
    });
