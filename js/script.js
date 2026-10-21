// clock codea
const clock = document.getElementById("clock");
function updateClock(){
    const now = new Date();
    clock.textContent=now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock,1000);

const browserTime=document.getElementById("browser-time");
function updateBrowsertime(){
    const now1 = new Date();
    browserTime.textContent=now1.toLocaleTimeString();
}

updateBrowsertime();
setInterval(updateBrowsertime,1000);


const form= document.querySelector("#search-form");
const search=document.querySelector("#search");
form.addEventListener("submit",function(event){
        event.preventDefault();

    const query = search.value.trim();

    if (!query) return;

    window.location.href =
        "https://www.google.com/search?q=" +
        encodeURIComponent(query);

});

const startWindow=document.getElementById("start-window");
const notesWindow=document.getElementById("notes-window");
const settingsWindow=document.getElementById("settings-window");
const browserWindow=document.getElementById("browser-window");
const filesWindow=document.getElementById("files-window");
const storeWindow=document.getElementById("store-window");

let highestZIndex = 100;

function makeDraggable(windowElement, header) {

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    header.addEventListener("mousedown", (e) => {

        isDragging = true;

        offsetX = e.clientX - windowElement.offsetLeft;
        offsetY = e.clientY - windowElement.offsetTop;

        windowElement.style.transition = "none";
        highestZIndex++;
        windowElement.style.zIndex = highestZIndex;

    });

    document.addEventListener("mousemove", (e) => {

        if (!isDragging) return;

       let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    const maxX = window.innerWidth - windowElement.offsetWidth;
    const maxY = window.innerHeight - windowElement.offsetHeight;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    windowElement.style.left = x + "px";
    windowElement.style.top = y + "px";

    });

    document.addEventListener("mouseup", () => {

        isDragging = false;

        windowElement.style.transition = "0.2s ease";

    });

}


makeDraggable(
    startWindow,
    startWindow.querySelector(".window-bar")
);
makeDraggable(
    notesWindow,
    notesWindow.querySelector(".window-bar")
);
makeDraggable(
    settingsWindow,
    settingsWindow.querySelector(".window-bar")
);
makeDraggable(
    browserWindow,
    browserWindow.querySelector(".window-bar")
);
makeDraggable(
    filesWindow,
    filesWindow.querySelector(".window-bar")
);
makeDraggable(
    storeWindow,
    storeWindow.querySelector(".window-bar")
);

const closeStart=document.getElementById("close-start");
closeStart.addEventListener("click",function(){
    startWindow.style.display="none";
});


const openNotes=document.getElementById("open-notes");
openNotes.addEventListener("click",  function(){
    if (notesWindow.style.display==="block"){
        notesWindow.style.display="none";
    }

    else{
        notesWindow.style.display="block";
    }
}
);
const closeNotes=document.getElementById("close-notes");
closeNotes.addEventListener("click",function(){
    notesWindow.style.display="none";
});

const openSettings=document.getElementById("open-settings");
openSettings.addEventListener("click",  function(){
    if (settingsWindow.style.display==="block"){
        settingsWindow.style.display="none";
    }

    else{
        settingsWindow.style.display="block";
    }
}
);
const closeSettings=document.getElementById("close-settings");
closeSettings.addEventListener("click",function(){
    settingsWindow.style.display="none";
});

const openBrowser=document.getElementById("open-browser");
openBrowser.addEventListener("click",  function(){
    if (browserWindow.style.display==="block"){
        browserWindow.style.display="none";
    }

    else{
        browserWindow.style.display="block";
    }
}
);
const closeBrowser=document.getElementById("close-browser");
closeBrowser.addEventListener("click",function(){
    browserWindow.style.display="none";
});


const openFiles=document.getElementById("open-files");
openFiles.addEventListener("click",  function(){
    if (filesWindow.style.display==="block"){
        filesWindow.style.display="none";
    }

    else{
        filesWindow.style.display="block";
    }
}
);
const closeFiles=document.getElementById("close-files");
closeFiles.addEventListener("click",function(){
    filesWindow.style.display="none";
});



const openStore=document.getElementById("open-store");
openStore.addEventListener("click",  function(){
    if (storeWindow.style.display==="block"){
        storeWindow.style.display="none";
    }

    else{
        storeWindow.style.display="block";
    }
}
);
const closeStore=document.getElementById("close-store");
closeStore.addEventListener("click",function(){
    storeWindow.style.display="none";
});