// Fatemeh Barzanouni
// Question 2 (04/02/08)

function findMax(arr) {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    return max;
}

let numbers = [3, 7, 2, 9, 5];
console.log(findMax(numbers)); 

