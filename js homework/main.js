//task-1
let arr = [1,2,3,2,1,4,5];
let uniq =[];
arr.forEach((e)=>{
    if(!uniq.includes(e)){
        uniq.push(e)
    }
});
// let uniq = [...new Set(arr)]

// let uniq = arr.filter((e,ind)=>{
//     return arr.indexOf(e)===ind
// })
console.log(uniq);

//task-2
let arr1 = [2,-3,-4,5,6,24,-44]
 let positiveSquer = arr1.reduce((acc,val)=>{
     if(val > 0){
        let num = val **2
        acc.push(num)
    };
    return acc
 },[])
 console.log(positiveSquer);

//Task-3
let string = 'Azerbijan'

string = [...string].reverse().join('');
console.log(string);