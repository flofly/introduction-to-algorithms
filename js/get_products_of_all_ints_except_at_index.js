var input =[1, 7, 3, 4];

var mapBefore = {};
var mapAfter = {};
var result = [];

for (var i = 0; i < input.length; i++) {

    if (!mapBefore[i - 1]) {
        mapBefore[i] = input[i];
    } else {
        mapBefore[i] = input[i] * mapBefore[i - 1];
    }

    var indexAfter = (input.length - i - 1);
    if (!mapAfter[indexAfter + 1]) {
        mapAfter[indexAfter] = input[indexAfter];
    } else {
        mapAfter[indexAfter] = input[indexAfter] * mapAfter[indexAfter + 1];
    }

}

for (var i = 0; i < input.length; i++) {

    if (i == 0) {
        result.push(mapAfter[i + 1]);
    } else if (i == input.length - 1) {
        result.push(mapBefore[i - 1]);
    } else {
      result.push(mapBefore[i - 1] * mapAfter[i + 1]);
    }

}

console.log(result);