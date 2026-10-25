
const appearanceBtn=document.getElementById("appearance-btn");
const wallpaperBtn=document.getElementById("wallpaper-btn");
const soundBtn=document.getElementById("sound-btn");
const systemBtn=document.getElementById("system-btn");
const aboutBtn=document.getElementById("about-btn");

const appearanceWindow=document.getElementById("appearance-window");
const wallpaperWindow=document.getElementById("wallpaper-window");
const soundWindow=document.getElementById("sound-window");
const systemWindow=document.getElementById("system-window");
const aboutWindow=document.getElementById("about-window")

appearanceBtn.addEventListener("click",function(){
    appearanceWindow.style.display="block";
    wallpaperWindow.style.display="none";
    soundWindow.style.display="none";
    systemWindow.style.display="none";
    aboutWindow.style.display="none";
});

wallpaperBtn.addEventListener("click",function(){
    wallpaperWindow.style.display="block";    
    appearanceWindow.style.display="none";
    soundWindow.style.display="none";
    systemWindow.style.display="none";
    aboutWindow.style.display="none";
});

soundBtn.addEventListener("click",function(){
    soundWindow.style.display="block";    
    wallpaperWindow.style.display="none";    
    appearanceWindow.style.display="none";
    systemWindow.style.display="none";
    aboutWindow.style.display="none";
});

systemBtn.addEventListener("click",function(){
    systemWindow.style.display="block";
    soundWindow.style.display="none";    
    wallpaperWindow.style.display="none";    
    appearanceWindow.style.display="none";
    aboutWindow.style.display="none";
});

aboutBtn.addEventListener("click",function(){
    aboutWindow.style.display="block";
    systemWindow.style.display="none";
     soundWindow.style.display="none";    
    wallpaperWindow.style.display="none";    
    appearanceWindow.style.display="none";
});

const desktop=document.getElementById("desktop");

const catBg=document.getElementById("cat-bg");
catBg.addEventListener("click",function(){
 desktop.style.backgroundImage="url(assets/background/cat.jpg)"
});

const dayBg=document.getElementById("day-bg");
dayBg.addEventListener("click",function(){
 desktop.style.backgroundImage="url(assets/background/day.jpg)"
});

const eagleBg=document.getElementById("eagle-bg");
eagleBg.addEventListener("click",function(){
 desktop.style.backgroundImage="url(assets/background/eagle.jpg)"
});

const kitBg=document.getElementById("kit-bg");
kitBg.addEventListener("click",function(){
 desktop.style.backgroundImage="url(assets/background/kit.jpg)"
});

const natureBg=document.getElementById("nature-bg");
natureBg.addEventListener("click",function(){
 desktop.style.backgroundImage="url(assets/background/nature.jpg)"
});

const nightBg=document.getElementById("night-bg");
nightBg.addEventListener("click",function(){
 desktop.style.backgroundImage="url(assets/background/night.jpg)"
});

const night2Bg=document.getElementById("night2-bg");
night2Bg.addEventListener("click",function(){
 desktop.style.backgroundImage="url(assets/background/night2.jpg)"
});

const sheepBg=document.getElementById("sheep-bg");
sheepBg.addEventListener("click",function(){
 desktop.style.backgroundImage="url(assets/background/sheep.jpg)"
});



const root=document.documentElement;

document.querySelector("#day-theme-btn").onclick=()=>{
    root.style.setProperty("--window-bg","white")
    root.style.setProperty("--window-title","#a5aaa3")
    root.style.setProperty("--text-primary","black")
    root.style.setProperty("--taskbar-border","white")
    root.style.setProperty("--window-border-dark","black")
}

document.querySelector("#night-theme-btn").onclick=()=>{
    root.style.setProperty("--window-bg","#2b2c2a")
    root.style.setProperty("--window-title","#070707")
    root.style.setProperty("--text-primary","white")
    root.style.setProperty("--taskbar-border","grey")
    root.style.setProperty("--window-border-dark","black")
    root.style.setProperty("--button-hover","#2c2b2b")
    root.style.setProperty("--text-light","#ece6e6")
}

document.querySelector("#wood-theme").onclick=()=>{
    root.style.setProperty("--window-bg","#f1d8a8")
    root.style.setProperty("--window-title","#ece1bb")
    root.style.setProperty("--text-primary","black")
    root.style.setProperty("--taskbar-border","grey")
    root.style.setProperty("--window-border-dark","black")
    root.style.setProperty("--button-hover","#eeddbc")
    root.style.setProperty("--text-light","#ece6e6")
}

document.querySelector("#red-theme").onclick=()=>{
    root.style.setProperty("--window-bg","#e65d5d")
    root.style.setProperty("--window-title","#f38383")
    root.style.setProperty("--text-primary","white")
    root.style.setProperty("--taskbar-border","black")
    root.style.setProperty("--window-border-dark","black")
    root.style.setProperty("--button-hover","#f88f8f")
    root.style.setProperty("--text-light","#ece6e6")
}

document.querySelector("#hacker-theme").onclick=()=>{
    root.style.setProperty("--window-bg","#3dec45")
    root.style.setProperty("--window-title","#9ce969")
    root.style.setProperty("--text-primary","black")
    root.style.setProperty("--taskbar-border","yellowgreen")
    root.style.setProperty("--window-border-dark","black")
    root.style.setProperty("--button-hover","#95db6c")
    root.style.setProperty("--text-light","#ece6e6")
}

