app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.model = { title: 'Pizza Builder', availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'], toppings: []
     };
     $scope.model.disp=0;
     $scope.model.asd=0;
        $scope.addTopping= function(topping){
            $scope.model.toppings.push(topping);
            $scope.model.search=null;
            $scope.model.disp=1;
        }
     }
]);