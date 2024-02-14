function calculateRhombusArea(){
    // Rhombus d1
    const rhombusD1Input = document.getElementById('rhombus-d1');
    const rhombusD1Text = rhombusD1Input.value ;
    const d1 = parseFloat(rhombusD1Text);
    console.log(d1);
    // Rhombus d2
    const rhombusD2Input = document.getElementById('rhombus-d2');
    const rhombusD2Text = rhombusD2Input.value ;
    const d2 = parseFloat(rhombusD2Text);
    console.log(d2);

    const area = 0.5 * d1 * d2;
    console.log('area of the Rhombus is:', area);

    const parallelogramAreaSpan = document.getElementById('rhombus-area');
    parallelogramAreaSpan.innerText = area;
}