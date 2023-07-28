function calculateMinCost(arr,n)
{
    // Create a priority queue
        let pq = [];
   
        // Adding items to the pQueue
        for (let i = 0; i < n; i++) {
            pq.push(arr[i]);
        }   
           
        pq.sort(function(a,b){return a-b;});
         
        // Initialize result
        let res = 0;
   
        // While size of priority queue
        // is more than 1
        while (pq.length > 1) {
            // Extract shortest two ropes from pq
            let first = pq.shift();
            let second = pq.shift();
            res += first + second;
            pq.push(first + second);
            pq.sort(function(a,b){return a-b;});
        }
   
        return res;
}
let arr=[4,2,7,6,9];
let n=arr.length;
console.log( calculateMinCost(arr, n));
