/* Problem 1
    -The time and space complexity are O(N) it needs to iterate the array and validate all position one time
    -The size of the res Map depends on the number of elements found in the nums array.*/
    list = (nums,target)=>{
    //create a map to save the num values to then validate if it contains its complement
    const res= new Map()
    //iterate by the nums length
    for(ind = 0; ind < nums.length; ind++){
        // for each iteration get the number in the position i of the nums array 
        //with the const num obtained calculate the complement 
        const num = nums[ind]
        const complement = target - num

        /*then validate if the res map has a propertie named like the complement result 
          if it is contains it, it will retur the position of the complemtent and the current index(ind)
          the values that will contain the res Map are the property name as
          the complement value and its value will be the position of nums array where the value is*/
        if(res.has(complement)){
            return [res.get(complement), ind]
        }
        //if res has not the complemt then we save the num  and the current index to later
        //  be able to be validated as a complement
        res.set(num, ind)
    }
    return []
}
module.exports = list;
