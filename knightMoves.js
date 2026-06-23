function knightMoves(start, end, moves = 0, path = []) {

    const moves = [
        [2, 1], [-2, 1], [2, -1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    const queue = [[start]];

    // Add path of moves to the queue
    // ensure a previous visited position within the path is not added again to a path.
    // if a path reaches the end position return the path combination
}