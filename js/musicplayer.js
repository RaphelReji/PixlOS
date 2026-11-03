const songs = [
  {
      title:"Go Neffex",
      artist:"pixelman",
      audio:"assets/audios/song1.mp3",
      cover:"assets/cover/cover1.png"

  },

    {
      title:"Go Neffex",
      artist:"pixelman",
      audio:"assets/audios/song1.mp3",
      cover:"assets/cover/cover1.png"

  },

    {
      title:"Go Neffex",
      artist:"pixelman",
      audio:"assets/audios/song1.mp3",
      cover:"assets/cover/cover1.png"

  }
];


const audio = document.getElementById("audio");

const playButton = document.querySelector('.play-btn');

let currentSong = 0;

function loadSong(index){
  const song = songs[index];

  audio.src = song.audio;

  document.getElementById("song-title").textContent = song.title;

   document.getElementById("artist-name").textContent = song.artist;

    document.getElementById("album-art").src = song.cover;

}


function playSong(){

  audio.play();

}

function pauseSong(){
  audio.pause();

  playButton.textContent = "|>"
}


playButton.addEventListener("click", () => {
  if (audio.paused){
    playSong();
  }else{
    pauseSong();
  }
});

loadSong(0)

const songList = document.getElementById("song-list");

songs.forEach((song, index) => {
  const item = document.createElement("button");

  item.className = "song-item";

  item.innerHTML = `
  <img src="${song.cover}" class="covers">
  <div>
  <strong>${song.title}</strong>
  <small>${song.title}</small>
  </div>
  `;

  item.addEventListener("click", () =>{
    currentSong = index;

    loadSong(currentSong)
    playSong();
  });

  songList.appendChild(item)
})

const disk = document.getElementById("album-art")
playButton.addEventListener('click',()=>{
    if(playButton.className.includes('pause')){
        playSong();
    }
    else{
        pauseSong();
    }
    playButton.classList.toggle('pause')
    disk.classList.toggle('play');
});
