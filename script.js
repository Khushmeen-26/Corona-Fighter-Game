score  = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        boy = document.querySelector('.boy');
        boy.classList.add('animateBoy');
        setTimeout(() => {
            boy.classList.remove('animateBoy')
        }, 700);
    }
    if (e.keyCode == 39) {
        boy = document.querySelector('.boy');
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = boyX + 112 + "px";
    }
    if (e.keyCode == 37) {
        boy = document.querySelector('.boy');
        boyX = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
        boy.style.left = (boyX - 112) + "px";
    }
}

setInterval(() => {
    boy = document.querySelector('.boy');
    gameOver = document.querySelector('.gameOver');
    corona = document.querySelector('.corona');

    bx = parseInt(window.getComputedStyle(boy, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(boy, null).getPropertyValue('top'));

    cx = parseInt(window.getComputedStyle(corona, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(corona, null).getPropertyValue('top'));

    offsetX = Math.abs(bx - cx);
    offsetY = Math.abs(by - cy);
    // console.log(offsetX, offsetY)
    if (offsetX < 85 && offsetY < 70) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        corona.classList.remove('coronaAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}