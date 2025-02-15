
function map(cb,arr){
    let newarr = []
    for(let i =0 ;i<arr.length;i++){
        newarr.push(cb(arr[i],i))
    }
     return newarr
}

let arary = [1,2,3,4,5]

function sum(a,b){
    return a+10
}
let ans = map(sum,arary)
console.log(ans);



