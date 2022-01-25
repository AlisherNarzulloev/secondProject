const galleryContainer1 = document.querySelector('.gallery-container1');
const galleryControlsContainer1 = document.querySelector('.gallery-controls1');
const galleryControls1 = ['previous', 'next'];
const galleryItems1 = document.querySelectorAll('.gallery-item1');

class Carousel1 {
  constructor(container, items, controls) {
    this.carouselContainer1 = container;
    this.carouselControls1 = controls;
    this.carouselArray1 = [...items];
  }

  // Update css classes for gallery
  updateGallery1() {
    this.carouselArray1.forEach(el => {
      el.classList.remove('gallery-item1-1');
      el.classList.remove('gallery-item1-2');
      el.classList.remove('gallery-item1-3');
      
    });

    this.carouselArray1.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-item1-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState1(direction) {

    if (direction.className == 'gallery-controls1-next') {
      this.carouselArray1.unshift(this.carouselArray1.pop());
    } else {
      this.carouselArray1.push(this.carouselArray1.shift());
    }
    
    this.updateGallery1();
  }
  // Construct the carousel controls
  setControls1() {
    this.carouselControls1.forEach(control => {
      galleryControlsContainer1.appendChild(document.createElement('a')).className = `gallery-controls1-${control}`;
    });

  }

  
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls1() {
    const triggers = [...galleryControlsContainer1.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls1-add') {

        } else {
          this.setCurrentState1(control);
        }

      });
    });
  }
  
}

const exampleCarousel1 = new Carousel1(galleryContainer1, galleryItems1, galleryControls1);

exampleCarousel1.setControls1();
// exampleCarousel.setNav();
exampleCarousel1.useControls1();
