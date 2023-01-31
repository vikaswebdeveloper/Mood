let songIndex = 1;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("Bar");
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let audioElement = new Audio(`${songIndex}.mp3`);
let forward = document.getElementById('forward');
let previous = document.getElementById('previous');

let songs = [
    { songName: "will be decided later", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "wiided later", filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: "will be decided later", filePath: "3.mp3", coverPath: "3.jpg" },
    { songName: "will be df wecided later", filePath: "4.mp3", coverPath: "4.jpg" },
    { songName: "will ided later", filePath: "5.mp3", coverPath: "5.jpg" },
    { songName: "will be ater", filePath: "6.mp3", coverPath: "6.jpg" },
    { songName: "will bter", filePath: "7.mp3", coverPath: "7.jpg" },
    { songName: "will be deci v later", filePath: "8.mp3", coverPath: "8.jpg" },
    { songName: "will  later", filePath: "9.mp3", coverPath: "9.jpg" },
    { songName: "will be de later", filePath: "10.mp3", coverPath: "10.jpg" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('mainSong')).forEach((e) => {
        e.classList.remove('fa-pause');
        e.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('mainSong')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (e.target.classList == 'fa-solid middle cursor mainSong fa-pause') {
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
        } else {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            audioElement.src = `${songIndex}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            gif.style.opacity = 1;
        }
    })
})

forward.addEventListener('click', () => {
    if (songIndex >= 10) {
        songIndex = 1;
    } else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add('fa-pause');
    masterPlay.classList.remove('fa-play');
})

previous.addEventListener('click', () => {
    if (songIndex == 1) {
        console.log("cant do that");
    } else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
