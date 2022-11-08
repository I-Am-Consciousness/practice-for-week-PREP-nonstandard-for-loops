function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let oddArray = [];
    for(let i = 1; i < arr.length; i += 2){
        oddArray.push(arr[i]);
    }
    return oddArray;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    let oddArray = [];
    for(let i = arr.length - 1; i > 0; i--){
        if(!(i % 2 === 0)){
            oddArray.push(arr[i]);
        }
    }
    return oddArray;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let powerArr = [];
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(2**index === i){
            powerArr.push(arr[i]);
            index++;
        }
    }
    return powerArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let powerArr = [];
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(n**index === i){
            powerArr.push(arr[i]);
            index++;
        }
    }
    return powerArr;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let firstHalfArry = [];
    if(arr.length % 2 === 0){
        for(let i = 0; i < arr.length / 2; i++){
            firstHalfArry.push(arr[i]);
        }
    }
    else{
        for(let i = 0; i < (arr.length + 1) / 2; i++){
            firstHalfArry.push(arr[i]);
        }
    }
    return firstHalfArry;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let firstHalfArry = [];
    if(arr.length % 2 === 0){
        for(let i = arr.length / 2; i > 0; i--){
            firstHalfArry.push(arr[i]);
        }
    }
    else{
        for(let i = ((arr.length + 1) / 2)-1; i > 0; i--){
            firstHalfArry.push(arr[i]);
        }
    }
    return firstHalfArry;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
