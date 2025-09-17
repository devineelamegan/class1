//array methods

let mrf=[1,2,3,4,5,6,7,8,9]

//map

let mul=mrf.map(el=>el*2)    //map(parameters)
console.log(mul)

//filter

let even=mrf.filter(el=>el%2==0)
console.log(even)

//reduce    accumulated value-calculating all the values 

let sum=mrf.reduce((acc,cur)=>acc+cur)  //acc- accumulated cur-current value
//let sum=mrf.reduce((acc,cur)=>acc+cur,50) accumulated value-50
console.log(sum)
