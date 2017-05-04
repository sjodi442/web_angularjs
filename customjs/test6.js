var test = angular.module('test6app',[]);
test.directive('templateh', function(){
   return{
       restrict: 'A',
       templateUrl: 'http://localhost/BelajarAngular/template/header1.html'
   } 
});
test.directive('templatec', function(){
   return{
       restrict: 'A',
       templateUrl: 'http://localhost/BelajarAngular/template/controll6.html',
       controller: function($scope){
           $scope.daftarnama = [{nama: 'jodi', kota: 'surakarta'},
                         {nama: 'irfan', kota: 'Jakarta'},
                         {nama: 'tono', kota: 'semarang'}];
       }
   } 
});