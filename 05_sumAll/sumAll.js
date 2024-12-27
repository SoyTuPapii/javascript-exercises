const sumAll = function(...arr) {

    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) {
            return "ERROR";  // Return error if any value is not an integer
        }
        if (arr[i] < 0) {
            return "ERROR";  // Return error if any value is not an integer
        }
    }    


    let list = arr.sort((a, b) => a - b);;

    let a = list[0]; //smallest number
    let b = list[1]; //largest number
    let c = 0; //sum total

    while ( a <= b) {
        c = c + a;
        a += 1;
    }

    return c
};

// Do not edit below this line
module.exports = sumAll;
