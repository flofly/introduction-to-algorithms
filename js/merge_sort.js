"use strict";
// the variable names are awful but are like that to follow the algorithm described in the book and ease its understanding

function main(A) {
    mergeSort(A, 0, A.length - 1);
    console.log(A)
}

// we recursively cut the array in two parts and merge the two parts
// mergeSort is called again for each subpart
function mergeSort(A, p, r) {
    if (p < r) {
        var q = Math.floor((p + r) / 2)
        mergeSort(A, p, q)
        mergeSort(A, q + 1, r)
        merge(A, p, q, r)
    }
}

function merge(A, p, q, r) {

    // the size of the left and right array is calculated
    var n1 = q - p + 1
    var n2 = r - q

    // two temporary array are instantiated
    var left = new Array(n1)
    var right = new Array(n2)
    var i = 0, j = 0

    // the data from A, between p and q are copied in the left array and data between q+1 and j are copied in the right
    // array
    for (i; i < n1; i++)
        left[i] = A[p + i]
    for (j; j < n2; j++)
        right[j] = A[q + 1 + j]

    i = 0, j = 0

    // we replace the value from A with the lowest value between left and right until all the values from left and right
    // are copied into A
    for (var k = p; k <= r; k++) {
        if (left[i] <= right[j] || (left[i] && !right[j])) {
            A[k] = left[i]
            i++
        } else if (left[i] >= right[j] || (!left[i] && right[j])) {
            A[k] = right[j]
            j = j + 1
        }
    }
}

main([13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11]);

