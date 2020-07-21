function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele != value;
  });
}
var result = arrayRemove(array, 6); // result = [1, 2, 3, 4, 5, 7, 8, 9, 0]
