//this fubtion do working 2 valuee add
const addition = (x, y) => {
    return x + y
}

//this fubtion do working 2 valuee multiply
const multiply = (x, y) => {
    return (x * y)
}

//this fubtion do working 2 valuee substruction
const subtraction = (x, y) => {
    return (x * y)
}

//this fubtion do working 2 valuee devide
const divide = (x, y) => {
    return (x * y)
}

//this funtion work add array element...
const addArray = (arr) => {
    const j = (previous, current) => previous + current;
    const ans = arr.reduce(j, 0);
    return ans;
}

// remove duplicate element of an array..and input parameter chaked to validation..
function removeDuplicate(friends) {
    if (Array.isArray(friends) == false) {
        const getError = 'Please give me an array as input';
        return getError;
    }
    else {
        const unickArray = []
        for (let i = 0; i < friends.length; i++) {
            const element = friends[i];
            if (unickArray.indexOf(element) == -1) {
                unickArray.push(element)
            }
        }
        return unickArray;
    }
}


// find out largest element in array.. ues function and in use while loop
function FindMax(price) {
    let i = 0;
    let maxValue = price[0];
    while (i < price.length) {
        const element = price[i];
        if (element > maxValue) {
            maxValue = element;
        }
        else {
            maxValue = maxValue;
        }
        i += 1;
    }
    return maxValue;
}


export { addition, multiply, subtraction, divide, addArray, removeDuplicate, FindMax }

