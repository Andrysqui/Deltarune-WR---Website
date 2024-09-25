document.addEventListener('DOMContentLoaded', (event) => {
    //About Spamrotten button:
    const textElement = document.getElementById('clickable-text');
    const hiddenContent = document.getElementById('hidden-content');

    textElement.addEventListener('click', () => {
        hiddenContent.classList.toggle('show');
    });


    //Background main music:
    const backgroundMusicMain = document.getElementById('backgroundMusicMain');
    let playing = false;

    document.addEventListener('click', function() {
        if (playing == false) {
            backgroundMusicMain.volume = 0.35;
            backgroundMusicMain.play();
            playing = true;
        }
    });

    //Audio player:
    const audioPlayer = document.getElementById('audio-player');
    const sampleAudio = document.getElementById('musicSample');
    let isPlaying = false;

    audioPlayer.addEventListener('click', function() {
        audioPlayer.classList.toggle('breathing');
        
        if (isPlaying) {
            sampleAudio.pause();
            backgroundMusicMain.play();
        } else {
            sampleAudio.play();
            backgroundMusicMain.pause();
        }

        isPlaying = !isPlaying;
    });
});

//Create the Iframe and player for the Youtube video:
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-player', {
        height: '315',
        width: '560',
        videoId: 'xTg3uQLE1PQ',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

//Show in the console where the player is ready:
function onPlayerReady() {
    console.log('Player is ready');
}

//Handle when the video is paused, played, stopped, etc:
function onPlayerStateChange(event) {
    switch (event.data) {
        case YT.PlayerState.PLAYING:
            console.log('Video is playing');
            document.getElementById('backgroundMusicMain').pause();
            break;
        case YT.PlayerState.PAUSED:
            console.log('Video is paused');
            document.getElementById('backgroundMusicMain').play();
            break;
        case YT.PlayerState.ENDED:
            console.log('Video has ended');
            document.getElementById('backgroundMusicMain').play();
            break;
        case YT.PlayerState.BUFFERING:
            console.log('Video is buffering');
            break;
        case YT.PlayerState.CUED:
            console.log('Video is cued');
            break;
        default:
            console.log('Unrecognized state');
    }
}

//RED ROOM background music:
const backgroundMusicRed = document.getElementById('backgroundMusicRed');

document.addEventListener('mousemove', function() {
    backgroundMusicRed.play();
});

//RED ROOM donate button:
const donateButton = document.getElementById('red-room-button');
const popUp = document.getElementById('popup');
const yesButton = document.getElementById('yes-popup-button');
const video = document.getElementById('red-room-video');
const videoContainerRed = document.getElementById('red-room-video-container');

let buttonPressed = false;

donateButton.addEventListener('click', function() {
    if (buttonPressed === false) {
        popUp.style.display = 'block';
    }
});

yesButton.addEventListener('click', function() {
    video.play();
    videoContainerRed.style.opacity = '1';
    popUp.style.display = 'none';
    buttonPressed = true;
    donateButton.style.opacity = '0';
    backgroundMusicRed.pause();
});