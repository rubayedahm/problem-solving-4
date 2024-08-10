function deleteInvalids(array) {
    return array.filter(element => typeof element === 'number' && !isNaN(element));
}

const paraArray = [NaN, 3, true, "no", 34, 643];
console.log(deleteInvalids(paraArray))