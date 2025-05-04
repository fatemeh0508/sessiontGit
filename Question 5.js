#Fatemeh Barzanouni
# Question 5 (04/02/08)


function mergeObjects(obje1, obje2) {
    for (let key in obje2) {
        obj1[key] = obje2[key]; 
    }
    return obj1; 
}


let object1 = { a: "Fatemeh", b: "Narges" };
let object2 = { c: 3, d: 4 };

console.log(mergeObjects(object1, object2)); 



