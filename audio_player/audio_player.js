let title = document.getElementById('title');
let slider = document.getElementById('duration_slider');
let avatarSong = document.getElementById('avatar_song');
let present = document.getElementById('present');
let total = document.getElementById('total');
let artist = document.getElementById('artist');
let playOrPause = document.getElementById('play');
let timer;
let index_song = 0;
let song = document.createElement('audio');
let playSong = false;
let listSong = [
    {
        name: "first song",
        path: "https://firebasestorage.googleapis.com/v0/b/chinhcomhut-cff0e.appspot.com/o/Sneaky-Snitch.mp3?alt=media&token=d69403c6-efd4-45d5-be54-1a071fe4d9d7",
        img: "https://firebasestorage.googleapis.com/v0/b/chinhcomhut-cff0e.appspot.com/o/luffy1.jpg?alt=media&token=20f255c5-f4c7-4dad-a1fb-df78a2e079d0",
        singer: "Đan Trường"
    }
    ,
    {
        name: "second song",
        path: "https://firebasestorage.googleapis.com/v0/b/chinhcomhut-cff0e.appspot.com/o/Am-thanh-u-hu-www_tiengdong_com.mp3?alt=media&token=69a26b53-8ede-4477-9f4c-89756ba4ea4e",
        img: "https://firebasestorage.googleapis.com/v0/b/chinhcomhut-cff0e.appspot.com/o/Nami.webp?alt=media&token=b5787064-d6b9-4a74-8716-8b699026817c",
        singer: "Nguyên Vũ"
    },
    {
        name: "first song",
        path: "https://firebasestorage.googleapis.com/v0/b/chinhcomhut-cff0e.appspot.com/o/Sneaky-Snitch.mp3?alt=media&token=d69403c6-efd4-45d5-be54-1a071fe4d9d7",
        img: "https://firebasestorage.googleapis.com/v0/b/chinhcomhut-cff0e.appspot.com/o/luffy1.jpg?alt=media&token=20f255c5-f4c7-4dad-a1fb-df78a2e079d0",
        singer: "Đàm Vĩnh Hưng"
    }
];
function loadSong(index_song) {
    clearInterval(timer);
    song.src = listSong[index_song].path;
    title.innerHTML = listSong[index_song].name;
    artist.innerHTML = listSong[index_song].singer;
    avatarSong.src = listSong[index_song].img;
    // song.load();
    total.innerHTML = listSong.length;
    timer = setInterval(rangeSlider,1000);
    // present.innerHTML = index_song+1;
}
loadSong(index_song);
function playAndPause() {
    playSong = !playSong;
    if(playSong){
        song.play();
        console.log('song -->', song.duration)
        playOrPause.innerHTML = '<i class="bi bi-play-circle">'
    } else {
        song.pause();
        playOrPause.innerHTML = '<i class="bi bi-pause-circle"></i>'
    }
}
//duration: độ dài bài hát
//currentTime: là thời gian đang chạy hiện tại của bài hát
function rangeSlider() {
    let position = 0;
    if(!isNaN(song.duration)){
        position = (song.currentTime/song.duration)*100;
        slider.value = position;
    }
    if(song.ended){
        index_song +=1;
        loadSong(index_song);
        playSong = false;
        playAndPause();
    }
}
function changeSlider() {
    let slider_change = (song.duration * slider.value)/100;
    song.currentTime = slider_change;
}
