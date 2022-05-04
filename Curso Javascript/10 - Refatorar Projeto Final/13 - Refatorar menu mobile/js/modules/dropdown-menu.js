import outsideClick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(menus, events) {
    this.dropdownMenus = document.querySelectorAll(menus);

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);

    // Define touchstart e click como argumento padrão
    // caso o usuário não defina
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeClass = "active";
  }

  // Ativa o dropdown menu e adiciona
  // a função que observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, ["touchstart", "click"], () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona eventos ao dropdown menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.menus) {
      this.addDropdownMenusEvent();
    }
  }
}
