window.addEventListener('load',function()
{
    let block = document.getElementById('block');
    let input1 = document.getElementById('y-range');
    let input2 = document.getElementById('x-range');
    let size = document.getElementById('size');
    let opacity = document.getElementById('opacity');
    let sizeVal;
    let select_shape = document.getElementById('shape-select');
    let ok_btn = document.getElementById('ok-btn');
    // Position Y
    input1.addEventListener('input',function()
    {
        block.style.top=input1.value + 'px';
    })
    // Position X
    input2.addEventListener('input',function()
    {
        block.style.left=input2.value + 'px';
    })
    // Size
    size.addEventListener('input',function()
    {
        sizeVal=size.value;
        block.style.transform = `scale(${sizeVal})`;
    })
    // Opacity
    opacity.addEventListener('input',function()
    {
        block.style.opacity=opacity.value;
    })
    // Shape type
    ok_btn.addEventListener('click',function()
    {
        let option = select_shape.value;
        if(option==='1')
        {
            block.style.borderRadius='0';
            block.style.transform='rotate(0deg)';
        }
        else if(option==='2')
        {
            block.style.borderRadius='50%';
        }
        else if(option==='3')
        {
            block.style.borderRadius='0';
            block.style.transform='rotate(45deg)';
        }
    })
    // Hex Color Change
    let hex = document.getElementById('hex');
    hex.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            block.style.backgroundColor = `#${hex.value}`;
        }
    })

    // RGBA COLOR 
    let rgbr = document.getElementById('rgba-r');
    let rgbg = document.getElementById('rgba-g');
    let rgbb = document.getElementById('rgba-b');
    let rgba = document.getElementById('rgba-a');
    rgbaInputs = document.querySelectorAll('.rgba-container input');
    rgbaInputs.forEach(function (element)
        {
            element.addEventListener('input',function()
            {
                block.style.backgroundColor = `rgba(${rgbr.value}, ${rgbg.value}, ${rgbb.value}, ${rgba.value})`;
            })
        }
    )

})
