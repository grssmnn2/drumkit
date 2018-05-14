// when specific key is pressed, play sound associated with key code
window.addEventListener('keydown', function(e){
    const audio = document.querySelector()
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});