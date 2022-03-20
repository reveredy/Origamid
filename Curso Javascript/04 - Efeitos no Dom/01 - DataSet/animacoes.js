function initTabNav() {
  const tabmenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabcontent = document.querySelectorAll("[data-tab='content'] article");

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add("ativo");

    function activeTab(index) {
      tabcontent.forEach((obj) => {
        obj.classList.remove("ativo");
      });

      const direcao = tabcontent[index].dataset.anime;
      tabcontent[index].classList.add("ativo", direcao);
    }

    tabmenu.forEach((img, index) => {
      img.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");

  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Forma alternativa
      // const topo = section.offsetTop;
      // window.scrollTo({
      //   top: topo,
      //   behavior: "smooth"
      // });
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}

initScrollSuave();

function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetade = window.innerHeight * 0.6;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initScrollAnimation();
