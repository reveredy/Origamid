export default function initTabNav() {
  const tabmenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabcontent = document.querySelectorAll("[data-tab='content'] article");

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add("ativo");

    function activeTab(index) {
      tabcontent.forEach((obj) => {
        obj.classList.remove("ativo");
      });

      const direcao = tabcontent[index];
      console.log(direcao);
      tabcontent[index].classList.add("ativo", direcao);
    }

    tabmenu.forEach((img, index) => {
      img.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}