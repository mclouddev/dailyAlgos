/* 
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.
Example 1:
Given binary tree[3, 9, 20, null, null, 15, 7],

  3
  / \
9  20
  /  \
15   7

Return its minimum depth = 2.
Example 2:
Given binary tree[2,null,3,null,4,null,5,null,6],

            2
          /    \
      null      3
        /        \
    null          4
      /            \
  null              5
    /                \
null                  6

Return its minimum depth = 5.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// The idea is to traverse the Binary Tree. For every node, check if it's a leaf node. If yes, return 1. If not leaf node, then if the left subtree is "null", then recur for the right subtree. And if the right subtree is "null", then recur for the left subtree. If both left and right subtrees are not "null", then take the minimum of two heights.

// Pseudocode:
// Edge case if root is null return 0
// Base case for the leaf nodes

class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    };

    insert(node, current) {
        // default current to root if no current exists
        if (current === undefined) {
            current = this.root;
        };

        // if empty tree, new node becomes root
        if (current === null) {
            this.root = node;
            return;
        };

        if (current.value > node.value) { // go left
            // check if null and insert
            if (current.left === null) { // <-- base case for inserting left
                current.left = node;
                return;
            } else {
                // otherwise recurse left
                return this.insert(node, current.left); // <-- move current to current.left
            }
        } else if (current.value < node.value) { // go right
            // check if null and insert
            if (current.right === null) { // <-- base case for inserting left
                current.right = node;
                return;
            } else {
                // otherwise recurse right
                return this.insert(node, current.right);
            }
        }
    };

    // --- HELPER METHOD for printing the BST ---
    // Logs this tree horizontally with the root on the left.
    // print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    //   if (!node) {
    //     return;
    //   }

    //   spaceCnt += spaceIncr;
    //   this.print(node.right, spaceCnt);

    //   console.log(
    //     " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) + `${node.val}`
    //   );

    //   this.print(node.left, spaceCnt);
    // }

    // Recursive solution
    minDepth(current, depth) {
        if(current == undefined){
            current = this.root;
            depth = 1
        }
        if(current.left == null && current.right == null){
            return depth
        }
        if(current.left == null && current.right){
            return this.minDepth(current.right, depth + 1)

        }else if(current.right == null && current.left){
            return this.minDepth(current.left, depth + 1)
        }else{
            let right = this.minDepth(current.right, depth + 1)
            let left = this.minDepth(current.left, depth + 1)
            if(left<=right){
                return left
            }else{
                return right
            }
        }
    }
}

console.log("// ----- Binary Tree ----- //");
var myBST = new BST();
myBST.insert(new BSTNode(3))
myBST.insert(new BSTNode(2))
myBST.insert(new BSTNode(7))
myBST.insert(new BSTNode(20))
myBST.insert(new BSTNode(5))
//console.log(myBST);
console.log(myBST.minDepth());
//myBST.print();


/*
1: If root is null, return 0.
2: If root is a leaf, return 1.
3: If left node of root is not null, recursively call getMinDepth to get leftDepth, else set leftDepth to MAX_VALUE
4: If right node of root is not null, recursively call getMinDepth to get rightDepth, else set rightDepth to MAX_VALUE
5: Return 1 + min of leftDepth or rightDepth
*///