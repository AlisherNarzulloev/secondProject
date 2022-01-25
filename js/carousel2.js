const galleryContainer2 = document.querySelector('.gallery-container2');
const galleryControlsContainer2 = document.querySelector('.gallery-controls2');
const galleryControls2 = ['previous', 'next'];
const galleryItems2 = document.querySelectorAll('.gallery-item2');

class Carousel2 {
  constructor(container, items, controls) {
    this.carouselContainer2 = container;
    this.carouselControls2 = controls;
    this.carouselArray2 = [...items];
  }

  // Update css classes for gallery
  updateGallery2() {
    this.carouselArray2.forEach(el => {
      el.classList.remove('gallery-item2-1');
      el.classList.remove('gallery-item2-2');
      el.classList.remove('gallery-item2-3');
      
    });

    this.carouselArray2.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-item2-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState2(direction) {

    if (direction.className == 'gallery-controls2-next') {
      this.carouselArray2.unshift(this.carouselArray2.pop());
    } else {
      this.carouselArray2.push(this.carouselArray2.shift());
    }
    
    this.updateGallery2();
  }
  // Construct the carousel controls
  setControls2() {
    this.carouselControls2.forEach(control => {
      galleryControlsContainer2.appendChild(document.createElement('a')).className = `gallery-controls2-${control}`;
    });

  }

  
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls2() {
    const triggers = [...galleryControlsContainer2.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls2-add') {

        } else {
          this.setCurrentState2(control);
        }

      });
    });
  }
  
}

const exampleCarousel2 = new Carousel2(galleryContainer2, galleryItems2, galleryControls2);

exampleCarousel2.setControls2();
// exampleCarousel.setNav();
exampleCarousel2.useControls2();
