//for loop
//0+1=1 
for(let i=1; i<=10 ;i++)
{
    console.log(i)
}

let x=0
for(let i=1;i<=10;i++)
{
    x+=i  //x=x+i    //0=1=1 1+2=3 3+3=6 6+4=10 10+5=15
    console.log(x)   //hide this and check the output and release console outside the loop
}
//console.log(x)

//using array
let arr=["apple","orange","banana","kiwi","papaya"]
//let emp=" "
for(let i=0;i<arr.length;i++){
  //  emp=emp+arr[i]+"|"
    console.log(arr[i])
    
 }

//using string

let str="java script"
for(let i=0;i<=str.length;i++)
{
    console.log(str[i])
}

//while loop

let a=1
while(a<=10){
    console.log(a)
    a++ // give i++ after  and before the print statement and check the o/p
}

//do while loop

let i=0
do{
    console.log(i)
    i++
}
while(i<=10)