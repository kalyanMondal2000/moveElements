const circle = document.getElementById("circle");
const eachMove = 10;


var w = window.innerWidth;
var h = window.innerHeight;

window.addEventListener('load', function(){
    circle.style.position = 'absolute'
    circle.style.left = 0; 
    circle.style.top = 0;
});


window.addEventListener('keydown', function(e){
 switch(e.key){
    case 'ArrowLeft':
        circle.style.left = parseInt(circle.style.left)-eachMove+'px';
        console.log(circle.style.left)
        break;
    case 'ArrowRight':
        circle.style.left = parseInt(circle.style.left)+eachMove+'px';
        console.log(circle.style.left)
        break;
    case 'ArrowDown':
        circle.style.top = parseInt(circle.style.top)+eachMove+'px';
        console.log(circle.style.left)
        break;
    case 'ArrowUp':
        circle.style.top = parseInt(circle.style.top)-eachMove+'px';
        console.log(circle.style.left)
        break;

 }
});

window.addEventListener('click', function(){
    const newThing = document.createElement('div')
    newThing.style.height = 100 +'px';
    newThing.style.width = 100 +'px';
    newThing.style.borderRadius = 50+"%";
    newThing.style.backgroundColor = 'black';

})