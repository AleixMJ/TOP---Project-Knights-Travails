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
        for (let move of moves) {
            const moveX = currentPath[currentPath.length -1][0] + move[0];
            const moveY = currentPath[currentPath.length -1][1] + move[1];
            if (moveX > 7 || moveX <0 || moveY > 7 || moveY < 0) {
                continue;
            }

            const currentSquare = [moveX, moveY]
            if (visited.has(currentSquare)) continue;

            const currentPathMove = [...currentPath, [currentSquare]]
            visited.add(currentSquare);                   
            
            
            if (currentSquare[0] === end[0] && currentSquare[1] === end[1]) {
                return currentPathMove;
            }
            queue.push(currentPathMove);        
    }

    }
    
    
}

export default knightMoves;