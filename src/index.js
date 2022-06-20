import scss from "../scss/style.scss";
import {
    imgList,
    audioList,
    videoList,
} from "./items.js";

import {
    renderImg,
    renderAudio,
    renderVideo,
} from "./renderItems.js";

const containerEl = document.getElementById('container');

const imagesEl = document.querySelectorAll("div > img");
imagesEl.forEach((item) => {
    item.classList.add("item-img");
    item.nextElementSibling.classList.add("item-title");
});
const audiosEl = document.querySelectorAll("div > audio");
audiosEl.forEach((item) => {
    item.classList.add("item-audio");
    item.nextElementSibling.classList.add("item-title");
});
const videosEl = document.querySelectorAll("div > video");
videosEl.forEach((item) => {
    item.classList.add("item-video");
    item.nextElementSibling.classList.add("item-title");
});

renderImg(containerEl, imgList);
renderAudio(containerEl, audioList);
renderVideo(containerEl, videoList);