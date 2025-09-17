//call back  

function orderfood(input){     //call back-input()
    setTimeout(() => {
        console.log("i am going to order food")
        input() //created a func parameter and called the function inside itself to excute the code in order
    }, 5000);
}
function eatfood(){
    setTimeout(() => {
        console.log("i am going to eatfood")
    }, 4000);
}
//orderfood(eatfood)

//callback hell

function brush(a){
    setTimeout(() => {
        console.log("time taken for brush 1500") 
        a()  //executes asynch 
    }, 1500);
}
function bath(b){
    setTimeout(() => {
        console.log("time taken for bath 2500")
        b()
    }, 2500);
}
function eat(c){
    setTimeout(() => {
        console.log("time taken for eat 3000")
        c()
    }, 3000);
}
function ready(d){
    setTimeout(() => {
        console.log("time taken for ready 750")
    d()
    }, 750);
}
function relax(){
    setTimeout(() => {
        console.log("time taken for relax 500")
    }, 500);
}
brush(()=>{
    bath(()=>{
        eat(()=>{
            ready(relax)
        })
    })
})