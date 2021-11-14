function peakFinding(arr) {
    let begin = 0;
    let last = arr.length - 1;
    if (last < 0) return -1
    while (begin + 1 < last) {
        let mid = Math.floor((begin + last) / 2);
        if (arr[mid] < arr[mid - 1]) last = mid;//left side
        else if (arr[mid] < arr[mid + 1]) begin = mid;//right side
        else return arr[mid];
    }
    let mid = arr[begin] > arr[last] ? begin : last;
    return arr[mid];
}
