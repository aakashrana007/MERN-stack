//program that call a function with 3 seconds delay

function fun(){
    console.log("Lets have fun")
}


console.log("Start")

function delay() {
    const curr_time = new Date().getTime();  //a time counter for each milisec
                                            //since 1980
    const endTime = curr_time + 3000;
    while(new Date().getTime() < endTime){}
    fun();
}

delay();

console.log('END');