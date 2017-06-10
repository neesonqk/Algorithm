/**
 * Shell sort is an improved insertion sort.
 */
function sort(array, gap) {
    if (gap == 0) {
        return;
    }
    for (let i = 0; i + gap < array.length; i++) {
        let j = i + gap;
        while (j - gap > -1 && array[j - gap] > array[j]) {
            let temp = array[j];
            array[j] = array[j - gap];
            array[j - gap] = temp;
            j -= gap;
        }
    }
    
    console.log(array.toString());
    sort(array, Math.floor(gap / 2));
}

let arraySimple = [12, 3, 1, 123, 12, 3, 1, 31, 13, 123, 1, 12, 12333, 1, 23, 3, 34, 65, 3, 2]
sort(arraySimple, Math.floor(arraySimple.length / 2))

//console.log(arraySimple.toString())