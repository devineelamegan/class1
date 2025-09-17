//function declaration

function demo(){
    console.log("hi hello")
}
demo()

function demo(fruit){   //parameter
    console.log("my name is",fruit,"i am very good for health")
}
demo("apple")   //argument
demo("banana")

//function expression

let detail=function(name,age){    //assigned to a varaible
    console.log("my name is", name)
    console.log("my age is",age)
}
detail("devi",25)
detail("laksha",6)

//arrow function

let movie=(ticket,snacks,petrol,parking)=>{
    console.log("movie expenses :", ticket+snacks+petrol+parking)
}

movie(100,200,300,150)
movie(120,120,120,120)

//immediate invoke function -- once function defined it gets executed

(function(){
    console.log("hello hii")
})()