document.querySelector("#reset-btn").onclick=()=>{
    root.style.setProperty("--window-bg","#C0C0C0")
    root.style.setProperty("--window-title","#000080")
    root.style.setProperty("--text-primary","#000000")
    root.style.setProperty("--taskbar-border","#FFFFFF")
    root.style.setProperty("--window-border-dark","#404040")
    root.style.setProperty("--button-hover","#D6D6D6")
    root.style.setProperty("--text-light","#FFFFFF")
}

document.querySelector("#purple-theme").onclick=()=>{
    root.style.setProperty("--window-bg","#1d057494")
    root.style.setProperty("--window-title","#717ddd")
    root.style.setProperty("--text-primary","#f7f3f3")
    root.style.setProperty("--taskbar-border","#0e0d0d")
    root.style.setProperty("--window-border-dark","#f5f0f0")
    root.style.setProperty("--button-hover","#19307c")
    root.style.setProperty("--text-light","#FFFFFF")
}

document.querySelector("#orange-theme").onclick=()=>{
    root.style.setProperty("--window-bg","#f16b12c5")
    root.style.setProperty("--window-title","#ee9356")
    root.style.setProperty("--text-primary","#f7f3f3")
    root.style.setProperty("--taskbar-border","#0e0e0e")
    root.style.setProperty("--window-border-dark","#f5f0f0")
    root.style.setProperty("--button-hover","#d39770")
    root.style.setProperty("--text-light","#FFFFFF")
}


document.querySelector("#yellow-theme").onclick=()=>{
    root.style.setProperty("--window-bg","#e2f112c5")
    root.style.setProperty("--window-title","#dfee56")
    root.style.setProperty("--text-primary","#f7f3f3")
    root.style.setProperty("--taskbar-border","#0e0e0e")
    root.style.setProperty("--window-border-dark","#f5f0f0")
    root.style.setProperty("--button-hover","#ccd370")
    root.style.setProperty("--text-light","#FFFFFF")
}

document.querySelector("#cyan-theme").onclick=()=>{
    root.style.setProperty("--window-bg","#12f1f1c5")
    root.style.setProperty("--window-title","#56d7ee")
    root.style.setProperty("--text-primary","#f7f3f3")
    root.style.setProperty("--taskbar-border","#0e0e0e")
    root.style.setProperty("--window-border-dark","#f5f0f0")
    root.style.setProperty("--button-hover","#70d3ce")
    root.style.setProperty("--text-light","#FFFFFF")
}

document.querySelector("#indigo-theme").onclick=()=>{
    root.style.setProperty("--window-bg","#7312f1c5")
    root.style.setProperty("--window-title","#a456ee")
    root.style.setProperty("--text-primary","#f7f3f3")
    root.style.setProperty("--taskbar-border","#0e0e0e")
    root.style.setProperty("--window-border-dark","#f5f0f0")
    root.style.setProperty("--button-hover","#9670d3")
    root.style.setProperty("--text-light","#FFFFFF")
}

document.querySelector("#black-theme").onclick=()=>{
    root.style.setProperty("--window-bg","#000000c5")
    root.style.setProperty("--window-title","#4b4a4a")
    root.style.setProperty("--text-primary","#f7f3f3")
    root.style.setProperty("--taskbar-border","#faf2f2")
    root.style.setProperty("--window-border-dark","#0c0b0b")
    root.style.setProperty("--button-hover","#231f38")
    root.style.setProperty("--text-light","#FFFFFF")
}







const arialfontBtn=document.getElementById("arial-font-btn");
arialfontBtn.addEventListener("click",function(){
    desktop.style.fontFamily="Arial, Helvetica, sans-serif";
});

const cursivefontBtn=document.getElementById("cursive-font-btn");
cursivefontBtn.addEventListener("click",function(){
    desktop.style.fontFamily="cursive";
});

const courierfontBtn=document.getElementById("courier-font-btn");
courierfontBtn.addEventListener("click",function(){
    desktop.style.fontFamily=" 'Courier New', Courier, monospace";
});


const segeofontBtn=document.getElementById("segeo-font-btn");
segeofontBtn.addEventListener("click",function(){
    desktop.style.fontFamily="  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
});


const pixelfontBtn=document.getElementById("pixel-font-btn");
pixelfontBtn.addEventListener("click",function(){
    desktop.style.fontFamily=" 'Press Start 2P' ";
});


const lookupdateBtn=document.getElementById("look-update-btn");
const lookupdateOutput=document.getElementById("update-output");
lookupdateBtn.addEventListener("click",function(){
    setTimeout(() => {
        lookupdateBtn.style.display="none";
        lookupdateOutput.style.display="block";
    }, 1000);
        setTimeout(() => {
        lookupdateOutput.textContent="Looking";
    }, 1300);
          setTimeout(() => {
        lookupdateOutput.textContent="Looking for ";
    }, 1400);
          setTimeout(() => {
        lookupdateOutput.textContent="Looking for update....";
    }, 1500);
            setTimeout(() => {
        lookupdateOutput.textContent="Looking";
    }, 1700);
          setTimeout(() => {
        lookupdateOutput.textContent="Looking for ";
    }, 1800);
          setTimeout(() => {
        lookupdateOutput.textContent="Looking for update.....";
    }, 1900);

    setTimeout(() => {
        lookupdateOutput.textContent="No Updates Until Now!";
    }, 2300);

    setTimeout(() => {
        lookupdateOutput.style.display="none";
    }, 3500);

    setTimeout(() => {
        lookupdateBtn.style.display="flex";
    }, 4000);

})