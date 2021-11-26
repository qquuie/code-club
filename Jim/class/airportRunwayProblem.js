//today  37, 41, 46, 49, 56

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class AirportRunway {
    constructor() {
        this.root = null
    }

    insert(dataArr) {
        for (let i = 0; i < dataArr.length; i++) {
            let newNode = new Node(dataArr[i]);
            if (this.root === null) {
                this.root = newNode;
            }
            else
                this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    insert_k(dataArr, k) {
        for (let i = 0; i < dataArr.length; i++) {
            let newNode = new Node(dataArr[i]);
            if (this.root.data >= newNode.data || this.root.data + k >= newNode.data) {
                console.log(`Request at time ${newNode.data} is not allowed`)
            }
            else
                this.insert_k_node(this.root, newNode);
        }
    }

    insert_k_node(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                if (node.data - k < newNode.data) {
                    console.log(`Request at time ${newNode.data} is not allowed`)
                } else {
                    console.log(`Request at time ${newNode.data} is allowed`)
                    node.left = newNode;
                }
            else
                this.insert_k_node(node.left, newNode);
        }
        else {
            if (node.right === null)
                if (node.data + k < newNode.data) {
                    console.log(`Request at time ${newNode.data} is not allowed`)
                } else {
                    console.log(`Request at time ${newNode.data} is allowed`)
                    node.right = newNode;
                }
            else
                this.insert_k_node(node.right, newNode);
        }
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


let input = [5, 37, 41, 46, 49, 56, 3, 44, 53, 20];
let originalNum = input[0];
let originalOrders = [];
let k = input[originalNum + 1];
let newOrders = [];
for (let i = 1; i <= originalNum; i++) {
    originalOrders.push(input[i])
}
for (let i = originalNum + 2; i < input.length; i++) {
    newOrders.push(input[i])
}
const airportRunway = new AirportRunway();
airportRunway.insert(originalOrders)
const root = airportRunway.getRootNode();
airportRunway.inOrder(root);
airportRunway.insert_k(newOrders, k)
airportRunway.inOrder(root);