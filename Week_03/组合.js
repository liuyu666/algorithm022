var combine = function(n, k) {
    let res = []
    function dfs(path, start){
        if(path.length == k) {
            res.push(path.concat())
            return 
        }
        for(let i = start; i <= n; i++) {
            path.push(i)
            dfs(path, i+1)
            path.pop()
        }
    }
    dfs([], 1)
    return res
};