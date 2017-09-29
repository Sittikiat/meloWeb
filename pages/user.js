let app = angular.module("user", ['naif.base64']);

let url = "http://localhost:3000";

app.controller("userCtrl", ($scope, $http) => {
    
    $scope.insertData = function() {

        // check
        if ($scope.username_user == null) {
            alert("Require Username");
            return false;
        }
        if ($scope.password_user == null) {
            alert("Require Password");
            return false;
        }
        if ($scope.email_user == null) {
            alert("Require Email");
            return false;
        }

        if ($scope.image_user == null) {
            alert("Require Image");
            return false;
        }

        let data = {
            "username": $scope.username_user,
            "password": $scope.password_user,
            "email": $scope.email_user,
            "image": $scope.image_user
        }

        $http.post(`${url}/newuser`, data)
            .then((value) => {
                if (value) console.log("Insert Success"); 
                location.reload();
            })
            .catch(() => {
                alert("Error");
            });
    };

    $scope.selectData = function() {
        $http.get(`${url}/user`)
            .then((value) => {
                $scope.users = value.data;
            })
            .catch(() => {
                alert("Error");
            });
    }

    $scope.editData = function(user) {
        $scope.id = user.id_user;
        $scope.username_user = user.username_user;
        $scope.password_user = user.password_user;
        $scope.email_user = user.email_user;
    }

    $scope.updateData = function() {
        // check
        if ($scope.username_user == null) {
            alert("Require Username");
            return false;
        }
        if ($scope.password_user == null) {
            alert("Require Password");
            return false;
        }
        if ($scope.email_user == null) {
            alert("Require Email");
            return false;
        }
        let data = {
            "id": $scope.id,
            "username": $scope.username_user,
            "password": $scope.password_user,
            "email": $scope.email_user
        }

        $http.put(`${url}/edituser`, data)
            .then((value) => {
                if (value) console.log("Edit Success");
                $scope.selectData();
            })
            .catch(() => {
                alert("Error");
            });
    }

    $scope.delData = function(id) {
        $http.delete(`${url}/deluser/${id}`)
        .then((value) => {
            if (value) console.log("Delete Success");
            $scope.selectData();
        })
        .catch(() => {
            alert("Error");
        });
    }
});