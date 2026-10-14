// clock codea
const clock = document.getElementById("clock");
function updateClock(){
    const now = new Date();
    clock.textContent=now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock,1000);

const startWindow=document.getElementById("start-window");

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