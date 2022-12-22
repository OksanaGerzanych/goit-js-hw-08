// Add imports above this line
import { galleryItems } from './gallery-items';
console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');



const markup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ description, original, preview }) => {
    return `
    <div class="gallery__item"><a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
   </a></div>`
    }).join('');
 
}
gallery.insertAdjacentHTML("beforeend", markup);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition:'bottom', captionDelay: 250 });