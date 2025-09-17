let a="abi"
if(a==7){
    console.log("yeah, this is abi")
}

let mark=32
if(mark>=35){
    console.log("pass")
}
else
{
    console.log("fail")

}

let age=30
if(age>=0 && age<=2){
    console.log("infant's")
}
else if(age>2 && age <18){
    console.log("children's")
}
else if(age>18 && age<=50){
    console.log("Adult's")
}
else if(age>50 && age <=100){
    console.log("senior citizen's")
}
else{
    console.log("check the age")
}

//switch
let pet="dog"
switch(pet){
    case"cat":
    console.log("cat is my pet")
    break;
    case"parrot":
    console.log("parrot is my pet")
    break;
    default:
        console.log("I dont have any pets")
}