const galleryContainer8 = document.querySelector('.gallery-container8');
const galleryControlsContainer8 = document.querySelector('.gallery-controls8');
const galleryControls8 = ['previous', 'next'];
const galleryItems8 = document.querySelectorAll('.gallery-item8');
const galleryText8 = document.querySelectorAll('.gallery-text8')

class Carousel8 {
  constructor(container, items, text, controls) {
    this.carouselContainer8 = container;
    this.carouselControls8 = controls;
    this.carouselArray8 = [...items];
    this.carouselText8 = [...text];
  }

  // Update css classes for gallery
  updateGallery8() {
    this.carouselArray8.forEach(el => {
      el.classList.remove('gallery-item8-1');
      el.classList.remove('gallery-item8-2');
      el.classList.remove('gallery-item8-3');
    });

    this.carouselArray8.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-item8-${i+1}`);
    });

    this.carouselText8.forEach(el => {
      el.classList.remove('gallery-text8-1');
      el.classList.remove('gallery-text8-2');
      el.classList.remove('gallery-text8-3');
    });

    this.carouselText8.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-text8-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState8(direction) {

    if (direction.className == 'gallery-controls8-next') {
      this.carouselArray8.unshift(this.carouselArray8.pop());
      this.carouselText8.unshift(this.carouselText8.pop());
    } else {
      this.carouselArray8.push(this.carouselArray8.shift());
      this.carouselText8.push(this.carouselText8.shift());
    }
    
    this.updateGallery8();
  }
  // Construct the carousel controls
  setControls8() {
    this.carouselControls8.forEach(control => {
      galleryControlsContainer8.appendChild(document.createElement('a')).className = `gallery-controls8-${control}`;
    });

  }

  
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls8() {
    const triggers = [...galleryControlsContainer8.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls8-add') {

        } else {
          this.setCurrentState8(control);
        }

      });
    });
  }
  
}

const exampleCarousel8 = new Carousel8(galleryContainer8, galleryItems8, galleryText8, galleryControls8);

exampleCarousel8.setControls8();
// exampleCarousel.setNav();
exampleCarousel8.useControls8();
