console.log('js')
let gridContainer = d3.select("#grid");
const GRID_SIZE = 8;
let gridArray = [];

//lets make a font!
let font = {}
font.h = [17, 18, 19, 20, 21, 22, 28, 36, 41, 42, 43, 44, 45, 46];
font.i = [26, 27, 28, 29, 30];
font.dot = [46]


//build the grid
let grid_id = 0;
for (let i = 0; i < GRID_SIZE; i++) {
    for (let j = 0; j < GRID_SIZE; j++) {
        gridArray.push({ x: i, y: j, id: `s${grid_id}` })
        grid_id++;
    }
}

// Add squares to the corresponding row in the grid
gridArray.forEach((square) => {
    let x = square.x;
    let y = square.y;
    gridContainer.append('div')
        .attr('class', 'grid-square')
        .style('position', 'absolute')
        .attr('x', (x * 50))
        .attr('y', (y * 50))
        .attr('id', square.id)
        .style('left', (x * 50) + 'px')
        .style('top', (y * 50) + 'px')
        .on('click', (e) => {
            console.log(d3.select(e.target).attr('id'))
        });
});

function drawChar(char = '') {
    if (char === '.') {
        char = 'dot'
    }
    gridArray.forEach((square, i) => {
        if (font[char].includes(i)) {
            d3.select(`#${square.id}`).attr('class', 'grid-square grid-square-on');
        } else {
            d3.select(`#${square.id}`).attr('class', 'grid-square')
                .style('background-color', randomBGColor());
        }
    });
}

function drawText(text = 'hi.') {
    text.split('').forEach((char, i) => {
        setTimeout(() => {
            drawChar(char);
        }, (i * 3000));
    })
    gridArray.forEach((square, i) => {
        d3.select(`#${square.id}`).attr('class', 'grid-square')
            .style('background-color', randomBGColor());
        d3.select(`#${square.id}`).on('animationend', function () {
            //letter drawn
            // d3.select(`#${square.id}`).style('background-color', randomBGColor());
            //console.log('drawn')
        });
    });

}
drawText('hi.')

function randomBGColor() {
    let r = Math.floor(128 - Math.random() * 20)
    let g = Math.floor(255 - Math.random() * 20)
    let b = Math.floor(212 - Math.random() * 20)
    return (`rgb(${r}, ${g}, ${b})`)
}