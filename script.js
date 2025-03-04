const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');



const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = +window.getComputedStyle(clouds).left.replace('px', '');
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    

    console.log(cloudsPosition)
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src='img/mario-jump-images/game-over.png';
        mario.style.width='75px';
        mario.style.marginLeft='40px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);