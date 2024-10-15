// SCROLL CATEGORY LIST
const scrollableEl = document.querySelector(".category-list");
const scrollableEls = document.querySelectorAll(".category-list a");
let isDragging = false;
const dragging = (e) => {
  if (!isDragging) return;
  scrollableEl.scrollLeft -= e.movementX;
};
scrollableEls.forEach((elem) => {
  elem.addEventListener("mousedown", (e) => {
    e.preventDefault();
  });
});
scrollableEl.addEventListener("mousedown", () => (isDragging = true));
scrollableEl.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", () => (isDragging = false));
//ACTIVE CLASS CATEGORY LIST
scrollableEls.forEach((el) => {
  el.addEventListener("click", function () {
    scrollableEls.forEach((element) => {
      element.parentNode.classList.remove("category-list__item--active");
    });
    el.parentNode.classList.add("category-list__item--active");
  });
});

const readmoreEl = document.querySelector(".about__read-more");
readmoreEl.addEventListener("click", function () {
  document
    .querySelector(".about__text")
    .classList.toggle("about__paragraph--open");
});
//BURGER MENU TOGGLE
const burgerMenuBtns = document.querySelectorAll(".burger-menu");
burgerMenuBtns.forEach((burgerMenuBtn) => {
  burgerMenuBtn.addEventListener("click", function (e) {
    burgerMenuBtns.forEach((e) => e.classList.toggle("burger-menu--active"));
    document.querySelector(".menu").classList.toggle("menu--open");
  });
});
//BUREBUH

//class toggle read-more
document
  .querySelector(".companys__read-more")
  .addEventListener("click", function () {
    document
      .querySelector(".companys__container")
      .classList.toggle("companys--container-open");
  });
document.querySelector('.tech-type__read-more').addEventListener('click', function () {
  document.querySelector('.tech-type__container').classList.toggle('tech-type--container-open');
})
// function checkWidthForSlider(params) {
//   let mql =  window.matchMedia("(max-width: 600px)");
//   if (mql) {}

// }
// Read-more button toggle

const crmEls = document.querySelectorAll('[class*="read-more"]');

