class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class AVL {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        if (!node) { return -1 }
        const lh = this.getHeight(node.left)
        const rh = this.getHeight(node.right)
        return Math.max(lh, rh) + 1;//root 1
    }

    getBF(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    insert(data) {
        this.root = this.insertHelper(this.root, data);
    }

    insertHelper(node, data) {
        let curNode = node;
        if (!curNode) {
            return new Node(data);
        }
        if (data < curNode.data) {
            curNode.left = this.insertHelper(curNode.left, data);
        } else if (data > curNode.data) {
            curNode.right = this.insertHelper(curNode.right, data);
        }
        curNode = this.balance(curNode);
        return curNode;
    };


    balance(node) {
        if (!node) {
            return node;
        }
        const nodeBF = this.getBF(node);
        if (nodeBF > 1) {
            if (this.getBF(node.left) < 0) {
                node.left = this.rotateL(node.left);
            }
            node = this.rotateR(node);
        } else if (nodeBF < -1) {
            if (this.getBF(node.right) > 0) {
                node.right = this.rotateR(node.right);
            }
            node = this.rotateL(node);
        }
        return node;
    }

    rotateR(node) {
        const temp = node.left;
        node.left = temp.right;
        temp.right = node;
        return temp
    }

    rotateL(node) {
        const temp = node.right;
        node.right = temp.left;
        temp.left = node;
        return temp
    }

    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    getRootNode() {
        return this.root;
    }

}
// 11, 20, 23, 26, 29, 41, 50, 65
const avl_tree = new AVL();
avl_tree.insert(11)
avl_tree.insert(20)
avl_tree.insert(23)
avl_tree.insert(26)
avl_tree.insert(29)
avl_tree.insert(41)
avl_tree.insert(50)
avl_tree.insert(65)
const root = avl_tree.getRootNode()
avl_tree.inOrder(root)