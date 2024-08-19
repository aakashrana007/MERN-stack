const radii=[1,2,3,4,5,6];

const diameter = (radius) => 2 * radius;

const area = (radius) => Math.PI * radius * radius;

const perimeter = (radius) => 2 * Math.PI * radius;

function calculator(radii, logic) {
    const res = [];

    for(let radius in radii){
        res.push(logic(radius));
    }
    return res;
}

console.log(calculator(radii, diameter));
console.log(calculator(radii, area));
console.log(calculator(radii, perimeter));