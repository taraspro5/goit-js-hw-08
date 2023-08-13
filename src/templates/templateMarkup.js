function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
          <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
      </li>`
    )
    .join('');
}

export { createMarkup };
