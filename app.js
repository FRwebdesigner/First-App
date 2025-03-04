const music = new Audio('10.mp3');



const songs = [
    {
        id:"1",
        songName:` HeartBreakCity <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/1.jpg"
    },
    {
        id:"2",
        songName:` I'm Addicted <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/2.jpg"
    },
    {
        id:"3",
        songName:` Take A Bow <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/3.jpg"
    },
    {
        id:"4",
        songName:` Rain <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/4.jpg"
    },
    {
        id:"5",
        songName:` Lucky Star <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/5.jpg"
    },
    {
        id:"6",
        songName:` Future <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/6.jpg"
    },
    {
        id:"7",
        songName:` Hung Up <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/7.jpg"
    },
    {
        id:"8",
        songName:` Like A Prayer <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/8.jpg"
    },
    {
        id:"9",
        songName:` What It Feels Like For A Girl <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/9.jpg"
    },
    {
        id:"10",
        songName:` Song For The Lonely <br>
        <div class="subtitle">Cher</div>`,
        poster: "img/10.jpg"
    },
    {
        id:"11",
        songName:` Believe <br>
        <div class="subtitle">Cher</div>`,
        poster: "img/11.jpg"
    },
    {
        id:"12",
        songName:` Material Girl <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/12.jpg"
    },
    {
        id:"13",
        songName:` Frozen <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/13.jpg"
    },
    {
        id:"14",
        songName:` Nothing Fails <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/14.jpg"
    },
    {
        id:"15",
        songName:` Dark Horse <br>
        <div class="subtitle">Katy Perry</div>`,
        poster: "img/15.jpg"
    },
    {
        id:"16",
        songName:` If I Could Turn Back Time <br>
        <div class="subtitle">Cher</div>`,
        poster: "img/16.jpg"
    },
    {
        id:"17",
        songName:` Live To Tell <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/17.jpg"
    },
    {
        id:"18",
        songName:` She's Not Me <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/18.jpg"
    },
    {
        id:"19",
        songName:` Turning Tables <br>
        <div class="subtitle">Adele</div>`,
        poster: "img/19.jpg"
    },
    {
        id:"20",
        songName:` Forever Young <br>
        <div class="subtitle">Rod Stewart</div>`,
        poster: "img/20.jpg"
    },
    {
        id:"21",
        songName:` Born This Way <br>
        <div class="subtitle">Lady Gaga</div>`,
        poster: "img/21.jpg"
    },
    {
        id:"22",
        songName:` SOS <br>
        <div class="subtitle">ABBA</div>`,
        poster: "img/22.jpg"
    },
    {
        id:"23",
        songName:` Clocks <br>
        <div class="subtitle">Coldplay</div>`,
        poster: "img/23.jpg"
    },
    {
        id:"24",
        songName:` We Are The Champions <br>
        <div class="subtitle">Queen</div>`,
        poster: "img/24.jpg"
    },
    {
        id:"25",
        songName:` IDOL <br>
        <div class="subtitle">Yoasobi</div>`,
        poster: "img/25.jpg"
    },
    {
        id:"26",
        songName:` Only My Railgun <br>
        <div class="subtitle">fripSide</div>`,
        poster: "img/26.jpg"
    },
    {
        id:"27",
        songName:` Connect <br>
        <div class="subtitle">Claris</div>`,
        poster: "img/27.jpg"
    },
    {
        id:"28",
        songName:` Amazing <br>
        <div class="subtitle">Madonna</div>`,
        poster: "img/9.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index++;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)"; 
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
})