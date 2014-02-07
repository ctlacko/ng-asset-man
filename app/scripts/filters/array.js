'use strict';

// this filter takes an array of objects and returns an object containing each object in the array instead
angular.module('rtAssetManagerApp')
.filter('array', function () {
  return function(items) {
    var filtered = [];
    var idx = 0;
    angular.forEach(items, function(item) {
      // we make sure item is an object
      // becuase angularfire returns a bunch of functions with our data
      if(typeof item === 'object') {
        // we'll save the index so we have something to reference the asset by
        item.idx = idx;
        filtered.push(item);
      }
      idx++;
    });
    return filtered;
  };
});
