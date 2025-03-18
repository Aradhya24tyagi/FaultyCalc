let a=Math.random()
console.log(a)
let p=prompt("Enter first number")
let q=prompt("Enter second number")
let r=prompt("Enter operation")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(a<0.1){
r=obj[r];
alert(`The result is ${eval(`${p} ${r} ${q}`)}`)
}

else{
    alert(`The result is ${eval(`${p} ${r} ${q}`)}`)
}