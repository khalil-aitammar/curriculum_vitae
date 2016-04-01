'use strict'

var items = [
  {'name':'djengo', 'category_id': 1},
    {'name':'forest' , 'category_id': 2},
      {'name':'max'  , 'category_id': 1}
];



app.controller('itemsIndex',function ($scope) {

})
.controller('itemsList',function ($scope) {
  $scope.items=items;
})
.controller('itemsCreate',function ($scope) {

})
.controller('itemsRemove',function ($scope) {

});
