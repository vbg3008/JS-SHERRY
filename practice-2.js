// day 1 Q9
// let arr = [1,2,3,4,5]

// console.log(arr.reduce((acc , key)=>{
//     return acc+key
// },0))

// day 2 Q1
// for(let i=10;i>0;i--){
//     console.log(i)
// }

// day 2 Q2
// let i = 1;
// while (i <= 10) {
//   console.log(3 * i);
//   i++;
// }

// day 3 Q3
// let count=0
// for(let i=1;i<=100;i++){
//    count+=i
// }
// console.log(count)

// day 4 Q4
// badmeh star loop

// day 4 Q5
// let str = 'JavaScript'
// for(let s of str){
//     console.log(s)
// }

// day 4 Q6  remove duplicate elements
// let arr = [1,2,3,3,4,5,6,7,7,8,8,8]


// console.log([...new Set(arr)])
// console.log(...arr)

// day 5 Q7
// let arr = [5,4,7,3,8,23,1,0,33,55,222,555,34,11]

// let unique = [...new Set(arr)]
// console.log(unique)

// let ans = unique.sort((a,b)=>{
//     return a-b

// })
// console.log(ans[ans.length-2])

// day 5 Q8
// let arr = [5,4,7,3,8,23,1,0,33,55,222,555,34,11]

// console.log(arr.sort((a,b)=>b-a))

// day 5 Q9 reverse an array

// var arr = [1,2,3,4,5,6,7,8,999,88]
// var ans = []

// for(let i=arr.length-1;i>=0;i--){
//     ans.push(arr[i])
// }
// console.log(ans)

// day 3 Q10  most frequent element
let arr = [1,1,2,2,2,2,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,0]
let obj = {}

arr.forEach(function (val){
    obj[val]== undefined ? (obj[val]=1):obj[val]++
})



console.log(obj)






