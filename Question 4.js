#Fatemeh Barzanouni
# Question 4 (04/02/08)

function swapKeysAndValues(obj) {
    let swappedObj = {}; 
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            swappedObj[obj[key]] = key; 
        }
    }
    return swappedObj;
}


let exampleObj = { a: "Fatemeh", b: "Narges", c: "Mari" };
console.log(swapKeysAndValues(exampleObj)); 



