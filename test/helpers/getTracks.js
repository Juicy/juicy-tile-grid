function getGridCols(element) {
    // check W3C and IE convention
    return (element.style["gridTemplateColumns"] || element.style["grid-template-columns"])
                // .split(" ")
                .match(/[a-z0-9]+(\([^\)]*\))?/g);
}
function getGridRows(element, width, height){
    // check W3C and IE convention
    return (element.style["gridTemplateRows"] || element.style["grid-template-rows"])
                // .split(" ")
                .match(/[a-z0-9]+(\([^\)]*\))?/g);
}
function realRelativePosition(element, context) {
    var contextPosition = context.getBoundingClientRect(),
        elementPosition = element.getBoundingClientRect();
    return {
        top: elementPosition.top - contextPosition.top,
        right: contextPosition.right - elementPosition.right,
        bottom: contextPosition.bottom - elementPosition.bottom,
        left: elementPosition.left - contextPosition.left,
        width: elementPosition.width,
        height: elementPosition.height
    }
}
