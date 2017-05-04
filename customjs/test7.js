var test = angular.module('test7app',['ngRoute']);
test.directive('templateh', function(){
   return{
       restrict: 'A',
       templateUrl: 'http://localhost/BelajarAngular/template/header1.html'
   } 
});
test.directive('templatec', function(){
   return{
       restrict: 'A',
       templateUrl: 'http://localhost/BelajarAngular/template/controll7.html',
       controller: function($scope){
           $scope.daftarnama = [{nama: 'jodi', kota: 'surakarta'},
                         {nama: 'irfan', kota: 'Jakarta'},
                         {nama: 'tono', kota: 'semarang'}];
       }
   } 
});
//route
test.config(function($routeProvider){
    $routeProvider
    .when('/tambah',{
        templateUrl: 'http://localhost/belajarangular/template/add7.html',
        controller: 'add'
    })
    .when('/lain',{
        templateUrl: 'http://localhost/belajarangular/template/dda7.html'
    })
    .otherwise({redirectTo: '/'});
});
//function tambah() di template controll7
test.controller('add', function($scope){
    $scope.tambahdata = function(){
        $scope.daftarnama.push({
            nama: $scope.daftarbaru.nama,
            kota: $scope.daftarbaru.kota
        });
    };
});