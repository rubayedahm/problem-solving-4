function deleteInvalids(array) {
    return array.filter(element => typeof element === 'number' && !isNaN(element));
}

const paraArray = ["1" , {num:2} , NaN];
console.log(deleteInvalids(paraArray))