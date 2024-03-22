import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

const localStorageKey = "videoplayer-current-time";

const savePlayerTime = localStorage.getItem(localStorageKey);

player.setCurrentTime(savePlayerTime)
    .then(function (seconds) {
        console.log(seconds)
        })
    .catch(function (error) {
        switch (error.name) {
        case 'RangeError':
        break;

        default:
        break;
        }
});
 
player.on('timeupdate', throttle(function ({ seconds }) {
    console.log('videoplayer-current-time:', seconds);
    localStorage.setItem(localStorageKey, seconds);
}, 1000));

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });



