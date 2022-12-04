const circle = document.getElementById("circle");
const eachMove = 10;

window.addEventListener('load', function(){
    circle.style.position = 'absolute'
    circle.style.left = 0; 
    circle.style.top = 0;
});

window.addEventListener('keyup', function(e){
 switch(e.key){
    case 'ArrowLeft':
        circle.style.left = parseInt(circle.style.left)-eachMove+'px';
        break;
    case 'ArrowRight':
        circle.style.left = parseInt(circle.style.left)+eachMove+'px';
        break;
    case 'ArrowDown':
        circle.style.top = parseInt(circle.style.top)+eachMove+'px';
        break;
    case 'ArrowUp':
        circle.style.top = parseInt(circle.style.top)-eachMove+'px';
        break;

 }
});

const gameOver = () =>{
    if(circle.style.left < 0 || circle.style.top < 0){
        circle.style.color = 'white';
        const message = document.createElement('p');
        message.innerText = "Oh no game over!";
        document.getElementById("gameMessage").appendChild(message);
    }
}
