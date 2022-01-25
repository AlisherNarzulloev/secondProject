const galleryContainer4 = document.querySelector('.gallery-container4');
const galleryControlsContainer4 = document.querySelector('.gallery-controls4');
const galleryControls4 = ['previous', 'next'];
const galleryItems4 = document.querySelectorAll('.gallery-item4');

class Carousel4 {
  constructor(container, items, controls) {
    this.carouselContainer4 = container;
    this.carouselControls4 = controls;
    this.carouselArray4 = [...items];
  }

  // Update css classes for gallery
  updateGallery4() {
    this.carouselArray4.forEach(el => {
      el.classList.remove('gallery-item4-1');
      el.classList.remove('gallery-item4-2');
      el.classList.remove('gallery-item4-3');
      
    });

    this.carouselArray4.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-item4-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState4(direction) {

    if (direction.className == 'gallery-controls4-next') {
      this.carouselArray4.unshift(this.carouselArray4.pop());
    } else {
      this.carouselArray4.push(this.carouselArray4.shift());
    }
    
    this.updateGallery4();
  }
  // Construct the carousel controls
  setControls4() {
    this.carouselControls4.forEach(control => {
      galleryControlsContainer4.appendChild(document.createElement('a')).className = `gallery-controls4-${control}`;
    });

  }

  
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls4() {
    const triggers = [...galleryControlsContainer4.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls4-add') {

        } else {
          this.setCurrentState4(control);
        }

      });
    });
  }
  
}

const exampleCarousel4 = new Carousel4(galleryContainer4, galleryItems4, galleryControls4);

exampleCarousel4.setControls4();
// exampleCarousel.setNav();
exampleCarousel4.useControls4();
