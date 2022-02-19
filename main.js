var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {
    $scope.students = [
        { id: 1, 'name': 'sara', 'score': 10 },
        { id: 2, 'name': 'babak', 'score': 12 },
        { id: 3, 'name': 'mona', 'score': 20 },
        { id: 4, 'name': 'amir', 'score': 17 },
        { id: 5, 'name': 'roya', 'score': 13 },
        { id: 6, 'name': 'arash', 'score': 19 }
    ];
            
            
    $scope.addRow = function () {
        var Profile = {};
        var id = $scope.students.length + 1;
        Profile.id = id;
        Profile.name = $scope.name;
        Profile.score = parseFloat($scope.score);
        $scope.students.push(Profile);
        $scope.name = null;
        $scope.score = null;
    };
            
            
    $scope.removeRow = function () {
        var remove = [];
        angular.forEach($scope.students, function (value) {
            if (!value.Remove) {
                remove.push(value);
            }
        });
        $scope.students = remove;
    };
            
            
    $scope.SortHeader = function(order) {
        if ($scope.Sort === order) {
            if ($scope.Sort.charAt(0) === '+') {
                order = order.replace('+', '-');
            }
            else {
                order = order.replace('-', '+');
                }
        }
        $scope.Sort = order;
    }
            
            
    $scope.selected = function (Cell){
        if($scope.students.filter(x => x.selected).length > 1){
            $scope.Employee = null;
        }
        else {
            $scope.Employee = angular.copy($scope.students.find(x => x.selected));
            document.getElementById("ShowHide").style.display = 'block';
        }
    }
              
              
    $scope.editRow = function () {
        if(!!$scope.students.find(x => x.name === $scope.Employee.name && x.score === $scope.Employee.score)) {
            $scope.errorMessage = true;
            return;
        }
        var employeeToEdit = $scope.students.find(x => x.id === $scope.Employee.id);
        employeeToEdit.name = $scope.Employee.name;
        employeeToEdit.score = parseFloat($scope.Employee.score);
        document.getElementById("ShowHide").style.display = 'none';
    }
    document.getElementById("ShowHide").style.display = 'none';
});