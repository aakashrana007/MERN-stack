const colors = require('colors');
const figlet = require('figlet');

//for colors library
console.log("Welcome to the npm tutorial".rainbow);

//for figlet library
figlet("Welcome to Node js", function (err,data){
    if(err){
        console.log("error occured");
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});