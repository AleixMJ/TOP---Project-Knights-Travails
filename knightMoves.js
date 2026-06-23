function knightMoves(start, end) {

    const moves = [
        [2, 1], [-2, 1], [2, -1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    const queue = [[start]];

    // ensure a previous visited position within the path is not added again to a path.

    const visited = new Set();
    visited.add(start.toString());

    // Add path of moves to the queue
    // if a path reaches the end position return the path combination

    while (queue.length > 0) {

        const currentPath = queue.shift();
        for (move of moves) {   
            const currentPathMove = currentPath.push(move);
            
            const currentSquare = currentPathMove[currentPathMove.length - 1]
            if (currentSquare[0] === end[0] && currentSquare[1] === end[1]) {
                return currentPathMove;
            }
            queue.push(currentPathMove);        
    }

    }
    
    
}