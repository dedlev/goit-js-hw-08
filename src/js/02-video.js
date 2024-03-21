import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

const localStorageKey = "videoplayer-current-time";

const savePlayerTime = localStorage.getItem(localStorageKey);

console.log(savePlayerTime)

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
    console.log(seconds);
    localStorage.setItem(localStorageKey, seconds);
}, 3000));

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });



