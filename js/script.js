let currentMusic = 0;
const music = document.querySelector("#audio");
const seekBar = document.querySelector(".seek-bar");
const songName = document.querySelector(".music-name");
const artistName = document.querySelector(".artist-name");
const disk = document.querySelector(".disk");
const libraryDiv = document.querySelector(".library-div");
const scrollSongs = document.querySelector(".scroll-songs");
const addDiv = document.querySelector(".add-div");
const chooseSong = document.querySelector(".choose-song");
const settingsDiv = document.querySelector(".settings-div");
const profileDiv = document.querySelector(".profile-div");
const currentTime = document.querySelector(".current-time");
const musicDuration = document.querySelector(".song-duration");
const playBtn = document.querySelector(".play-btn");
const forwardBtn = document.querySelector(".forward-btn");
const backwardBtn = document.querySelector(".backward-btn");
const colorChange = document.querySelector(".color-change");
const phone = document.querySelector(".phone");
const day = document.querySelector(".day");
const night = document.querySelector(".night");
const like = document.querySelector(".like");
const dislike = document.querySelector(".dislike");
const footerButtons = document.querySelectorAll(".footerButtons");
const repeat = document.querySelector(".repeat");
const shuffle = document.querySelector(".shuffle");

const fBtn1 = document.querySelector(".fBtn1");
const fBtn2 = document.querySelector(".fBtn2");
const fBtn3 = document.querySelector(".fBtn3");
const fBtn4 = document.querySelector(".fBtn4");
const fBtn5 = document.querySelector(".fBtn5");

libraryDiv.style.display = "none";
addDiv.style.display = "none";
settingsDiv.style.display = "none";
profileDiv.style.display = "none";

document.getElementById("mode-btn").addEventListener("click", ()=> {
    colorChange.classList.toggle("dark");
    disk.classList.toggle("red");
    day.classList.toggle("opaklik");
    like.classList.toggle("like-dark");
    dislike.classList.toggle("like-dark");
    forwardBtn.classList.toggle("like-dark");
    backwardBtn.classList.toggle("like-dark");
    playBtn.classList.toggle("like-dark");
    seekBar.classList.toggle("dark-mode");

    fBtn1.classList.toggle("like-dark");
    fBtn2.classList.toggle("like-dark");
    fBtn3.classList.toggle("like-dark");
    fBtn4.classList.toggle("like-dark");
    fBtn5.classList.toggle("like-dark");
    chooseSong.classList.toggle("dark");
    repeat.classList.toggle("like-dark");
    shuffle.classList.toggle("like-dark");
});

songs.forEach(islem);

function islem(arac, index) {
    let html_kodu = `
       <p>${index + 1} <span>${arac.name}</span> </p>
       <p> ‏ - <span>${arac.artist}</span> </p>
       <img class = "resimcik" src="${arac.cover}">
       <br>`;

     let htmlElemani = document.createElement("div");
     htmlElemani.style.display = "flex";
     htmlElemani.style.alignItems = "center";
     htmlElemani.style.textAlign = "center";
     htmlElemani.style.paddingBottom = "15px";
     htmlElemani.style.textAlign = "center";
     htmlElemani.innerHTML = html_kodu;
     scrollSongs.append(htmlElemani);
}; 

playBtn.addEventListener("click", () => {
    if (playBtn.className.includes("pause")) {
        music.play();
    } else {
        music.pause();
    }
    playBtn.classList.toggle("pause");
    disk.classList.toggle("play");
});

//set music
const setMusic = (i) => {
    seekBar.value = 0; //set range slide value to 0
    let song = songs[i];
    currentMusic = i; 
    music.src = song.path;
    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;
    currentTime.innerHTML = "00:00";
    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
}
setMusic(0);

//formatting time in min and seconds format
const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    } 
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

//seek bar
setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
    if (Math.floor(music.currentTime) == Math.floor(seekBar.max)) {
        if (repeat.className.includes("active")){
            setMusic(currentMusic);
            playMusic();
        } else {
            forwardBtn.click();
        }
    }
}, 500);

repeat.addEventListener("click", () => {
    repeat.classList.toggle("active");
});

shuffle.addEventListener("click", () => {
    shuffle.classList.toggle("active");
});

