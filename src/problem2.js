list = (nums,target)=>{
    const res={}
    for(ind = 0; ind < nums.length; ind++){

        const num = nums[ind]
        const complement = target - num

        if(res.hasOwnProperty(complement)){
            return [res[complement], ind]
        }

        res[num] = ind
    }
    return []
}
module.exports = list;
