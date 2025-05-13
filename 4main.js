function engKattaElement(arr) {
    let maksimal = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maksimal) {
            maksimal = arr[i]
        }
    }

    console.log(maksimal)
}

engKattaElement([3, 5, 12, 21, 4, 7]);