window.onload = function () {

    function getQueenPossiblePoints(x, y) {
        var min = 1
        var max = 8
        var arr = []
        var obstructions = [[min-1 , min-1 ], [max+1 , max+1 ]]

        function isObstacle(x, y) {
            for (let o of obstructions) {
                if (o[0] === x && o[1] === y) {
                    // console.log(o[0] + ',' + o[1]);
                    return true;
                }
            }
        }

        function checkUpLeft(x, y) {
            if (x >= min && y >= min) {
                if (isObstacle(x, y)) {
                    return;
                } else {
                    arr.push([x, y])
                    checkUpLeft(x - 1, y - 1);
                }
            }
        }

        function checkDownLeft(x, y) {
            if (x >= min && y < max - 1) {
                if (isObstacle(x, y)) {
                    return;
                } else {
                    arr.push([x, y])
                    checkDownLeft(x - 1, y + 1);
                }
            }
        }

        function checkDownRight(x, y) {
            if (x <= max && y <= max) {
                if (isObstacle(x, y)) {
                    return;
                } else {
                    arr.push([x, y])
                    checkDownRight(x + 1, y + 1);
                }
            }
        }

        function checkUpRight(x, y) {
            if (x <= max - 1 && y >= min) {
                if (isObstacle(x, y)) {
                    return;
                } else {
                    arr.push([x, y])
                    checkUpRight(x + 1, y - 1);
                }
            }
        }

        function checkLeft(x, y) {
            if (x >= min) {

                if (isObstacle(x, y)) {
                    return;
                } else {
                    arr.push([x, y])
                    checkLeft(x - 1, y);
                }
            }
        }


        function checkRight(x, y) {
            if (x <= max) {
                if (isObstacle(x, y)) {
                    return;
                } else {
                    arr.push([x, y])
                    checkRight(x + 1, y);
                }
            }
        }

        function checkDown(x, y) {
            if (y <= max) {
                if (isObstacle(x, y)) {
                    return;
                } else {
                    arr.push([x, y])
                    checkDown(x, y + 1);
                }
            }
        }


        function checkUp(x, y) {
            if (y >= min) {
                if (isObstacle(x, y)) {
                    return;
                } else {
                    arr.push([x, y])
                    checkUp(x, y - 1);
                }
            }
        }


        checkUp(x, y - 1);
        checkRight(x + 1, y);
        checkDown(x, y + 1);
        checkLeft(x - 1, y);

        checkUpLeft(x - 1, y - 1);
        checkUpRight(x + 1, y - 1);
        checkDownLeft(x - 1, y + 1);
        checkDownRight(x + 1, y + 1);


        return arr;


    }


    console.log('getQueenPossiblePoints(1, 1) =>', getQueenPossiblePoints(1, 1))
    console.log('getQueenPossiblePoints(4, 3) =>', getQueenPossiblePoints(4, 3))
    console.log('getQueenPossiblePoints(8, 8) =>', getQueenPossiblePoints(8, 8))
    console.log('getQueenPossiblePoints(3, 3) =>', getQueenPossiblePoints(3, 3))
    console.log('getQueenPossiblePoints(4, 5) =>', getQueenPossiblePoints(4, 5))
    console.log('getQueenPossiblePoints(5, 5) =>', getQueenPossiblePoints(5, 5))

};