"use strict";

function main(A) {

    quicksort(A, 0, A.length - 1);
    console.log(A);
    
}

function quicksort(A, p, r) {

    if (p < r) {
        // the array is partitioned in two parts, in the left part all the values are smaller than the pivot, in the
        // right part all the values are larger than the pivot
        var q = partition(A, p, r);
        // the same process is applied to the left and right part
        quicksort(A, p, q - 1);
        quicksort(A, q + 1, r);
    }

}

function partition(A, p, r) {

    // we take the last element of the array as pivot
    var x = A[r];
    var i = p - 1;

    // we compare each element with the pivot, if its value is smaller the element is moved in the left part of the
    // array, i is the limit between the left an right part of the array
    for (var j = p; j < r; j++) {
        if (A[j] <= x) {
            i++;
            A.swap(i, j);
        }
    }

    // we move the pivot right after i so that we have an array where the left values are smaller than the pivot and
    // the right values are larger than the pivot
    A.swap(++i, r);

    return i;
}

Array.prototype.swap = function (x,y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
}

main([13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11]);