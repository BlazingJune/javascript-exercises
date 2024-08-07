const reverseString = function(string) {

    const stringArray = [];
    const stringLength = string.length; 


 for (let r = 1; r < stringLength; r++) {
        let stringSlicer = string.slice(-r, -(r+1));
        stringArray.push(stringSlicer);        
}

    for (const commas of stringArray) {
        if (commas === ',') {
            stringReversestring.delete continue;
        }
        else  {
        let stringreverseString = stringArray.join();
        return stringreverseString;
    }
    
    }

    return stringreverseString;


};


// Do not edit below this line
module.exports = reverseString;