crmEls.forEach((crmEl) => {
    crmEl.addEventListener("click", function () {
        crmEl.classList.toggle("read-more--open");
        
        // Пытаемся найти элемент span внутри crmEl
        const spanEl = crmEl.querySelector("span");
        
        // Проверяем, найден ли элемент span
        if (spanEl) {
            let textEl = spanEl.textContent;
            if (textEl == "Читать далее") {
                spanEl.textContent = "Скрыть";
            } else {
                spanEl.textContent = "Читать далее";
            }
        }
    });
});
// Company render items
const companyItemsData = JSON.parse(companyItemsJSON);
const companysRenderItems = function () {
  let containerD = document.querySelector(".companys__container");
  let containerM = document.querySelector(".companys__container-mobile");
  containerM.classList.add("mySwiper");
  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");
  containerM.appendChild(swiperWrapper);
  const swiperContainerEl = document.querySelector(".swiper-wrapper");
  companyItemsData.goods.forEach((el) => {
    swiperContainerEl.insertAdjacentHTML(
      "afterbegin",
      generateCompanyItem(el)
    );
  });
  const swiperPagination = document.createElement("div");
  swiperPagination.classList.add("swiper-pagination");
  containerM.appendChild(swiperPagination);

  const companyContainerEl = containerD;
  companyItemsData.goods.forEach((el) => {
    companyContainerEl.insertAdjacentHTML(
      "beforeend",
      generateCompanyItem(el)
    );
  });
};
// techType render items
// eslint-disable-next-line no-undef
const techTypeItemsData = JSON.parse(techTypeItemsJSON);
const techTypeRenderItems = function () {
  let containerD = document.querySelector(".tech-type__container");
  const swiperWrapper = document.querySelector('.tech-type__container-mobile .swiper-wrapper');
  techTypeItemsData.goods.forEach((el) => {
    swiperWrapper.insertAdjacentHTML(
      "afterbegin",
      generateTechTypeItem(el)
    );
  });
  techTypeItemsData.goods.forEach((el) => {
    containerD.insertAdjacentHTML(
      "beforeend",
      generateTechTypeItem(el)
    );
  });
};
const priceListItemsData = JSON.parse(priceListItemsJSON);
const priceListRenderItems = function () {
  let containerD = document.querySelector(".price-list__table tbody");

  const swiperWrapper = document.querySelector('.price-list__table-mobile .swiper-wrapper');
  priceListItemsData.goods.forEach((el) => {
    swiperWrapper.insertAdjacentHTML(
      "afterbegin",
      generatePriceListItemMobile(el)
    );
  });
  priceListItemsData.goods.forEach((el) => {
    containerD.insertAdjacentHTML(
      "beforeend",
      generatePriceListItemDesctop(el)
    );
  });
};
const generateCompanyItem = function (el) {
  return `<div class="companys__item swiper-slide">
            <a href="${el.href}"
              ><img
                title="${el.title}"
                class="companys__item-img"
                src="${el.src}"
                alt="brend"
            /></a>

            <a href="#!" class="companys__item-link"
              ><svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.5 6L0.707106 2.20711C0.316582 1.81658 0.316582 1.18342 0.707107 0.792893L0.792893 0.707107C1.18342 0.316583 1.81658 0.316583 2.20711 0.707107L6.79289 5.29289C7.18342 5.68342 7.18342 6.31658 6.79289 6.70711L2.20711 11.2929C1.81658 11.6834 1.18342 11.6834 0.792893 11.2929L0.707107 11.2071C0.316583 10.8166 0.316583 10.1834 0.707107 9.79289L4.5 6Z"
                  fill="#FF3E79"
                />
              </svg>
            </a>
          </div>`;
};
const generateTechTypeItem = function (el) {
  return `<div class="tech-type__item swiper-slide">
            <h5>${el.title}</h5>
            <a href="${el.href}" class="tech-type__item-link"><svg width="8" height="12" viewBox="0 0 8 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M4.5 6L0.707106 2.20711C0.316582 1.81658 0.316582 1.18342 0.707107 0.792893L0.792893 0.707107C1.18342 0.316583 1.81658 0.316583 2.20711 0.707107L6.79289 5.29289C7.18342 5.68342 7.18342 6.31658 6.79289 6.70711L2.20711 11.2929C1.81658 11.6834 1.18342 11.6834 0.792893 11.2929L0.707107 11.2071C0.316583 10.8166 0.316583 10.1834 0.707107 9.79289L4.5 6Z"
                  fill="#FF3E79" />
              </svg>
            </a>
          </div>`;
};
const generatePriceListItemDesctop = function (el) {
  return `<tr>
          <td>${el.title}</td>
          <td>${el.price}</td>
          <td>${el.time}</td>
          <td><button class="price-list__order-btn" href="${el.href}">Заказать <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.8 4.99994L0.791554 2.229C0.3641 1.83529 0.361125 1.16138 0.785088 0.763917L0.920293 0.637162C1.30321 0.278177 1.89851 0.276333 2.28364 0.632939L6.93812 4.94264C6.9715 4.97355 6.9715 5.02633 6.93812 5.05723L2.34674 9.30851C1.92606 9.69803 1.27582 9.69601 0.857554 9.30389C0.394457 8.86974 0.397706 8.13363 0.864616 7.70358L3.8 4.99994Z" fill="white"/>
</svg>
</button></td>
        </tr>`;
};
const generatePriceListItemMobile = function (el) {
  return `<div class="price-list__item swiper-slide">
              <span>Ремонтные услуги</span><br>
              <p class="price-list__item-paragraph">${el.title}</p>
              <span>Цена</span><br>
              <p class="price-list__item-paragraph">${el.price}</p>
              <span>Срок</span><br>
              <p class="price-list__item-paragraph">${el.time}</p>
              <button class="price-list__order-btn" href="${el.href}">Заказать <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8 4.99994L0.791554 2.229C0.3641 1.83529 0.361125 1.16138 0.785088 0.763917L0.920293 0.637162C1.30321 0.278177 1.89851 0.276333 2.28364 0.632939L6.93812 4.94264C6.9715 4.97355 6.9715 5.02633 6.93812 5.05723L2.34674 9.30851C1.92606 9.69803 1.27582 9.69601 0.857554 9.30389C0.394457 8.86974 0.397706 8.13363 0.864616 7.70358L3.8 4.99994Z" fill="white"/>
    </svg>
    </button>
            </div>`;
};

companysRenderItems();
techTypeRenderItems();
priceListRenderItems();
let isBelow768 = false;
function checkWidth() {
    if (window.innerWidth < 768) {
        if (!isBelow768) {
          document.querySelector('.companys__container').classList.add('none');
          document.querySelector('.companys__container-mobile').classList.remove('none');
          document.querySelector('.tech-type__container').classList.add('none');
          document.querySelector('.tech-type__container-mobile').classList.remove('none');
          document.querySelector('.price-list__table').classList.add('none');
          document.querySelector('.price-list__table-mobile').classList.remove('none');
            isBelow768 = true;
        }
    } else {
      document.querySelector('.companys__container-mobile').classList.add('none');
      document.querySelector('.companys__container').classList.remove('none');
      document.querySelector('.tech-type__container-mobile').classList.add('none');
      document.querySelector('.tech-type__container').classList.remove('none');
      document.querySelector('.price-list__table-mobile').classList.add('none');
      document.querySelector('.price-list__table').classList.remove('none');
        isBelow768 = false;
    }
}
checkWidth();
window.addEventListener('resize', checkWidth);
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 16,
  centeredSlides: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});