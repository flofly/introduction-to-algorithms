"use strict";

class HeapSort {

    constructor(inputArray) {
        this.inputArray = inputArray;
        this.heapSize = inputArray.length;
    }

    main() {

        console.log("Heap sort launched.");

        // the largest element is moved at the first place
        this.buildMaxHeap();

        // the first element is moved to the end and the next largest element is moved to the first place on each iteration
        // the heapsize decreases because the end of the array become ordered
        for (var j = this.inputArray.length-1; j >= 0; j--) {
            var buffer = this.inputArray[j];
            this.inputArray[j] = this.inputArray[0];
            this.inputArray[0] = buffer;
            this.heapSize--;
            this.maxHeapify(0);
        }

        console.log(this.inputArray);

    }

    buildMaxHeap() {
        // we only need to process the first half of the array because all element will be checked (as we check the
        // right and left node)
        for (var j = Math.floor(this.inputArray.length / 2);j >= 0; j--) {
            this.maxHeapify(j);
        }
    }

    // the largest element between i, left(i) and right(i) will take the place of i
    maxHeapify(i) {

        var left = this.left(i);
        var right = this.right(i);
        var largest = i;

        if (left < this.heapSize && this.inputArray[left] > this.inputArray[i]) {
            largest = left;
        }

        if (right < this.heapSize && this.inputArray[right] > this.inputArray[largest]) {
            largest = right;
        }

        if (largest != i) {
            var buffer = this.inputArray[i];
            this.inputArray[i] = this.inputArray[largest];
            this.inputArray[largest] = buffer;
            // we recursively call max heapify on the smallest element freshly moved so that it will moved in the array
            // regarding its size
            this.maxHeapify(largest);
        }
    }

    // our graph is represented as a flat array
    // to access the left and right node of an element we need their index
    // see: http://staff.ustc.edu.cn/~csli/graduate/algorithms/book6/141_a.gif and apply the formula using the picture

    left(i) {
        return 2 * i + 1; // +1 because an array start at 0
    }

    right(i) {
        return 2 * i + 2; // +1 because an array start at 0
    }
}

var heapSort = new HeapSort([13,2,25,7,17,20,8,4]);
heapSort.main();