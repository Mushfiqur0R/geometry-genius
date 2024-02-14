// function calculateParallelogramArea (){
//     // parallelogram base
//     const parallelogramBaseInput = document.getElementById('parallelogram-base');
//     const parallelogramBaseText = parallelogramBaseInput.value ;
//     const base = parseFloat(parallelogramBaseText);
//     console.log(base);
//     // parallelogram height
//     const parallelogramHeightInput = document.getElementById('parallelogram-height');
//     const parallelogramHeightText = parallelogramHeightInput.value ;
//     const height = parseFloat(parallelogramHeightText);
//     console.log(height);

//     const area = base * height;
//     console.log('area of the parallelogram is:', area);

//     const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//     parallelogramAreaSpan.innerText = area;
// }


function calculateParallelogramArea (){
    const base = getInputValueByID('parallelogram-base');
    // console.log('base value:', base);
    const height = getInputValueByID('parallelogram-height');
    // console.log('height value:', height);

    const area = base * height;
    console.log('area of the parallelogram is', area);
    // const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    // parallelogramAreaSpan.innerText = area;
    setInnerTextByID('parallelogram-area', area);
}

function getInputValueByID(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value ;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextByID(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}