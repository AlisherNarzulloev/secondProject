const galleryContainer7 = document.querySelector('.gallery-container7');
const galleryControlsContainer7 = document.querySelector('.gallery-controls7');
const galleryControls7 = ['previous', 'next'];
const galleryItems7 = document.querySelectorAll('.gallery-item7');

class Carousel7 {
  constructor(container, items, controls) {
    this.carouselContainer7 = container;
    this.carouselControls7 = controls;
    this.carouselArray7 = [...items];
  }

  // Update css classes for gallery
  updateGallery7() {
    this.carouselArray7.forEach(el => {
      el.classList.remove('gallery-item7-1');
      el.classList.remove('gallery-item7-2');
      el.classList.remove('gallery-item7-3');
      
    });

    this.carouselArray7.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-item7-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState7(direction) {

    if (direction.className == 'gallery-controls7-next') {
      this.carouselArray7.unshift(this.carouselArray7.pop());
    } else {
      this.carouselArray7.push(this.carouselArray7.shift());
    }
    
    this.updateGallery7();
  }
  // Construct the carousel controls
  setControls7() {
    this.carouselControls7.forEach(control => {
      galleryControlsContainer7.appendChild(document.createElement('a')).className = `gallery-controls7-${control}`;
    });

  }

  
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls7() {
    const triggers = [...galleryControlsContainer7.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls7-add') {

        } else {
          this.setCurrentState7(control);
        }

      });
    });
  }
  
}

const exampleCarousel7 = new Carousel7(galleryContainer7, galleryItems7, galleryControls7);

exampleCarousel7.setControls7();
// exampleCarousel.setNav();
exampleCarousel7.useControls7();
