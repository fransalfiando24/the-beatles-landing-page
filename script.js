const img = document.querySelector(".showreel img");
const song = [
    {
        id : 1,
        title : 'Dont Let Me Down',
        audio : 'Dont Let Me Down.mp3',
        cover : 'Beatles1.jpg'
    },
    {
        id : 2,
        title : 'Hey Jude',
        audio : 'Hey Jude.mp3',
        cover : 'beatles2.jpg'
    },
    {
        id : 3,
        title : 'I Want To Hold Your Hand',
        audio : 'I Want To Hold Your Hand.mp3',
        cover : 'beatles3.jpg'
    },
    {
        id : 4,
        title : 'Let It Be',
        audio : 'Let It Be.mp3',
        cover : 'beatles4.jpg'
    },
    {
        id : 5,
        title : 'Twist And Shout',
        audio : 'Twist And Shout.mp3',
        cover : 'beatles2.jpg'
    },
    {
        id : 6,
        title : 'Yesterday',
        audio : 'Yesterday.mp3',
        cover : 'beatles3.jpg'
    },
    
]

// Create an Object of Audio
let audio =new Audio();
let currentSong = 0;

// Play lagu saat website reload
window.onload = playSong();

function playSong(){
    // audio.src = `Song/${audios[currentSong]}`; -- BENER
    audio.src = `song/${song[currentSong].audio}`;
    // audio.play();
}

// Play lagu saat tekan tombol play
function togglePlayPause(){
    if(audio.paused){
        audio.play();
        let playBtn = document.querySelector('.play-pause');
        playBtn.innerHTML = '<i class="fa fa-pause"></i>';
    }
    else{
        audio.pause();
        const playBtn = document.querySelector('.play-pause');
        playBtn.innerHTML = '<i class="fa fa-play"></i>';
    }
}

function nextSong(){
    currentSong++;
    if(currentSong > song.length-1){
        currentSong = 0;
    }
    audio.src = `song/${song[currentSong].audio}`;
        audio.play();
        let playBtn = document.querySelector('.play-pause');
        playBtn.innerHTML = '<i class="fa fa-pause"></i>';

    // Ubah cover
    img.setAttribute('src', song[currentSong].cover);

    ubahJudulArtis();
}

function prevSong(){
    currentSong--;
    if(currentSong < 0){
        currentSong = song.length-1;
    }
    audio.src = `song/${song[currentSong].audio}`;
        audio.play();
        let playBtn = document.querySelector('.play-pause');
        playBtn.innerHTML = '<i class="fa fa-pause"></i>';

    // Ubah Cover
    img.setAttribute('src', song[currentSong].cover);

    ubahJudulArtis();
}

function ubahJudulArtis(){
    // Ubah Judul lagu
    const titleText = document.querySelector('.title');
    titleText.textContent = song[currentSong].title;
}
