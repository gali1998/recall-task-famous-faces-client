const columnNames = ["פוליטיקאים ישראלים", "פוליטיקאים מהעולם", "מוזיקאים ישראלים", "מוזיקאים מהעולם", "שחקנים ישראלים", "שחקנים מהעולם", "אנשי טלויזיה ישראלים", "אנשי טלויזיה מהעולם", "דוגמנים", "כוכבי רשת", "אנשי עסקים", "ספורטאים ישראלים", "ספורטאים מהעולם", "כוכבי ריאליטי", "אחר"]


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
