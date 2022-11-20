import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const imgMarkup = galleryItems
  .map(
    (imageGallery) => `
  <a class="gallery__link" href="${imageGallery.original}">
    <img
      class="gallery__image"
      src="${imageGallery.preview}"
      data-source="${imageGallery.original}"
      alt="${imageGallery.description}"
    />
  </a>
`
  )
  .join("");
galleryEl.insertAdjacentHTML("beforeend", imgMarkup);
galleryEl.addEventListener("click", onClick);

function onClick(event) {
  blockStandartAction(event);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width = "800" height = "600">`
  );
  instance.show();

  galleryEl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
function blockStandartAction(event) {
  event.preventDefault();
}
