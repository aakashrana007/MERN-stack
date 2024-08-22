//a is Global Scope, also called window object
var a = 100;  //before 2015, older way of declaring variable
 
function add (){
    // res variable has functional scope
    var res = x + y;
    return res;
}
console.log(a);

