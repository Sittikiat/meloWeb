let app = angular.module("restaurantImageModule", ['naif.base64']);
app.controller("restaurantImageCtrl", ($scope, $http) => {
    let url = "http://localhost:3000";
    $scope.selectData = function() {
        $http.get(`${url}/restaurant`).then((value) => {
            $scope.restaurants = value.data;
        })
    }

    $scope.insertData = function() {
        let data = {
            "image": $scope.name_restaurant_image,
            "nameRestaurant": $scope.name_restaurant
        }

        $http.post(`${url}/newrestaurant_image`, data).then(() => {
            alert("upload mutiple image success");
            location.reload();
        }).catch(() => {
            alert("upload mutiple image fail");
        });
    }
})