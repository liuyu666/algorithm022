/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function(root) {
//     let res = []
//     function preOrder(root) {
//         if(root == null) return
//         res.push(root.val)
//         preOrder(root.left)
//         preOrder(root.right)
//     }
//     preOrder(root)
//     return res
// };

// var preorderTraversal = function(root) {
//     let res = []
//     let stack = []
//     while(root || stack.length) {
//         if(root) {
//             res.push(root.val)
//             stack.push(root)
//             root = root.left
//         }else {
//             root = stack.pop()
//             root = root.right
//         }
//     }
//     return res
// };




//深度优先
// var preorderTraversal = function(root) {
//     let res = [];
//     let stack = [];
//     while(root || stack.length) {
//         if(root) {
//             res.push(root.val)
//             stack.push(root);
//             root = root.left;
//         }else {
//             root = stack.pop()
//             root = root.right
//         }
//     }
//     return res
// };
//递归
// var preorderTraversal = function(root) {
//     let res = [];
//     function preOrder(node){
//         if(!node) return
//         res.push(node.val)
//         preOrder(node.left)
//         preOrder(node.right)
//     }
//     preOrder(root)
//     return res
// };

//广度优先


var preorderTraversal = function(root) {
    if(!root)return []
    let q = [root];
    let res = []
    while(q.length>0) {
        let n = q.pop()
        res.push(n.val)
        n.right && q.push(n.right)
        n.left && q.push(n.left)
    }
    return res
}