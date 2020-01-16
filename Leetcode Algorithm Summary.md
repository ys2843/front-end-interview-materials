# Leetcode Algorithm Summary

### Tree (easy)

100 Same Tree

Given two binary trees, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Answer: 

+ Both null, same;
+ One of root is null, not same;
+ The trees are only the same when current root values are the same and their left/right subtree are same tree.

```javascript
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!q && !p) return true;
    if (!q || !p) return false;
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```

101 Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center). 左右子树镜像

Answer: 

```javascript
// Recursive
var isSymmetric = function(root) {
    if (!root) return true;
    return helper(root.left, root.right);
};

var helper = function(left, right) {
    if (!left && !right) return true;
    else if (!left || !right) return false;
    else return left.val === right.val && helper(left.left, right.right) && helper(left.right, right.left);
}
```

```javascript
// Iterative
var isSymmetric = function(root) {
    if (!root) return true;
    if (!root.left && !root.right) return true;
    if (!root.left || !root.right) return false;
    var queue = [root.left, root.right];
    while (queue.length > 0) {    
        var right = queue.pop();
        var left = queue.pop();
        if (!left && !right) {
            continue;
        } else if (!left || !right) return false;
        else {
            if (left.val !== right.val) return false;
            queue.push(left.left, right.right);
            queue.push(left.right, right.left);
        }
    }
    return true;
}
```

\104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Answer: add from the leaves with height 0, current node's height equal to max of leaves height plus one

Recursive (faster)

```javascript
var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```

Iterative (slower)

```javascript
var maxDepth = function(root) {
    if (!root) return 0; 
    var queue = [root];
    var depth = 0;
    while (queue.length > 0) {
        depth++;
        var len = queue.length;
        for (var i = 0; i < len; i++) {
            var node = queue.pop();
            if (node.left) queue.unshift(node.left);
            if (node.right) queue.unshift(node.right);
        }
    }
    return depth;
}
```



\107. Binary Tree Level Order Traversal II

Given a binary tree, return the *bottom-up level order* traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

Note: `push`  copy original object

```javascript
var levelOrderBottom = function(root) {
    if (!root) return [];
    var queue = [root];
    var res = [];
    while (queue.length > 0) {
        var len = queue.length;
        var arr = [];
        for(var i = 0; i < len; i++) {
            var node = queue.pop();
            arr.push(node.val);
            if (node.left) queue.unshift(node.left);
            if (node.right) queue.unshift(node.right);
        }
        res.unshift(arr);
    }
    return res;
};
```



\108. Convert Sorted Array to Binary Search Tree

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

```javascript
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) return null;
    var mid = Math.floor(nums.length / 2);
    var node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid+1));
    return node;
};
```



\110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

```javascript
var isBalanced = function(root) {
    var res = true;
    var traverse = function(r) {
        if (!r) return 0;
        var leftHeight = traverse(r.left);
        var rightHeight = traverse(r.right);
        if (Math.abs(leftHeight - rightHeight) > 1) {
            res = false;
        }
        return Math.max(leftHeight, rightHeight) + 1;
    }
    traverse(root);
    return res;
};
```



\111. Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Answer: there are 3 situations, if a node

+ has both sub-node, return minimum of 2
+ has only one sub-node, return minimum of that node
+ has no sub-node, return 0 + 1

```javascript
var minDepth = function(root) {
    if (!root) return 0;
    if (root.left && root.right) return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
    else if (!root.left) return minDepth(root.right) + 1;
    else if (!root.right) return minDepth(root.left) + 1;
};
```



\112. Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Answer: traverse from the root to all the leaves and find the path

```javascript
var hasPathSum = function(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right) return sum === root.val;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
```



\226. Invert Binary Tree

Invert a binary tree.

Answer: Invert the tree is the same as swap the left and right subtree of every node

```javascript
var invertTree = function(root) {
    if (!root) return root;
    var tmp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tmp);
    return root;
};
```



\235. Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow **a node to be a descendant of itself**).”

