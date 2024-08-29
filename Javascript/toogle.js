//program to toogle two photos constantly in 2sec interval

const image = document.querySelector('img');

const url1 = 'https://images.unsplash.com/photo-1724856699034-e80a5799abf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8';

const url2 = 'https://images.unsplash.com/photo-1724676326198-4d3dcb182d9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D';

let isTrue = true;

function toogleImage() {
    if(isTrue) {
        image.setAttribute('src', url1);
    } else {
        image.setAttribute('src', url2);
    }
    isTrue = ! isTrue;  //not of isTrue(true) is false
}

setInterval(toogleImage, 2000);