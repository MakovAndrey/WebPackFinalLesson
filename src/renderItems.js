// Rendering Images

export function renderImg(parentEl, items) {
    for (let item of items) {
        parentEl.insertAdjacentHTML("beforeend", imgLayout(item));
    }
}

export function imgLayout(item) {
    return `<div class="item-wrapper">
            <img class="item-img" src="${item.img}" alt="${item.title}">
            <h4 class="item-title">${item.title}</h4>
            </div>`;
}

// Rendering Audio Files

export function renderAudio(parentEl, items) {
    for (let item of items) {
        parentEl.insertAdjacentHTML("beforeend", audioLayout(item));
    }
}

export function audioLayout(item) {
    return `<div class="item-wrapper">
            <audio class="item-audio" controls>
                <source src="${item.audio}" type="audio/mpeg">
            </audio>
            <h4 class="item-title">${item.title}</h4>
        </div>`;
}

//Rendering Video Files

export function renderVideo(parentEl, items) {
    for (let item of items) {
        parentEl.insertAdjacentHTML("beforeend", videoLayout(item));
    }
}

export function videoLayout(item) {
    return `<div class="item-wrapper">
            <video class="item-video" controls="controls">
                <source src="${item.video}" type="video/mp4">
            </video>
            <h4 class="item-title">${item.title}</h4>
        </div>`;
}
