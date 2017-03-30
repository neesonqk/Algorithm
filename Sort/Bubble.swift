import Foundation

func sort(array: [Int]) -> (sortedArray: [Int], looped: Int) {
    let sortedArray = NSMutableArray(array: array)
    var sortAboveIndex = array.count
    
    //record loop times
    var loopCounter = 0; 

    repeat {
        for i in 1 ..< sortAboveIndex {
            if sortedArray[i - 1] as! Int > sortedArray[i] as! Int {
                sortedArray.exchangeObject(at: i, withObjectAt: i - 1)   
            }
            loopCounter += 1
        }
        sortAboveIndex -= 1
    } while sortAboveIndex != 0

    return (sortedArray as NSArray as! [Int], loopCounter)
}

func sortOptimized(array: [Int]) -> (sortedArray: [Int], looped: Int) {
    let sortedArray = NSMutableArray(array: array)
    var sortAboveIndex = array.count
    
    //record loop times
    var loopCounter = 0; 

    repeat {
        var lastSwapIndex = 0;

        for i in 1 ..< sortAboveIndex {
            if sortedArray[i - 1] as! Int > sortedArray[i] as! Int {
                sortedArray.exchangeObject(at: i, withObjectAt: i - 1)   
                lastSwapIndex = i
            }
            loopCounter += 1
        }
        sortAboveIndex = lastSwapIndex
    } while sortAboveIndex != 0

    return (sortedArray as NSArray as! [Int], loopCounter)
}

let myArray = [21, 34, 3, 32, 82, 55, 89, 50, 37, 5, 64, 35, 9, 70]
print(myArray)

let result = sort(array: myArray)
print("\(result.sortedArray), looped \(result.looped) times")

let result2 = sortOptimized(array: myArray)
print("\(result2.sortedArray), looped \(result2.looped) times")