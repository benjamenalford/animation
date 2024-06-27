console.log('js')
let gridContainer = d3.select("#grid");
const GRID_SIZE = 8;
let gridArray = [{}];

for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
        gridArray.push({ x: i, y: j })
    }
}

// Create a group for each row of the grid
let rows = [];
for (let i = 0; i < GRID_SIZE; i++) {
    rows.push(gridContainer.append('div').attr('class', 'grid-row'));
}

// Add squares to the corresponding row in the grid
gridArray.forEach(square => {
    let x = square.x;
    let y = square.y;
    gridContainer.append('div')
        .attr('class', 'grid-square')
        .style('position', 'absolute')
        .style('left', (x * 50) + "px")
        .style('top', (y * 50) + "px")
        .text("Chicken " + x)
        .on('click', (e) => {
            d3.select("#shopping-list").append('li').text("Chicken" + " " + y);
            getIngredients("Chicken")
            d3.select(e.target)
                .attr("chicken", 'click')
                .style("animation-name", 'test')
                .style("animation-duration", '4s')
                .style("animation-iteration-count", "infinite")
        });
});
let ingredients = []

function getIngredients(recipe) {
    //api gets chicken ingredients
    //adds to list
    ingredients.push({})
}