angular.module("restaurantModule", ['naif.base64']); // setter
let restaurant = angular.module("restaurantModule"); // getter
let url = "http://sittikiat.streetfood.in.th:4444";

restaurant.controller("restaurantCtrl", ($scope, $http) => {
    $scope.selectData = function() {
        $http.get(`${url}/restaurant_category`)
            .then((value) => {
                $scope.categorys = value.data;
            })
            .catch(() => {
                alert("Error");
            });
        $http.get(`${url}/menu`)
            .then((value) => {
                $scope.menus = value.data;
            })
            .catch(() => {
                alert("Error");
            })
        $http.get(`${url}/restaurant`)
            .then((value) => {
                $scope.restaurants = value.data;
            })
            .catch(() => {
                console.log("select restaurant fail");
            })
    }

    $scope.insertData = function() {

        let data = {
            "name": $scope.name_restaurant,
            "comment": $scope.comment_restaurant,
            "rate": $scope.rate_restaurant,
            "address": $scope.address_restaurant,
            "image": $scope.image_restaurant,
            "category": $scope.id_restaurant_category,
            "menu": $scope.id_menu
        }

        $http.post(`${url}/newrestaurant`, data)
            .then((value) => {
                if (value) alert("insert restaurant success");
            })
            .catch(() => {
                alert("insert restaurant fail");
            });
        

    }

    $scope.delData = function(id) {
        let check = confirm("Delete ?");
        if (check) {
            $http.delete(`${url}/delrestaurant/${id}`)
            .then((value) => {
                if (value) console.log("Delete Success");
                $scope.selectData();
            })
            .catch(() => {
                alert("Error");
            });
        }
    }





});
