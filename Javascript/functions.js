function greetings(name){
    console.log("Welcome to the MERN class", name)
}

function add(x,y){
    if (typeof x!='number' || typeof y!='number'){
        throw new Error("Argument invalid")
    }
    const res = x+y;
    return res;
}

console.log("START");
greetings("Surabhi");
console.log(add(5,3));

try{
    console.log(add(true,10));
} catch (e) {
    console.log(e.message);
}