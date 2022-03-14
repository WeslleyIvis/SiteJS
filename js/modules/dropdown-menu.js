import outsideClick from './outsideclick.js';

export default class initDropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events;
    
    this.events = ['touchstart', 'click'];
    this.activeClass = 'active';
    this.activeDropwdownMenu = this.activeDropwdownMenu.bind(this);
  }
  
  activeDropwdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropwdownMenu);
      });
    });  
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
  
}
