function calculatePentagonArea() {
    // pentagon p
    const pentagonPInput = document.getElementById('pentagon-p');
    const pentagonPText = pentagonPInput.value;
    const p = parseFloat(pentagonPText);
    console.log(p);
    // pentagon b
    const pentagonBInput = document.getElementById('pentagon-b');
    const pentagonBText = pentagonBInput.value;
    const b = parseFloat(pentagonBText);
    console.log(b);

    const area = 0.5 * p * b;
    console.log('area of the parallelogram is:', area);

    const parallelogramAreaSpan = document.getElementById('pentagon-area');
    parallelogramAreaSpan.innerText = area;
}