like.addEventListener("click", () => {
    like.classList.toggle("active");
});

dislike.addEventListener("click", () => {
    dislike.classList.toggle("active");
});

fBtn1.addEventListener("click", () => {
    fBtn1.classList.toggle("active");
    fBtn2.classList.remove("active");
    fBtn3.classList.remove("active");
    fBtn4.classList.remove("active");
    fBtn5.classList.remove("active");
    disk.style.display = "block";
    libraryDiv.style.display = "none";
    addDiv.style.display = "none";
    settingsDiv.style.display = "none";
    profileDiv.style.display = "none";
});

fBtn2.addEventListener("click", () => {
    fBtn1.classList.remove("active");
    fBtn2.classList.toggle("active");
    fBtn3.classList.remove("active");
    fBtn4.classList.remove("active");
    fBtn5.classList.remove("active");
    libraryDiv.classList.toggle("degis");
    if (libraryDiv.className.includes("degis")) {
        disk.style.display = "none";
        libraryDiv.style.display = "block";
        addDiv.style.display = "none";
        settingsDiv.style.display = "none";
        profileDiv.style.display = "none";
    } else {
        disk.style.display = "block";
        libraryDiv.style.display = "none";
        addDiv.style.display = "none";
        settingsDiv.style.display = "none";
        profileDiv.style.display = "none";
    }
});

fBtn3.addEventListener("click", () => {
    fBtn1.classList.remove("active");
    fBtn2.classList.remove("active");
    fBtn3.classList.toggle("active");
    fBtn4.classList.remove("active");
    fBtn5.classList.remove("active");
    addDiv.classList.toggle("degis");
    if (addDiv.className.includes("degis")) {
        disk.style.display = "none";
        libraryDiv.style.display = "none";
        addDiv.style.display = "block";
        settingsDiv.style.display = "none";
        profileDiv.style.display = "none";
    } else {
        disk.style.display = "block";
        libraryDiv.style.display = "none";
        addDiv.style.display = "none";
        settingsDiv.style.display = "none";
        profileDiv.style.display = "none";
    }
});

fBtn4.addEventListener("click", () => {
    fBtn1.classList.remove("active");
    fBtn2.classList.remove("active");
    fBtn3.classList.remove("active");
    fBtn4.classList.toggle("active");
    fBtn5.classList.remove("active");
    settingsDiv.classList.toggle("degis");
    if (settingsDiv.className.includes("degis")) {
        disk.style.display = "none";
        libraryDiv.style.display = "none";
        addDiv.style.display = "none";
        settingsDiv.style.display = "block";
        profileDiv.style.display = "none";
    } else {
        disk.style.display = "block";
        libraryDiv.style.display = "none";
        addDiv.style.display = "none";
        settingsDiv.style.display = "none";
        profileDiv.style.display = "none";
    }
});

fBtn5.addEventListener("click", () => {
    fBtn1.classList.remove("active");
    fBtn2.classList.remove("active");
    fBtn3.classList.remove("active");
    fBtn4.classList.remove("active");
    fBtn5.classList.toggle("active");
    profileDiv.classList.toggle("degis");
    
    if (profileDiv.className.includes("degis")) {
        disk.style.display = "none";
        libraryDiv.style.display = "none";
        addDiv.style.display = "none";
        settingsDiv.style.display = "none";
        profileDiv.style.display = "block";
    } else {
        disk.style.display = "block";
        libraryDiv.style.display = "none";
        addDiv.style.display = "none";
        settingsDiv.style.display = "none";
        profileDiv.style.display = "none";
    }
});

seekBar.addEventListener("change", () => {
    music.currentTime = seekBar.value;
});

const playMusic = () => {
    music.play();
    playBtn.classList.remove("pause");
    disk.classList.add("play");
}

//forward and backward button
forwardBtn.addEventListener("click", () => {
    if (currentMusic >= songs.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }

    setMusic(currentMusic);
    playMusic();
});

backwardBtn.addEventListener("click", () => {
    if (currentMusic <= 0) {
        currentMusic = songs.length - 1;
    } else {
        currentMusic--;
    }

    setMusic(currentMusic);
    playMusic();
});