function calculateEllipseArea() {
    // ellipse a
    const ellipseAInput = document.getElementById('ellipse-a');
    const ellipseAText = ellipseAInput.value;
    const a = parseFloat(ellipseAText);
    console.log(a);

    // ellipse b
    const ellipseBInput = document.getElementById('ellipse-b');
    const ellipseBText = ellipseBInput.value;
    const b = parseFloat(ellipseBText);
    console.log(b);

    const area = 3.14167 * a * b;
    console.log('area of the ellipse is:', area);

    const parallelogramAreaSpan = document.getElementById('ellipse-area');
    parallelogramAreaSpan.innerText = area;
}