
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