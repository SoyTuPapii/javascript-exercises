const removeFromArray = function(array, ...remove) {
    for (let i = 0; i < remove.length; i++) {
        let index = array.indexOf(remove[i]);
        while (index !== -1) {
            array.splice(index, 1); 
            index = array.indexOf(remove[i]); 
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
