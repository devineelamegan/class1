class Info{    //Info first letter starts with uppercase
    name="shalini"
    age=7
    native="coimbatore"    //properties

    details(){
        console.log("my name is",this.name,"my age is",this.age,"my native is",this.native) //methods
   
    }
}

let print=new Info  //new-keyword
print.details()        //calling objects
console.log(print.name)  

//using constructor

class Flower{
    constructor(name,colour,fragance,season){  //creating constructor
        this.name=name
        this.colour=colour
        this.fragance=fragance
        this.season=season
    }
    detail(){                                    //creating objects
        console.log("i am",this.name)
        console.log("my colour",this.colour)
        console.log("my fragance is",this.fragance)
        console.log("my season is",this.season)
    }
}
const rose=new Flower("rose","red","mild","all season")   //creating methods
rose.detail()

const jasmine=new Flower("jasmine","white","heavy","summer")
jasmine.detail()
