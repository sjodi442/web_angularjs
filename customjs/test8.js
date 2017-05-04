var test = angular.module('test8app',['ngRoute']);
test.directive('templateh', function(){
   return{
       restrict: 'A',
       templateUrl: 'http://localhost/BelajarAngular/template/header1.html'
   } 
});
test.directive('templatec', function(){
   return{
       restrict: 'A',
       templateUrl: 'http://localhost/BelajarAngular/template/controll8.html',
       controller: function($scope, $http){
        /**   $scope.daftarnama = [{"id":"1","nama":"jodi","kota":"solo"},{"id":"2","nama":"masduki","kota":"semarang"}]; **/ 
          $http.get('http://localhost/belajarangular/php/getdata.php').then(function(hasil){
               $scope.daftarnama = hasil;
           });
       }
   } 
});
//route
test.config(function($routeProvider){
    $routeProvider
    .when('/tambah',{
        templateUrl: 'http://localhost/belajarangular/template/add8.html',
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
        $scope.daftarnama.data.push({
            nama: $scope.daftarbaru.nama,
            kota: $scope.daftarbaru.kota
        });
    };
});