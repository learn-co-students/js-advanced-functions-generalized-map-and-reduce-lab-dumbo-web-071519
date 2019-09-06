function map(arr, fn) {
    const newArr = []
    arr.forEach((val) => {
        newArr.push( fn(val) )
    })
    return newArr
}

function reduce(arr, fn, start) {
    let result = start || arr[0]
    for (let i = start ? 0 : 1; i < arr.length; i++) {
        result = fn(arr[i], result);
    }
    return result;
}