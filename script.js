// -------------- Welcome Liquid Background ----------------
const canvasWelcome = document.getElementById("liquid-bg");
const ctxWelcome = canvasWelcome.getContext("2d");
canvasWelcome.width = window.innerWidth;
canvasWelcome.height = window.innerHeight;
let t = 0;

function drawLiquidWelcome(){
    ctxWelcome.clearRect(0,0,canvasWelcome.width,canvasWelcome.height);
    let gradient = ctxWelcome.createLinearGradient(0,0,canvasWelcome.width,canvasWelcome.height);
    gradient.addColorStop(0, `hsl(${200 + Math.sin(t*3)*70}, 100%, 50%)`);
    gradient.addColorStop(1, `hsl(${280 + Math.cos(t*3)*70}, 100%, 50%)`);
    ctxWelcome.fillStyle = gradient;
    ctxWelcome.fillRect(0,0,canvasWelcome.width,canvasWelcome.height);
    t+=0.02;
    requestAnimationFrame(drawLiquidWelcome);
}
drawLiquidWelcome();

setTimeout(()=>{
    const welcome = document.getElementById("welcome-screen");
    welcome.style.transition = "opacity 1s ease";
    welcome.style.opacity = 0;
    setTimeout(()=>{
        welcome.style.display="none";
        document.querySelector(".player").style.display="flex";
        switchAlbum(0);
    },1000);
},3000);

// ---------------- Player ----------------
const albums = [
    {
        name:"Album1",
        artist:"artist1",
        cover:"assets/album1/cover.jpg",
        bgColor:[209,209,209],
        songs:[

        ]
    },
    {
        name:"Album2",
        artist:"artist2",
        cover:"assets/album2/cover.jpg",
        bgColor:[47,167,204],
        songs:[
            {title:"song name", file:"assets/album1/song.mp3"},

        ]
    },
    {
        name:"Album3",
        artist:"artist3",
        cover:"assets/album3/cover.jpg",
        bgColor: [195,67,204],
        songs:[
            {title:"song name", file:"assets/album1/song.mp3"},

        ]
    }
];

let currentAlbum = 0;
let currentSongIndex = 0;
const audio = new Audio();
const playlistEl = document.querySelector(".playlist");
const volumeSlider = document.getElementById("volume");
const playBtn = document.getElementById("play");
const progress = document.querySelector("progress");
const albumNameEl = document.getElementById("album-name");
const artistNameEl = document.getElementById("artist-name");

// ---------------- Player Background Canvas ----------------
const canvasPlayer = document.getElementById("player-bg");
const ctx = canvasPlayer.getContext("2d");
canvasPlayer.width = window.innerWidth;
canvasPlayer.height = window.innerHeight;

let waveProgress = 1;
let currentColor = [...albums[0].bgColor];
let targetColor = [...albums[0].bgColor];

function lerp(a,b,t){ return a + (b-a)*t; }

function drawWave(){
    ctx.clearRect(0,0,canvasPlayer.width,canvasPlayer.height);
    for(let y=0;y<canvasPlayer.height;y++){
        let ratio = y/canvasPlayer.height;
        let r = lerp(currentColor[0],targetColor[0],waveProgress)*ratio;
        let g = lerp(currentColor[1],targetColor[1],waveProgress)*ratio;
        let b = lerp(currentColor[2],targetColor[2],waveProgress)*ratio;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(0,y,canvasPlayer.width,1);
    }
    if(waveProgress<1) waveProgress+=0.02;
    requestAnimationFrame(drawWave);
}
drawWave();

// ---------------- Switch Album ----------------
function switchAlbum(index){
    currentAlbum = index;
    const album = albums[index];
    targetColor = [...album.bgColor];
    waveProgress = 0;

    document.querySelector(".album-cover").src = album.cover;
    albumNameEl.textContent = album.name;
    artistNameEl.textContent = album.artist;

    playlistEl.innerHTML = "";
    album.songs.forEach((song, idx)=>{
        const li = document.createElement("li");
        li.textContent = song.title;
        li.addEventListener("click", ()=> playSong(idx));
        playlistEl.appendChild(li);
    });
    currentSongIndex = 0;
}

// ---------------- Play Song ----------------
function playSong(idx){
    const album = albums[currentAlbum];
    const song = album.songs[idx];
    currentSongIndex = idx;
    audio.src = song.file;
    audio.play();
    playBtn.textContent = "⏸";

    document.querySelectorAll(".playlist li").forEach(i=>i.classList.remove("active"));
    playlistEl.children[idx].classList.add("active");
}

// ---------------- Controls ----------------
playBtn.addEventListener("click", ()=>{
    if(audio.src){
        if(audio.paused){ audio.play(); playBtn.textContent="⏸"; }
        else { audio.pause(); playBtn.textContent="▶️"; }
    }
});

document.getElementById("prev").addEventListener("click", ()=>{
    const album = albums[currentAlbum];
    currentSongIndex = (currentSongIndex-1+album.songs.length)%album.songs.length;
    playSong(currentSongIndex);
});

document.getElementById("next").addEventListener("click", ()=>{
    const album = albums[currentAlbum];
    currentSongIndex = (currentSongIndex+1)%album.songs.length;
    playSong(currentSongIndex);
});

audio.addEventListener("timeupdate", ()=>{
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

audio.addEventListener("ended", ()=>{
    document.getElementById("next").click();
});

volumeSlider.addEventListener("input", ()=>{ audio.volume = volumeSlider.value; });
