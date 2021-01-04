var permute = function(nums) {
    let res = []
    function dfs(path, used) {
        if(path.length == nums.length) {
            res.push(path.concat())
            return 
        }
        for(let num of nums) {
            if(!used[num]) {
                path.push(num)
                used[num] = true
                dfs(path, used)
                path.pop()
                used[num] = false
            }
            
        }
    }
    dfs([], {})
    return res
};