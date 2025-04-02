// console.log("Welcome to music world");
// let songIndex = 0;
// console.log(audioElement);
// audioElement.play();
// //let audioElement = new Audio('songs/English songs/Bam Bam.mp3');
// let  = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar')
// let gif = document.getElementById('gif');
// let songItems = Array.from(document.getElementsByClassName('songItem'));

// let songs = [
//     { songName: "2002", filepath: "songs/English songs/2002.mp3", coverpath: "" },
//     { songName: "Bam Bam", filepath: "songs/English songs/Bam Bam.mp3", coverpath: "" },
//     { songName: "Feel my face", filepath: "songs/English songs/Feel my face.mp3", coverpath: "" },
//     { songName: "", filepath: "", coverpath: "" },
//     { songName: "", filepath: "", coverpath: "" },
//     { songName: "", filepath: "", coverpath: "" },
//     { songName: "", filepath: "", coverpath: "" },

// ]

// songItems.forEach((element, i) => {
//     console.log(element, i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverpath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// });

// masterPlay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;

//     }
// }
// )
// // Listen to events
// audioElement.addEventListener('timeupdate', () => {
//     // update seekbar
//     progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
//     myProgressBar.value = progress;
// }
// )
// myProgressBar.addEventListener('change', () => {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
// }
// )


let audioElement = new Audio('assets/songs/Faded(PaglaSongs).mp3');
let icons = document.querySelectorAll('.icons li')[1];

icons.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
    }
    else {
        audioElement.pause();
    }
});

audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});
