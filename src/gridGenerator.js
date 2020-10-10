const columnNames = ["stub1", "stub2", "stub3", "stub4", "stub5", "stub6", "stub7", "stub8", "stub9", "stub10", "stub11", "stub12", "stub13", "stub14", "stub15"]


export function getGrid() {
    let grid = []
    let h = []

    columnNames.forEach(name => {
        h.push({ value: name, dateOfChange: null, className: "cell-header", readOnly: true, width: 50 })
    })

    grid.push(h)

    for (let i = 0; i  < 200; i++) {
        let line = []
        
        columnNames.forEach(name => {
            line.push({ value: "", dateOfChange: null, width: 50})
        })
        
        grid.push(line)
    }

    return grid
}

export function extendGrid(grid) {
    for (let i = 0; i  < 20; i++) {
        let line = []
        
        columnNames.forEach(name => {
            line.push({ value: "", dateOfChange: null})
        })
        
        grid.push(line)  
    }
    
    return grid;
}

export function getMinimizedGrid(grid) {
    let newGrid = [];
    let gridHeaders = grid[0].length;

    for (let i = 0; i < gridHeaders; i++){
        let col = getFullColumn(i, grid)
        newGrid.push(col);
    }

    return newGrid;
}

function getFullColumn(col, grid) {
    let column = [];
    let numOfRows = grid.length;

    for (let i = 0; i < numOfRows; i++) {
        let cell = grid[i][col];

        if (cell.value != ""){
            column.push(cell);
        }
    }

    return column;
}
