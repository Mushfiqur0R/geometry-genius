function calculateRectangleArea(){
    // get rectangle length value
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value ;
    const length = parseFloat(rectangleLengthText);
    console.log(length);
    // get rectangle width value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value ;
    const width = parseFloat(rectangleWidthText);
    console.log(width);

    const area = length * width;
    // display triangle area
    const triangleAreaSpan = document.getElementById('rectangle-area');
    triangleAreaSpan.innerText = area;
}