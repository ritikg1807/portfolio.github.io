let myImage = document.querySelector('img');

myImage.onmouseover = function function1() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/c2.png') {
      myImage.setAttribute('src','images/c1.png');
    } else {
      myImage.setAttribute('src','images/c2.png');
    }    
}

 
