var graph = [
    [1,2,3],
    [0, 4, 5],
    [0,6],
    [0,5],
    [1],
    [1,3],
    [2]
];

function dfs(current, distance) {

    console.log(current);
    dfsMetaData[current].distance = distance;

    for (var i = 0; i < graph[current].length; i++) {

        if (dfsMetaData[graph[current][i]].distance === null) {

            dfsMetaData[graph[current][i]].predecessor = current;

            dfs(graph[current][i], distance + 1);

        }

    }

}

var source = 0;
var dfsMetaData = [];
for (var i = 0; i < graph.length; i++) {
    dfsMetaData[i] = {
        distance: null,
        predecessor: null
    }
}
dfsMetaData[source].distance = 0;
dfs(source, 0);
for (var i = 0; i < graph.length; i++) {
    console.log("vertex " + i + ": distance = " + dfsMetaData[i].distance + ", predecessor = " + dfsMetaData[i].predecessor);
}
