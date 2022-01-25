const galleryContainer6 = document.querySelector('.gallery-container6');
const galleryControlsContainer6 = document.querySelector('.gallery-controls6');
const galleryControls6 = ['previous', 'next'];
const galleryItems6 = document.querySelectorAll('.gallery-item6');

class Carousel6 {
  constructor(container, items, controls) {
    this.carouselContainer6 = container;
    this.carouselControls6 = controls;
    this.carouselArray6 = [...items];
  }

  // Update css classes for gallery
  updateGallery6() {
    this.carouselArray6.forEach(el => {
      el.classList.remove('gallery-item6-1');
      el.classList.remove('gallery-item6-2');
      el.classList.remove('gallery-item6-3');
      
    });

    this.carouselArray6.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-item6-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState6(direction) {

    if (direction.className == 'gallery-controls6-next') {
      this.carouselArray6.unshift(this.carouselArray6.pop());
    } else {
      this.carouselArray6.push(this.carouselArray6.shift());
    }
    
    this.updateGallery6();
  }
  // Construct the carousel controls
  setControls6() {
    this.carouselControls6.forEach(control => {
      galleryControlsContainer6.appendChild(document.createElement('a')).className = `gallery-controls6-${control}`;
    });

  }

  
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls6() {
    const triggers = [...galleryControlsContainer6.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls6-add') {

        } else {
          this.setCurrentState6(control);
        }

      });
    });
  }
  
}

const exampleCarousel6 = new Carousel6(galleryContainer6, galleryItems6, galleryControls6);

exampleCarousel6.setControls6();
// exampleCarousel.setNav();
exampleCarousel6.useControls6();
