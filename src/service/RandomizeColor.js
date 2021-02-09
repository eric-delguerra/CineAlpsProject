const color = ['teal', 'yellow', 'purple', 'brown', 'orange', 'red', 'olive', 'green']
function randomizeColor() {
    let rand = Math.floor(Math.random() * 8);
    return color[rand];
}

export default randomizeColor()
