const galleryContainer5 = document.querySelector('.gallery-container5');
const galleryControlsContainer5 = document.querySelector('.gallery-controls5');
const galleryControls5 = ['previous', 'next'];
const galleryItems5 = document.querySelectorAll('.gallery-item5');

class Carousel5 {
  constructor(container, items, controls) {
    this.carouselContainer5 = container;
    this.carouselControls5 = controls;
    this.carouselArray5 = [...items];
  }

  // Update css classes for gallery
  updateGallery5() {
    this.carouselArray5.forEach(el => {
      el.classList.remove('gallery-item5-1');
      el.classList.remove('gallery-item5-2');
      el.classList.remove('gallery-item5-3');
      
    });

    this.carouselArray5.slice(0, 3).forEach((el, i) => {
      el.classList.add(`gallery-item5-${i+1}`);
    });
  }

  // Update the current order of the carouselArray and gallery
  setCurrentState5(direction) {

    if (direction.className == 'gallery-controls5-next') {
      this.carouselArray5.unshift(this.carouselArray5.pop());
    } else {
      this.carouselArray5.push(this.carouselArray5.shift());
    }
    
    this.updateGallery5();
  }
  // Construct the carousel controls
  setControls5() {
    this.carouselControls5.forEach(control => {
      galleryControlsContainer5.appendChild(document.createElement('a')).className = `gallery-controls5-${control}`;
    });

  }

  
  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls5() {
    const triggers = [...galleryControlsContainer5.childNodes];

    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();

        if (control.className == 'gallery-controls5-add') {

        } else {
          this.setCurrentState5(control);
        }

      });
    });
  }
  
}

const exampleCarousel5 = new Carousel5(galleryContainer5, galleryItems5, galleryControls5);

exampleCarousel5.setControls5();
// exampleCarousel.setNav();
exampleCarousel5.useControls5();
