const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const goommba = document.querySelector('.goommba');


const jump = () => {
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);
}




function corridaMario(){ 
    const loop= setInterval(()=>{
    const tuboposition = tubo.offsetLeft;
    //const gommbaposition = goommba.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', ' ');
    console.log(marioposition);
    
    if(tuboposition<=90 && tuboposition>0 && marioposition <85) {
        
        tubo.style.animation ='none';
        tubo.style.left = `${tuboposition}px`;

   
        mario.style.animation ='none';
        mario.style.bottom = `${marioposition}px`;
     
        mario.src = './images/deathmario.gif';
        mario.style.width  = '60px';
        mario.style.marginLeft = '50px'
        
        
    
    
    /*if(gommbaposition<=90 && gommbaposition>0 && marioposition <85) {
        
        goommba.style.animation ='none';
        goommba.style.left = `${gommbaposition}px`;

   
        mario.style.animation ='none';
        mario.style.bottom = `${marioposition}px`;
     
        mario.src = './images/deathmario.gif';
        mario.style.width  = '60px';
        mario.style.marginLeft = '50px'
        
        clearInterval(loop);*/
    
    }

        
    }, 10)
    document.addEventListener('keydown' , jump);
}

corridaMario( )
document.getElementById('Restart').addEventListener('click', () =>{
    window.location.reload();
})








