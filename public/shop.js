"use strict";
{
    let shop ={
        controller: function(itemsService){
            let vm = this;
            itemsService.getItems().then(function(response){
                vm.items = response;
            });
            
        },
        template:`<p> Hello World </p>
                <div ng-repeat="item in $ctrl.items"> 
                    <p> {{item.name}}</p>
                    <p> {{item.price}}</p>
                </div>
        `

    }
    shop.$inject= ["ItemsService"];

    angular
        .module("app")
        .component("shop", shop)
}