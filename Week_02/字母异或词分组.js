/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//     var h = new Map, prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
//     for(let item of strs) {
//         let q = 1
//         item.split('').forEach(item=>{
//             q *= prime[item.charCodeAt() - 97]
//         })
//         h.has(q)? h.get(q).push(item): h.set(q, [item])
//     }
//     return Array.from(h.values())
// };
var groupAnagrams = function(strs) {
    var h = new Map, prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
    for(let str of strs) {
        let q = 1
        str.split('').forEach(item => {
            q*= prime[item.charCodeAt() - 97]
        })
        h.has(q)? h.get(q).push(str): h.set(q, [str])
    }
    return Array.from(h.values())
};