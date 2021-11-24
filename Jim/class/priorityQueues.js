let steps = 0;

function max_heap(arr) {
    if (arr.length === 1) return 'The array representation of the heap is [' + arr[0] + ']'; //only root
    for (let index = Math.floor(arr.length / 2) - 1; index >= 0; index--) { //last father to root
        max_heapUpdate(arr, index);
    }
    return 'The array representation of the heap is [' + arr.join(' ') + ']';
}

function max_heapUpdate(arr, index) {
    if (index > Math.floor(arr.length / 2 - 1)) return;  //index is the leaf,end of recursive

    let newArr = arr;
    newArr = swap(newArr)


    if (index === Math.floor(arr.length / 2) - 1 && arr.length % 2 === 0) { //last father only have left child
        if (arr[index * 2 + 1] > arr[index]) { //LChild>father
            swap(arr, index * 2 + 1, index);
        }
    } else if (arr[index] < arr[index * 2 + 1] || arr[index] < arr[index * 2 + 2]) { //check MHP
        if (arr[index * 2 + 1] > arr[index * 2 + 2]) { //LChild>RChild
            swap(arr, index * 2 + 1, index);
            max_heapUpdate(arr, index * 2 + 1);
        }
        else if (arr[index * 2 + 2] > arr[index * 2 + 1]) { //RChild>LChild
            swap(arr, index * 2 + 2, index);
            max_heapUpdate(arr, index * 2 + 2);
        }
    }
}

function swap(arr, a, b) {
    steps++;
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    console.log(`steps${steps}:  [${arr}]`);
}

console.log(max_heap([7, 14, 9, 12, 25, 41, 2]))