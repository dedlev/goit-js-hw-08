import Vimeo from "@vimeo/player";

const iframe = document.querySelector('iframe');

    const player = new Vimeo(iframe);

    player.on('play', function(timeupdate) {
        console.log('played the video!');
        console.log(timeupdate);

        const localStorageKey = "videoplayer-current-time"

        localStorage.setItem(localStorageKey, JSON.stringify(timeupdate))

        // localStorage.clear();
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });



