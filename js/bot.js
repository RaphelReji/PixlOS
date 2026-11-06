const botcommandInput = document.getElementById("bot-command");
const botOutput = document.getElementById("bot-output");

const botchatWindow = document.getElementById("bot-chat-window");
const botimageWindow = document.getElementById("bot-image-window");

botcommandInput.addEventListener("keydown",function(event){
  if(event.key==="Enter"){
    const command = botcommandInput.value.trim().toLowerCase();

    botOutput.textContent +=  "\n\nPixlBOT> " + command + "\n";

    if (command==="help"){
      botOutput.textContent += "Commands: help, about, ideas, clear, image";
    }else if(command==="about"){
      botOutput.textContent += "I am PixlBOT, your assistant"
    }else if(command==="ideas"){
      botOutput.textContent += "Try making a game or website! and for more Commands : game, website";
    }else if (command==="clear"){
      botOutput.innerHTML= "";
    }else if (command==="image"){
      botchatWindow.style.display="none";
      botimageWindow.style.display="block";
    }else if (command==="game"){
      botOutput.textContent += "if you want a make game start with godot engine it's super lightWeight and has a huge library out there and start with brackeys tutorial it is a good one to start!";
    }else if (command==="website"){
      botOutput.textContent += "want to make a website try some html css tutorials and if you want a basic structure type webdemo";
    }else if (command==="webdemo"){
      botOutput.textContent += "try this in Google A simple website to study html and css that's all  ";
    }else if(command===""){

    }else{
      botOutput.textContent +=  "Unknown command. Type help.";
    }
    botcommandInput.value = "";
  }
});

const imggenBackBtn=document.getElementById("image-gen-goback");
imggenBackBtn.addEventListener('click',function(){
  botimageWindow.style.display="none";
  botchatWindow.style.display="BLOCK";
})



const pixelartBtn = document.getElementById("img-gen-pixelart-btn");
const pixelartContainer = document.getElementById("create-img1-container");
const pixelartText = document.getElementById("create-img1-text");
const pixelartImg = document.getElementById("create-img1");

pixelartBtn.addEventListener("click",function(){
  setTimeout(() => {
    pixelartContainer.style.display="block";
    pixelartImg.style.display="none";
    forestimgContainer.style.display="none";
    catimgContainer.style.display = "none";
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



const forestimgBtn = document.getElementById("img-gen-cool-btn");
const forestimgContainer = document.getElementById("create-img2-container");
const forestimgText = document.getElementById("create-img2-text");
const forestimgImg = document.getElementById("create-img2");

forestimgBtn.addEventListener("click",function(){
  setTimeout(() => {
    forestimgContainer.style.display="block";
    forestimgImg.style.display="none";
    catimgContainer.style.display = "none";
     pixelartContainer.style.display="none";
  }, 1000);
    setTimeout(() => {
    forestimgText.style.display="block";
    forestimgText.textContent ="Generating";
  }, 1200);
    setTimeout(() => {
    forestimgText.textContent ="Generating Image....";
  }, 1500);
    setTimeout(() => {
    forestimgText.textContent ="Moving to ";
  }, 1900);
      setTimeout(() => {
    forestimgText.textContent ="Moving to the core.... ";
  }, 2200);
      setTimeout(() => {
    forestimgText.textContent ="Filling up";
  }, 2400);
    setTimeout(() => {
    forestimgText.textContent ="Filling up pixels.....";
  }, 2700);
      setTimeout(() => {
    forestimgText.textContent ="Almost filled.....";
  }, 3000);

    setTimeout(() => {
    forestimgText.style.display="none";
    forestimgImg.style.display="block";
  }, 3200);
      setTimeout(() => {
     forestimgImg.style.filter="blur(1px)"
     forestimgImg.style.transform="scale(1.09)"
  }, 3500);
});

const catimgBtn = document.getElementById("img-gen-funny-btn");
const catimgContainer = document.getElementById("create-img3-container");
const cattimgText = document.getElementById("create-img3-text");
const cattimgImg = document.getElementById("create-img3");

catimgBtn.addEventListener("click",function(){
  setTimeout(() => {
    catimgContainer.style.display="block";
    forestimgContainer.style.display = "none";
    pixelartContainer.style.display="none";
  }, 1000);
    setTimeout(() => {
    cattimgText.style.display="block";
    cattimgText.textContent ="Generating";
  }, 1200);
    setTimeout(() => {
    cattimgText.textContent ="Generating Image....";
  }, 1500);
    setTimeout(() => {
    cattimgText.textContent ="Moving to ";
  }, 1900);
      setTimeout(() => {
    cattimgText.textContent ="Moving to the core.... ";
  }, 2200);
      setTimeout(() => {
    cattimgText.textContent ="Filling up";
  }, 2400);
    setTimeout(() => {
    cattimgText.textContent ="Filling up pixels.....";
  }, 2700);
      setTimeout(() => {
    cattimgText.textContent ="Almost filled.....";
  }, 3000);

    setTimeout(() => {
    cattimgText.style.display="none";
    cattimgImg.style.display="block";
  }, 3200);
      setTimeout(() => {
     cattimgImg.style.filter="blur(1px)"
     cattimgImg.style.transform="scale(1.09)"
  }, 3500);
});