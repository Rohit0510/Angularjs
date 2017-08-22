 angular.module("myApp").controller("Assignment6Controller",function($scope){
        $scope.total = 0;
        $scope.names=[{name:"Pizza",price:100},{name:"Burger",price:200},{name:"Shake",price:50},{name:"sandwich",price:150}];
        $scope.selectedItems=[];    
        $scope.value=function(isSelected,item){
            if(isSelected==true){
                $scope.selectedItems.push(item);
                $scope.total = $scope.total + item.price;
              
            }
            else {
                $scope.total = $scope.total - item.price;
                console.log(item.name);
                angular.forEach($scope.selectedItems, function(itemRmv,$index){
                    if(itemRmv.name==item.name)  {
                        $scope.selectedItems.splice($index,1);
                    }
                 })
            }
        } 
    });