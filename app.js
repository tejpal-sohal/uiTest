var app = angular.module("app", []);

app.controller("mainCtrl", function($scope,$http){

  $scope.press = () => {
    let registration_number = $scope.registrationNumber;
    let legal_structure = $scope.legalStructure;
    let name = $scope.name;
    let email = $scope.signatoriesEmail;
    let signatoriesName = $scope.signatoriesName;
    let signatoriesSurname = $scope.signatoriesSurname;

    let obj = { registration_number,
               legal_structure,
               name,
               email,
               signatoriesName,
               signatoriesSurname }

               $http({
               method: 'POST',
               url: 'https://api.sandbox.autoenrolment.co.uk/companies',
               data: obj,
                    }).then(function successCallback(res) {
                      $scope.companies = res;

                    }, function errorCallback(res) {
                      $scope.e = res.data;
               });

 }




});
