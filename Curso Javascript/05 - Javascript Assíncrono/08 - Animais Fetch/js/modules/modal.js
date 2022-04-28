export default function initModal() {
  const modalContainer = document.querySelector('[data-modal="container"]');

  const menuLogin = document.querySelector('[data-modal="abrir"]');

  const modalFechar = document.querySelector('[data-modal="fechar"]');

  if (modalContainer && menuLogin && modalFechar) {
    function toggleModal(event) {
      event.preventDefault();
      modalContainer.classList.toggle("ativo");
    }

    function cliqueForaModal(event) {
      if (event.target === this) toggleModal(event);
    }

    menuLogin.addEventListener("click", toggleModal);
    modalFechar.addEventListener("click", toggleModal);
    modalContainer.addEventListener("click", cliqueForaModal);
  }
}
