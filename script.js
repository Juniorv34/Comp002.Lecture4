function test(n){
    //console.log("Good Morning" + n);
    return "hello 2" + n;
}
//test (" Junior");
console.log(test(" Junior2"));
let diameter = 26
if (diameter > 0) {
    let pi = 3.14;
    let circumference = pi * diameter;
    console.log("The circumference is: " + circumference);
}
const greeting = () => {
    sayMorning();
    console.log("Good Morning")
}
const sayMorning = () => {
    return "Good Morning"
}
const chicken = () => { 
    return egg();
};
const egg = () => {
    return chicken();
};
console.log(chicken());