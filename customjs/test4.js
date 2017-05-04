var test = angular.module('test3app',[]);
        //controller
        test.controller('data_orang', function($scope){
            $scope.daftarnama = [{nama: 'jodi', kota: 'surakarta'},
                           {nama: 'irfan', kota: 'Jakarta'},
                           {nama: 'tono', kota: 'semarang'}];
        });