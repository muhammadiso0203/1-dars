function diapazondagiElementlar(arr, min, max) {
    let newArr = []

    for (let element of arr) {
        if (element >= min && element <= max) {
            newArr.push(element)
        }
    }

    console.log(newArr)
}

diapazondagiElementlar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7);