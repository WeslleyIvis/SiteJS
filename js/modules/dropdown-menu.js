import outsideClick from './outsideclick.js';

export default class initDropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    //define touchstart e click como argumento padrão 
    // de events caso o usuario n defina;
    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events;
    
    this.events = ['touchstart', 'click'];
    this.activeClass = 'active';
    this.activeDropwdownMenu = this.activeDropwdownMenu.bind(this);
  }
  
  // Ativa o dropdownmenu e adiciona
  // a função que observa o clique fora dele
  activeDropwdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  // Adiciona os eventos ao dropdownmenu
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
