 function calculateMinCost() {
  let ans = 0,
    arr = document
      .getElementById("rope-lengths")
      .value.split(",")
      .map((val) => parseInt(val));
  while (arr.length > 1) {
    arr.sort((a, b) => a - b);
    arr[1] += arr[0];
    ans += arr[1];
    arr.shift();
  }
  document.getElementById("result").innerText = ans;
}
var n = prompt("Enter the number of elements");
var arr = [];
for (var i = 0; i < n; i++) {
    arr[i] = prompt("Enter element " + (i+1));
}
console.log( calculateMinCost(arr, n));
