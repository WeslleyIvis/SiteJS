export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }
    toggleAccordion() {
      this.classList.toggle(this.activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    addAccordionEvent() {
     this.accordionList.forEach((item) => {
        item.addEventListener('click', () => this.toggleAccordion(item));
      });
    }

    init() {
      if (this.accordionList.length) {
        this.addAccordionEvent();
      }
    }

    if (accordionList.length) {
      accordionList[0].classList.add(activeClass);
      accordionList[0].nextElementSibling.classList.add(activeClass);
   
   
    }
  }
  
