//color changing button
const button = document.getElementById('cc');
button.onmouseup = ()=> {
    button.style.backgroundColor = 'yellow';
} 
// button.onmouseenter = ()=> {
//     button.style.backgroundColor = "yellow"
// }

//Color picker
document.getElementById('apply-color').addEventListener('click', ()=> {
    let color = document.getElementById('color-input').value;
    document.getElementById('element-to-color').style.backgroundColor = color;
  });
  
//Image enlarge button
document.getElementById('enlarge-button').addEventListener('click', function() {
    let image = document.getElementById('image');
    let currentWidth = image.offsetWidth;
    let newWidth = currentWidth * 1.2; // Increase the width by 20%
    image.style.width = newWidth + 'px';
  });
  
