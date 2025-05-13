function elementlarniAlmashtirish(arr, index1, index2) {
    let first_element = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = first_element

    console.log(arr)
}

elementlarniAlmashtirish([1, 2, 3, 4, 5], 1, 3);
