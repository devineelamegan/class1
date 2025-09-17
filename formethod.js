//for in       //ite run based on keys

let obj={
    name:"shalini",
    age:7
}
for (let key in obj)   //key variable we can create whatever variable name as our wish
{
console.log(obj[key])
//   console.log(obj)   //try this 
}

//for of

let arr=["one","two","three","four"]
//let str=devi for string
for( let dummy of arr){
    console.log(dummy)
}

//for each

arr.forEach((Val,ind,arr)=>{
    console.log(val,ind,arr)
})
