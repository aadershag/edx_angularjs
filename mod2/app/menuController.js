app.controller('menuController',[
'$scope',
function($scope){
$scope.model = {title: 'Our Menu'};
$scope.model.mainDish='Nothing';
$scope.model.cost=0;
$scope.$watch('model.mainDish', function (newValue, oldValue) {
    if (newValue === 'Aloo') {
        alert('You have Aloo!!');
    }
});
$scope.changeMainDish=function(itemName,itemcost){
    $scope.model.mainDish=itemName;
    $scope.model.cost=itemcost;
}
}]);