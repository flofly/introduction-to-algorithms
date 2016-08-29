
function Queue() {
    this.items = [];
    this.enqueue = function(obj) {
        this.items.push(obj);
    };
    this.dequeue = function() {
        return this.items.shift();
    };
    this.isEmpty = function() {
        return this.items.length == 0;
    }
}

var graph = [
    [1, 2],
    [0, 3, 4],
    [0, 5, 6],
    [1],
    [1],
    [2],
    [2]
];

function bfs(graph, source) {
    var bfsMetaData = [];
    for (var i = 0; i < graph.length; i++) {
        bfsMetaData[i] = {
            distance: null,
            predecessor: null
        }
    }
    bfsMetaData[source].distance = 0;
    var queue = new Queue();
    queue.enqueue(source);

    while(!queue.isEmpty()) {

        var current = queue.dequeue();

        for (var i = 0; i < graph[current].length; i++) {

            var neighbor = graph[current][i];

            if (bfsMetaData[neighbor].distance === null) {

                bfsMetaData[neighbor].distance = bfsMetaData[current].distance + 1;
                bfsMetaData[neighbor].predecessor = current;
                queue.enqueue(neighbor);

            }

        }

    }

    return bfsMetaData;
}

var bfsMetaData = bfs(graph, 0);
for (var i = 0; i < graph.length; i++) {
    console.log("vertex " + i + ": distance = " + bfsMetaData[i].distance + ", predecessor = " + bfsMetaData[i].predecessor);
}