Answer: because it is a binary search tree, we simply compare the value of the node and traverse to left or right subtree according to the rule, that the root is the lowest common ancester of p q when p and q are at different subtree of the root.

```javascript
var lowestCommonAncestor = function(root, p, q) {
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
};

```



\257. Binary Tree Paths

Given a binary tree, return all root-to-leaf paths.

**Cool Answer**

```javascript
var binaryTreePaths = function(root) {
    if (!root) return [];
    if (!root.left && !root.right) return [root.val+''];
    return binaryTreePaths(root.left).concat(binaryTreePaths(root.right)).map(function(str) {
        return root.val + "->" + str;
    });
};
```



\404. Sum of Left Leaves

Find the sum of all left leaves in a given binary tree.

Answer: only return left leaf node value, they will be added up to the total sum after traversing all the node in the tree

```javascript
var sumOfLeftLeaves = function(root, isLeft) {
    if (!root) return 0;
    if (isLeft && !root.left && !root.right) return root.val;
    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
};
```



\437. Path Sum III

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

Answer: To break this problem into sub-problems, we need to count all target path started for a node down to its leaves and do this calculation to every node in the tree;

```javascript
var pathSum = function(root, sum) {
    if (!root) return 0;
    var traverse = function(node, sum) {
        if (!node) return 0;
        var count = 0;
        if (node.val == sum) count++;
        return traverse(node.left, sum - node.val) + traverse(node.right, sum - node.val) + count;
    }
    return traverse(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
}
```



\501. Find Mode in Binary Search Tree

Given a binary search tree (BST) with duplicates, find all the [mode(s)](https://en.wikipedia.org/wiki/Mode_(statistics)) (the most frequently occurred element) in the given BST.

Answer: Because it is a BST, we could treat it as an ascending sorted array when we do inorder traverse.
To achieve constant space, during the traverse we only store current node info (value and count) and compare current node value to previous one:
if equal, we update current value count and maxCount
if not, reset current count to 1.

**O(1) space, O(N) time solution**

```javascript
var findMode = function(root) {
    var mode = [], 
        curNodeVal = NaN, 
        curNodeCount = 0, 
        maxCount = -Infinity;
    
    var inorder = function(root) {
        if (!root) return;
        inorder(root.left);
        curNodeCount = (root.val === curNodeVal ? curNodeCount : 0) + 1;
        curNodeVal = root.val;
        if (curNodeCount > maxCount) {
            mode = [root.val];
            maxCount = curNodeCount;
        } else if (curNodeCount === maxCount) {
            mode.push(root.val);
        }
        inorder(root.right);
    }
    inorder(root);
    return mode;
}
```



\530. Minimum Absolute Difference in BST

Given a binary search tree with non-negative values, find the minimum [absolute difference](https://en.wikipedia.org/wiki/Absolute_difference) between values of any two nodes.

Answer: For ascending array, the minimum diff appears between i and i+1. So do inorder traverse to BST and calculate the min diff between previous node and current node.

```javascript
var getMinimumDifference = function(root) {
    var minDiff = Infinity;
    var pre = Infinity;
    var inorder = function(root) {
        if (!root) return;
        inorder(root.left);
        minDiff = Math.min(Math.abs(root.val - pre), minDiff);
        pre = root.val;
        inorder(root.right);
    }
    inorder(root);
    return minDiff;
};
```



\538. Convert BST to Greater Tree

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Answer: 

+ Reverse inorder traverse
+ Add sum till current node to current node value

```javascript
var convertBST = function(root) {
    var sum = 0;
    var reverseInorder = function(root) {
        if (!root) return;
        if (root.right) reverseInorder(root.right);
        var tmp = root.val;
        root.val += sum;
        sum += tmp;
        if (root.left) reverseInorder(root.left);
    }
    reverseInorder(root);
    return root;
};

```



\543. Diameter of Binary Tree

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the **longest** path between any two nodes in a tree. This path may or may not pass through the root.