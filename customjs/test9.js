var test = angular.module('test9app',['ngRoute']);
//factory
test.factory('factoryDaftar', function($http){
    var factoryDaftar = {};
    //getdata
    factoryDaftar.getdaftar = function(){
        return $http.get('http://localhost/belajarangular/php/getdata.php');
    };
    //postdata
    factoryDaftar.postdaftar = function(daftaradd){
        return $http.post('http://localhost/belajarangular/php/add.php', daftaradd);
    };
    return factoryDaftar;
});
//directive template
test.directive('templateh', function(){
   return{
       restrict: 'A',
       templateUrl: 'http://localhost/BelajarAngular/template/header1.html'
   } 
});
test.directive('templatec', function(){
   return{
       restrict: 'A',
       templateUrl: 'http://localhost/BelajarAngular/template/controll9.html',
       controller: function($scope, factoryDaftar){
        /**   $scope.daftarnama = [{"id":"1","nama":"jodi","kota":"solo"},{"id":"2","nama":"masduki","kota":"semarang"}]; **/ 
          factoryDaftar.getdaftar().then(function(hasil){
               $scope.daftarnama = hasil;
           });
       }
   } 
});
test.directive('templaten', function(){
   return{
       restrict: 'A',
       templateUrl: 'http://localhost/belajarangular/template/navigation9.html'
   } 
});
//route
test.config(function($routeProvider){
    $routeProvider
    .when('/tambah',{
        templateUrl: 'http://localhost/belajarangular/template/add9.html',
        controller: 'add'
    })
    .when('/lain',{
        templateUrl: 'http://localhost/belajarangular/template/dda7.html'
    })
    .otherwise({redirectTo: '/'});
});
//function tambah() di template controll7
test.controller('add', function($scope, $http, factoryDaftar){
    $scope.tambahdata = function(){
        //isi variabel daftarbaru
        daftarbaru = {
            nama: $scope.daftarbaru.nama,
            kota: $scope.daftarbaru.kota
        };
        //post data ke http
        factoryDaftar.postdaftar(daftarbaru).then(function(hasil){
            //jika berhasil lalu post data dari daftar baru ke daftarnama.data
            $scope.daftarnama.data.push({
                nama: $scope.daftarbaru.nama,
                kota: $scope.daftarbaru.kota
            });
            //kosongkan form setelah di post
            $scope.daftarbaru.nama = '';
            $scope.daftarbaru.kota = '';
            //untuk alert
            window.alert(hasil.data);
        });
    };
});