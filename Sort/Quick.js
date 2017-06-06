//Quick sort
function sort(array, left, right) {
    if (left >= right) {
        return;
    }
    
    let pivot = array[Math.trunc((left + right) / 2)];
    let index = partition(array, left, right, pivot);
    sort(array, left, index - 1);
    sort(array, index, right);
}

function partition(array, left, right, pivot) {
    while (left <= right) { 
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }

        if (left <= right) {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++; 
            right--;
        }
    }

     return left;
}

let arraySimple = [12, 3, 1, 123, 12, 3, 1, 31, 13, 123, 1, 12, 12333, 1,23, 3, 34, 65, 3, 2]

sort(arraySimple, 0, arraySimple.length - 1);
console.log(arraySimple);
