// find out largest element in array.. ues function and in use while loop
function myFunck(price) {
    let i = 0;
    let maxVAlue = price[0];
    while (i < price.length) {
        const element = price[i];
        if (element > maxVAlue) {
            maxVAlue = element;
        }
        else {
            maxVAlue = maxVAlue;
        }
        i += 1;
    }
    return maxVAlue;
}
const price = [45, 78, 90, 87, 66, 90, 34, 12, 99, 304, 67, 89, 112];
const myResult = myFunck(price);
console.log(myResult);