import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from 'basicLightbox';

console.log(galleryItems);

let instanceOfBasicLightbox;

const galleryItemsRetdersString = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}" onclick="return false;">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
  })
  .join("");

const galleryList = document.querySelector(".gallery");
galleryList.addEventListener("click", galleryClick);
galleryList.insertAdjacentHTML("beforeend", galleryItemsRetdersString);

function galleryClick(evt) {
  const clickEl = evt.target;
  const isGalleryItemClick = clickEl.classList.contains("gallery__image");

  if (isGalleryItemClick) {
    clickEl.classList.add();
    const largeImage = evt.target.dataset.source;
    const instanceString = `<img src="${largeImage}">`;
    instanceOfBasicLightbox = basicLightbox.create(
      instanceString,
      { onShow: (instanceOfBasicLightbox) => {} },
      { onShow: (instanceOfBasicLightbox) => {} }
    );
    instanceOfBasicLightbox.show();
    window.addEventListener("keydown", onEscapePress);
  }
}

function onEscapePress(evt) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = evt.code === ESC_KEY_CODE;
  if (isEscKey) {
    instanceOfBasicLightbox.close();
    window.removeEventListener("keydown", onEscapePress);
  }
}
