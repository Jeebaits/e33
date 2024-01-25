// Create a foreach function
function foreach(arr, task){
    var arr2 = [];
    for(let i = 0; i < arr.length; i ++){
        arr2[i] = task(arr[i]);
    }
    return arr2;
}

//1 
let result = foreach([6,2,3,4,5], function(num) { return num*2; });
console.log(result); //this should log [12,4,6,8,10]

//2
result = foreach([1,2,3,"kodego", "bootcamp"], function(val) {
    return(typeof(val) === 'number' ? 0 : val);
});
console.log(result); //this should log [0,0,0,"kodego","bootcamp"];

//3
result = foreach([1,2,3,"hello"], function(val) { return typeof(val); });
console.log(result); //this should log ["number", "number", "number", "string"];