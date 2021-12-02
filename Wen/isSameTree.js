/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p,q) {
     if(p === null && q === null){return true}
     else if(p !== null && q !== null){
         if(p.val === q.val){
             if(isSameTree(p.left,q.left)){
                 return isSameTree(p.right,q.right)
             }
         }
     }
     return false
     
};
isSameTree(p,q)