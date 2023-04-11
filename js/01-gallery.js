import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

/**
 * Function creates HTML for gallery of images
 */
const markup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
);

/**
 * Function insert created markup into HTML
 */
galleryList.insertAdjacentHTML("beforeend", markup.join(""));

/**
 * Function create modal window for normal size images
 * is opening on click and closing on escape key down
 * @param {event} event object
 * @returns {void}
 */
const showImage = (event) => {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) return;

  const modalImg = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => window.addEventListener("keydown", onEsc),
      onClose: () => window.removeEventListener("keydown", onEsc),
    }
  );

  const onEsc = (evt) => {
    console.log(evt);
    if (evt.code === "Escape") {
      modalImg.close();
    }
  };
  modalImg.show();
};

/**
 * Function adds event object for click on images
 */
galleryList.addEventListener("click", showImage);
