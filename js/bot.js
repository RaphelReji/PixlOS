const botcommandInput = document.getElementById("bot-command");
const botOutput = document.getElementById("bot-output");

botcommandInput.addEventListener("keydown",function(event){
  if(event.key==="Enter"){
    const command = botcommandInput.value.trim().toLowerCase();

    botOutput.textContent +=  "\n\nPixlBOT> " + command + "\n";

    if (command==="help"){
      botOutput.textContent += "Commands: help, about, ideas, clear";
    }else if(command==="about"){
      botOutput.textContent += "I am PixlBOT, your assistant"
    }else if(command==="ideas"){
      botOutput.textContent += "Try making a game or website! and for more Commands : game, website";
    }else if (command==="clear"){
      botOutput.innerHTML= "";
    }else if(command===""){

    }else{
      botOutput.textContent +=  "Unknown command. Type help.";
    }
    botcommandInput.value = "";
  }
});




const pixelartBtn = document.getElementById("img-gen-pixelart-btn");
const pixelartContainer = document.getElementById("create-img1-container");
const pixelartText = document.getElementById("create-img-text");
const pixelartImg = document.getElementById("create-img1");

pixelartBtn.addEventListener("click",function(){
  setTimeout(() => {
    pixelartContainer.style.display="block";
    pixelartImg.style.display="none";
  }, 1000);
    setTimeout(() => {
      pixelartText.style.display="block";
    pixelartText.textContent ="Generating";
  }, 1200);
    setTimeout(() => {
    pixelartText.textContent ="Generating Image....";
  }, 1500);
    setTimeout(() => {
    pixelartText.textContent ="Moving to ";
  }, 1900);
      setTimeout(() => {
    pixelartText.textContent ="Moving to the core.... ";
  }, 2200);
      setTimeout(() => {
    pixelartText.textContent ="Filling up";
  }, 2400);
    setTimeout(() => {
    pixelartText.textContent ="Filling up pixels.....";
  }, 2700);
      setTimeout(() => {
    pixelartText.textContent ="Almost filled.....";
  }, 3000);

    setTimeout(() => {
    pixelartText.style.display="none";
    pixelartImg.style.display="block";
  }, 3200);
      setTimeout(() => {
     pixelartImg.style.filter="blur(1px)"
     pixelartImg.style.transform="scale(1.09)"
  }, 3500);
});
