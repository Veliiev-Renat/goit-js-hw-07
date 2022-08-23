import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery')


    const gallery = galleryItems.map((picture)=>`
        <div class="gallery__item">
        <a class='gallery__link'  href="${picture.original}">
        <img src='${picture.preview}' alt='${picture.description}' class="gallery__image" data-source="${picture.original}"></img>
        </a>
        </div>  
        `).join('')
       

        galleryRef.innerHTML = gallery


galleryRef.addEventListener('click',(event)=>{
    event.preventDefault()
if(event.target.nodeName !=='IMG'){
    return
}   

    const instance = basicLightbox.create(`
    <img src="${event.target.src}" width="800px" height="600px"></img>`)
    instance.show()
})