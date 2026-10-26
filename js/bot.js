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