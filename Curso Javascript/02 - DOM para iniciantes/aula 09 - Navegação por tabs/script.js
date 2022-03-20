const tabmenu = document.querySelectorAll(".js-tabmenu li");
const tabcontent = document.querySelectorAll(".js-tabcontent article");
tabcontent[0].classList.add("ativo");

if (tabmenu.length && tabcontent.length) {
  function activeTab(index) {
    tabcontent.forEach((obj) => {
      obj.classList.remove("ativo");
    });

    tabcontent[index].classList.add("ativo");
  }

  tabmenu.forEach((img, index) => {
    img.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
