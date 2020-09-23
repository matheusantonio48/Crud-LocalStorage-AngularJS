var app = angular.module("crud", []);
app.controller("Controller", function ($scope) {

    $scope.index = ''
    $scope.usuario = {};
    $scope.usuarios = JSON.parse(localStorage.getItem('Usuarios')) || [];



    $scope.addUsuario = function () {
        $scope.usuarios.push({ email: $scope.usuario.email, genero: $scope.usuario.genero, nome: $scope.usuario.nome });
        localStorage.setItem('Usuarios', JSON.stringify($scope.usuarios));
        $scope.usuario = {};
        console.log($scope.usuarios)
        toastr.success("Usuario adicionado com sucesso.");

    };

    $scope.editUsuario = function (index) {
        $scope.usuario = $scope.usuarios[index];
        $scope.edit = true;
        $scope.index = index;

    };

    $scope.aplicarMudancas = function () {
        var index = $scope.index
        var altLS = JSON.parse(localStorage.getItem("Usuarios"));
        altLS[index].nome = $scope.usuario.nome;
        altLS[index].email = $scope.usuario.email;
        altLS[index].genero = $scope.usuario.genero;
        localStorage.setItem("Usuarios", JSON.stringify(altLS));
        $scope.index = ''
        $scope.usuario = {};
        $scope.edit = false;
        toastr.success("Usuario alterado com sucesso.");
        $scope.user = {};
    };

    $scope.deleteUsuario = function (index) {
        $scope.usuarios.splice(index, 1);
        localStorage.setItem('Usuarios', JSON.stringify($scope.usuarios));
        toastr.success("Usuario deletado com sucesso.");
    };
});