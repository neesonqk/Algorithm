
//reference: https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm

function sort(array) {
    let valueToInsert;
    let holePosition;

    for (let i = 1; i < array.length; i++) {
        valueToInsert = array[i];
        holePosition = i;
        
        while (holePosition > 0 && array[holePosition - 1] > valueToInsert) {
            array[holePosition] = array[holePosition - 1];
            holePosition --;
        }
        
        array[holePosition] = valueToInsert;
    }
}

let arraySimple = [12, 3, 1, 123, 12, 3, 1, 31, 13, 123, 1, 12, 12333, 1,23, 3, 34, 65, 3, 2]
sort(arraySimple)

console.log(arraySimple)