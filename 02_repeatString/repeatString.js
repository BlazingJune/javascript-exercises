const repeatString = function(string, num) {
    if (num < 0) {
        return ('ERROR')
    }
    addedTogether = "";
    for (let i = 0; i < num; i++) {
        
        addedTogether += string;   
    }
        return addedTogether;
    }

;

// Do not edit below this line
module.exports = repeatString;
