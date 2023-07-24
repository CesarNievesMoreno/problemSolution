// Problem 1
// The time and space complexity are O(N) it needs to iterate the array and validate all position one time
// The size of the numList set depends on the number of elements found in the nums array.
nums = (list) =>{
    //create a set of the numbers provided in the list array
    //using the set we will remove the duplicate numbers 
    let numList = new Set(list)
    //declare a array where the result numbers will be saved
    let result =[]
    //with this iteration we will have the range of numbers that we are looking for 
    //where each value of i will be the value of the possible missing number
    for (let i = 1; i <= list.length; i++) {
    //for each iteration it check if our set of numbers has the value of i, if it does not
    //exist in the set the value of i is saved in the result array
     if(!numList.has(i)) result.push(i)
    }
    return result
}
module.exports = nums;