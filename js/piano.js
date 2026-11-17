 const keys = document.querySelectorAll('.key');

 keys.forEach((key) =>{
  key.addEventListener('click', ()=>{
    const note = key.dataset.note;
    const audio = new Audio(`assets/sounds/${note}.mp3`);
    audio.currentTime = 0;
    audio.play();
  })
 })