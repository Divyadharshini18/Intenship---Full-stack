// practice file

var q = document.querySelectorAll(".drum");
for(var i=0;i<q.length;i++){
    q[i].addEventListener("click",function(){
        var x=this.innerHTML;
        makeSound(x);
        buttonAnimation(x);
        //alert(`the ${x}`);
    });
}


function makeSound(q){
    switch(q){
        case 'w':
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();

        case 'k':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(q);
    }
}

function buttonAnimation(q){
    var ac=document.querySelector("."+q);
    ac.classList.add("pressed");
    setTimeout(function(){
        ac.classList.remove("pressed");
    },100);
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});