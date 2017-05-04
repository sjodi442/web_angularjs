var test = angular.module('test5app',[]);
test.directive('templateheader', function(){
   return{
       restrict: 'A',
       templateUrl: 'http://localhost/BelajarAngular/template/header1.html'
   } 
});
//controller
test.controller('data_orang', function($scope){
    $scope.daftarnama = [{nama: 'jodi', kota: 'surakarta'},
                         {nama: 'irfan', kota: 'Jakarta'},
                         {nama: 'tono', kota: 'semarang'}];
    });