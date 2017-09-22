angular.module("restaurantModule", ["userModule"]); // setter
let restaurant = angular.module("restaurantModule"); // getter

restaurant.controller("restaurantCtrl", ($scope) => {
    $scope.fileNameChanged = function() {
        let input = document.getElementById("image_user");
        let file = input.value.split("\\");
        let fileName = file[file.length - 1];
        console.log(fileName);
    }
});

angular.module("userModule", []);
let user = angular.module("userModule");

user.controller("userCtrl", ($scope) => {
    $scope.username = "mike";
});