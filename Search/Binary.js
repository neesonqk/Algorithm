function search(array, left, right, target) {
    //array[left] > target || array[right] < target) 尝试检查边界，减少不必要的迭代
    if (left > right || array[left] > target || array[right] < target) {
        return "No match."
    }
    
    //left + (right - left) / 2 is better than (left + right) / 2
    //because two integer sum could boundary overflows. 
    let middle = Math.floor(left + (right - left) / 2)
    
    if (array[middle] == target) {
        return `Found ${target} @ index ${middle}`
    }

    if (array[middle] >= target) {
        return search(array, left, middle - 1, target)
    } else {
        return search(array, middle + 1, right, target)
    }
}

let array = [1, 2, 3, 4, 5, 6, 19, 23, 122, 332]

let left = 0, right = array.length - 1
console.log(search(array, left, right, 5));
console.log(search(array, left, right, 3321));
console.log(search(array, left, right, 23));
