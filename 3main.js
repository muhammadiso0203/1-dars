function elementQidirish(arr, element) {
    for (let i in arr) {
        if (arr[i] === element) {
            return i
        }
    }

    return -1
}

console.log(elementQidirish([10, 20, 30, 40, 50], 30));