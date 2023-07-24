nums = (list) =>{
    let result = []
    for (let i = 0; i < list.length; i++) {
     if(!list.find(e=> e === i+1)) result.push(i+1)
    }
    return result
}
module.exports = nums;
