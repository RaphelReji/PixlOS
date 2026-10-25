const commandInput=document.getElementById("command");
const output=document.getElementById("output");

commandInput.addEventListener("keydown",function(event){
  if(event.key==="Enter"){
    const command=commandInput.value.trim().toLowerCase();

    const line = document.createElement("p");
    line.textContent= "C:\\PIXLOS> " + command;
    output.appendChild(line);

    const result = document.createElement("p");

    if(command==="help"){
      result.textContent="Commands:help, about, date, clear";
    }else if(command==="about"){
      result.textContent="PixlOS is a retro x mac web opetating system";
    }else if(command==="date"){
      result.textContent= new Date().toLocaleString();
  }else if(command==="clear"){
    output.innerHTML="";
  }else if(command===""){
    result.textContent="";
  }else{
    result.textContent="Unknown command:" + command;
  }


    if (command !== "clear" && command !== "") {
      output.appendChild(result);
    }

    commandInput.value = "";

    document.getElementById("screen").scrollTop =
      document.getElementById("screen").scrollHeight;
  }
});

function clearTerminal() {
  output.innerHTML = "";
}