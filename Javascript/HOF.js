const radii=[1,2,3,4,5,6];

function area(radii){
    const res = [];
    for(let radius in radii){
        res.push(Math.PI*radius*radius);
    }
    return res;
}

function perimeter(radii){
    const res = [];
    for(let radius in radii){
        res.push(Math.PI*radius*2);
    }
    return res;
}

function diameter(radii){
    const res = [];
    for(let radius in radii){
        res.push(2*radius);
    }
    return res;
}

console.log(diameter(radii));
console.log(perimeter(radii));
console.log(area(radii));