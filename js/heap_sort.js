"use strict";

var heapSize = 0;

function main(A) {

    console.log("Heap sort launched.");
    heapSize = A.length;

    // the largest element is moved at the first place
    buildMaxHeap(A);

    // the first element is moved to the end and the next largest element is moved to the first place on each iteration
    // the heapsize decreases because the end of the array become ordered
    for (var j = A.length-1; j >= 0; j--) {
        A.swap(0, j);
        heapSize--;
        maxHeapify(A, 0);
    }

    console.log(A);

}

function buildMaxHeap(A) {
    // we only need to process the first half of the array because all element will be checked (as we check the
    // right and left node)
    for (var j = Math.floor(A.length / 2);j >= 0; j--) {
        maxHeapify(A, j);
    }
}

// the largest element between i, left(i) and right(i) will take the place of i
function maxHeapify(A, i) {

    var l = left(i);
    var r = right(i);
    var largest = i;

    if (l < heapSize && A[l] > A[i]) {
        largest = l;
    }

    if (r < heapSize && A[r] > A[largest]) {
        largest = r;
    }

    if (largest != i) {
        A.swap(i, largest);
        // we recursively call max heapify on the smallest element freshly moved so that it will moved in the array
        // regarding its size
        maxHeapify(A, largest);
    }
}

// our graph is represented as a flat array
// to access the left and right node of an element we need their index
// see: http://staff.ustc.edu.cn/~csli/graduate/algorithms/book6/141_a.gif and apply the formula using the picture
function left(i) {
    return 2 * i + 1; // +1 because an array start at 0
}

function right(i) {
    return 2 * i + 2; // +1 because an array start at 0
}

Array.prototype.swap = function (x,y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
}

main([13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11]);