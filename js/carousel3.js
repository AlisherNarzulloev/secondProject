const galleryContainer3 = document.querySelector('.gallery-container3');
const galleryControlsContainer3 = document.querySelector('.gallery-controls3');
const galleryControls3 = ['previous', 'next'];
const galleryItems3 = document.querySelectorAll('.gallery-item3');

class Carousel3 {
  constructor(container, items, controls) {
    this.carouselContainer3 = container;
    this.carouselControls3 = controls;
    this.carouselArray3 = [...items];
  }

  // Update css classes for gallery
  updateGallery3() {
    this.carouselArray3.forEach(el => {
      el.classList.remove('gallery-item3-1');
      el.classList.remove('gallery-item3-2');
      el.classList.remove('gallery-item3-3');
      
    });

    this.carouselArray3.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-item3-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState3(direction) {

    if (direction.className == 'gallery-controls3-next') {
      this.carouselArray3.unshift(this.carouselArray3.pop());
    } else {
      this.carouselArray3.push(this.carouselArray3.shift());
    }
    
    this.updateGallery3();
  }
  // Construct the carousel controls
  setControls3() {
    this.carouselControls3.forEach(control => {
      galleryControlsContainer3.appendChild(document.createElement('a')).className = `gallery-controls3-${control}`;
    });

  }

  
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls3() {
    const triggers = [...galleryControlsContainer3.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls3-add') {

        } else {
          this.setCurrentState3(control);
        }

      });
    });
  }
  
}

const exampleCarousel3 = new Carousel3(galleryContainer3, galleryItems3, galleryControls3);

exampleCarousel3.setControls3();
// exampleCarousel.setNav();
exampleCarousel3.useControls3();
