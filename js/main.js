// Fixed Contacts
const contactsFixedArrow = document.querySelector(".contacts-fixed__img");
const contactsFixedRow = document.querySelector(".contacts-fixed__row");
contactsFixedArrow.addEventListener("click", () => {
  contactsFixedRow.classList.toggle("contacts-fixed__row--hidden");
  contactsFixedArrow.classList.toggle("contacts-fixed__img--active");
});

// Mobile
const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const headerRow = document.querySelector(".header__row");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  headerRow.classList.toggle("header__row--mobile");
  document.body.classList.toggle("no-scroll");
};

document.addEventListener("click", (event) => {
  if (event.target.closest(".header__row--mobile") && event.target.closest(".nav__list-link")) {
    headerRow.classList.remove("header__row--mobile");
    navIcon.classList.remove("nav-icon--active");
    document.body.classList.remove("no-scroll");
  }
});

// Badges
const badges = document.querySelectorAll(".badge");

badges.forEach((item) => {
  item.addEventListener("click", (event) => {
    const badgeRemove = item.querySelector(".badge__remove");
    if (event.target == item) {
      item.classList.toggle("badge--active");
      badgeRemove.classList.toggle("none");
    }
  });
});

// Range
const titleMin = document.getElementById("title-min");
const titleMax = document.getElementById("title-max");

const inputLeft = document.getElementById("input-left");
const inputRight = document.getElementById("input-right");

const dotLeft = document.getElementById("dot-left");
const dotRight = document.getElementById("dot-right");

const sliderRange = document.getElementById("slider-range");

function setLeftValue() {
  let value = this.value;
  let min = parseInt(this.min);
  let max = parseInt(this.max);

  value = Math.min(parseInt(value), parseInt(inputRight.value) - 1);

  let stringValue = value.toString().slice(0, -1) + "," + value.toString().slice(-1);
  let numValue = Number(value.toString().slice(0, -1) + "." + value.toString().slice(-1));

  let percent = ((numValue * 10 - min) / (max - min)) * 100;

  sliderRange.style.left = percent + "%";
  dotLeft.style.left = percent + "%";
  titleMin.innerText = stringValue;
}
function setRightValue() {
  let value = this.value;
  let min = parseInt(this.min);
  let max = parseInt(this.max);

  value = Math.max(parseInt(value), parseInt(inputLeft.value) + 1);

  let stringValue = value.toString().slice(0, -1) + "," + value.toString().slice(-1);
  let numValue = Number(value.toString().slice(0, -1) + "." + value.toString().slice(-1));

  let percent = ((numValue * 10 - min) / (max - min)) * 100;

  sliderRange.style.right = 100 - percent + "%";
  dotRight.style.right = 100 - percent + "%";
  titleMax.innerText = stringValue;
}
inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

// Filter
const filterIcons = document.querySelectorAll(".form__item--filter__img");
const formFilterWrappers = document.querySelectorAll(".form__item--filter__menu");
const filterMenuClose = document.querySelectorAll(".form__item--filter__menu-close");

filterIcons.forEach((item) => {
  item.addEventListener("click", () => {
    item.nextElementSibling.classList.remove("none");
  });
});
formFilterWrappers.forEach((item) => {
  item.addEventListener("click", (event) => {
    // event.preventDefault();

    filterMenuClose.forEach((close) => {
      if (event.target === item || event.target === close) {
        item.classList.add("none");
      }
    });
  });
});

// Slider
let currentSliderCount = 4;
// Create Sliders HTML
function createSlidersHTML() {
  const cardsSliderWrapper = document.querySelectorAll(".cards__info-slider");

  cardsSliderWrapper.forEach((item, index) => {
    let number = index + 1;

    let sliderHTML = `
      <div class="swiper mySwiper${number}">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img class="swiper-img" src="./img/cards/card-img01.jpg" alt="" /></div>
          <div class="swiper-slide"><img class="swiper-img" src="./img/cards/card-img01.jpg" alt="" /></div>
          <div class="swiper-slide"><img class="swiper-img" src="./img/cards/card-img01.jpg" alt="" /></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="swiper-btn swiper-btn--prev mySwiper${number}prev"><img src="./img/cards/slider-arrow.svg" alt="" /></div>
      <div class="swiper-btn swiper-btn--next mySwiper${number}next"><img src="./img/cards/slider-arrow.svg" alt="" /></div>
    `;

    item.insertAdjacentHTML("afterbegin", sliderHTML);
  });

  initializeSliders();
}
// Create Sliders Classes
function createSlider(swiperClass, prevEl, nextEl) {
  return new Swiper(swiperClass, {
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
    navigation: {
      prevEl: prevEl,
      nextEl: nextEl,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
// Initialize all sliders
function initializeSliders() {
  const sliders = document.querySelectorAll(".swiper");

  sliders.forEach((slider, index) => {
    let number = index + 1;

    createSlider(`.mySwiper${number}`, `.mySwiper${number}prev`, `.mySwiper${number}next`);
  });
}
// Show first 4 cards
createSlidersHTML();
// Show 2 new cards
function showMoreCards() {
  const cardsWrapper = document.querySelector(".cards__row");

  for (let i = 0; i < 2; i++) {
    if (currentSliderCount >= 8) return;
    currentSliderCount++;

    const cardHTML = `
      <div class="card">
        <div class="card__row">
          <div class="cards__info">
            <div class="cards__info-slider">
              <!-- Swiper -->
                <div class="swiper mySwiper${currentSliderCount}">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide"><img class="swiper-img" src="./img/cards/card-img01.jpg" alt="" /></div>
                    <div class="swiper-slide"><img class="swiper-img" src="./img/cards/card-img01.jpg" alt="" /></div>
                    <div class="swiper-slide"><img class="swiper-img" src="./img/cards/card-img01.jpg" alt="" /></div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
                <div class="swiper-btn swiper-btn--prev mySwiper${currentSliderCount}prev"><img src="./img/cards/slider-arrow.svg" alt="" /></div>
                <div class="swiper-btn swiper-btn--next mySwiper${currentSliderCount}next"><img src="./img/cards/slider-arrow.svg" alt="" /></div>
              <!-- Swiper -->
            </div>

            <div class="cards__info-badges">
              <div class="cards__info-badges__row">
                <!-- info-badge -->
                <div class="cards__info-badges__badge">
                  <img src="./img/cards/products.svg" alt="" />
                  <span class="cards__info-badges__badge-title">Продукты 6</span>
                </div>
                <!-- info-badge -->
                <div class="cards__info-badges__badge">
                  <img src="./img/cards/education.svg" alt="" />
                  <span class="cards__info-badges__badge-title">Образование 6</span>
                </div>
                <!-- info-badge -->
                <div class="cards__info-badges__badge">
                  <img src="./img/cards/medicine.svg" alt="" />
                  <span class="cards__info-badges__badge-title">Медицина 6</span>
                </div>
                <!-- info-badge -->
                <div class="cards__info-badges__badge">
                  <img src="./img/cards/sport.svg" alt="" />
                  <span class="cards__info-badges__badge-title">Спорт 6</span>
                </div>
                <!-- info-badge -->
                <div class="cards__info-badges__badge">
                  <img src="./img/cards/entertainment.svg" alt="" />
                  <span class="cards__info-badges__badge-title">Развлечения 6</span>
                </div>
                <!-- info-badge -->
                <div class="cards__info-badges__badge">
                  <img src="./img/cards/parks.svg" alt="" />
                  <span class="cards__info-badges__badge-title">Парки 6</span>
                </div>
              </div>
            </div>
          </div>
          <div class="cards__prices">
            <div class="card__prices-heading">
              <div class="card__prices-heading__row">
                <div class="card__prices-heading__left">
                  <h3 class="card__prices-heading__left-title title-3">ЖК Республика</h3>
                  <a href="#!" class="card__prices-heading__left-link">100 квартир от застройщика «Комос»</a>
                </div>
                <div class="card__prices-heading__right">
                  <h3 class="card__prices-heading__right-title title-3">от&nbsp;6&nbsp;355&nbsp;000&nbsp;р</h3>
                  <a href="#!" class="card__prices-heading__right-link">В ипотеку от 13 760 р / мес</a>
                  <div class="card__prices-heading__right-quarter">3 квартал 2025 — <br />3 квартал 2026</div>
                </div>
              </div>
            </div>
            <div class="card__prices-rooms">
              <div class="card__prices-rooms__row">
                <!-- rooms__item -->
                <div class="card__prices-rooms__item">
                  <span class="card__prices-rooms__item-accent">Студии</span>
                  <span class="card__prices-rooms__item-price">от 6,4 млн р</span>
                </div>
                <!-- rooms__item -->
                <div class="card__prices-rooms__item">
                  <span class="card__prices-rooms__item-accent">3-комнатные</span>
                  <span class="card__prices-rooms__item-price">от 6,4 млн р</span>
                </div>
                <!-- rooms__item -->
                <div class="card__prices-rooms__item">
                  <span class="card__prices-rooms__item-accent">1-комнатные</span>
                  <span class="card__prices-rooms__item-price">от 6,4 млн р</span>
                </div>
                <!-- rooms__item -->
                <div class="card__prices-rooms__item">
                  <span class="card__prices-rooms__item-accent">4-комнатные +</span>
                  <span class="card__prices-rooms__item-price">от 6,4 млн р</span>
                </div>
                <!-- rooms__item -->
                <div class="card__prices-rooms__item">
                  <span class="card__prices-rooms__item-accent">2-комнатные</span>
                  <span class="card__prices-rooms__item-price">от 6,4 млн р</span>
                </div>
              </div>
            </div>
            <div class="card__prices-footer">
              <div class="card__prices-footer__row">
                <a href="#map" class="card__prices-footer__link">Ижевск, Карла Маркса 259</a>
                <button class="card__prices-footer__btn btn">Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    cardsWrapper.insertAdjacentHTML("beforeend", cardHTML);

    createSlider(
      `.mySwiper${currentSliderCount}`,
      `.mySwiper${currentSliderCount}prev`,
      `.mySwiper${currentSliderCount}next`
    );
  }
}
const showMoreBtn = document.querySelector(".cards__btn-show-more");
showMoreBtn.addEventListener("click", showMoreCards);

// Map
ymaps.ready(init);
function init() {
  var map = new ymaps.Map("map", {
    center: [56.853188, 53.201967],
    zoom: 17,
  });

  var myPlacemark = new ymaps.Placemark(
    [56.853188, 53.201967],
    {
      balloonContent: `
  			<div class="balloon">
  				<div class="balloon__address">Ижевск, Карла Маркса 259</div>
  				<div class="balloon__contacts">
  					<a href="tel:+78121234567">+8 (800) 000-00-00</a>
  				</div>
  			</div>
  		`,
    },
    {
      iconLayout: "default#image",
      iconImageHref: "./img/map/location-pin.svg",
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40],
    }
  );

  map.controls.remove("geolocationControl");
  map.controls.remove("searchControl");
  map.controls.remove("trafficControl");
  map.controls.remove("rulerControl");

  map.geoObjects.add(myPlacemark);
  myPlacemark.balloon.open();
}

// Phone Validation
mask("[data-tel-input]");

const phoneInput = document.querySelector("[data-tel-input]");
phoneInput.addEventListener("input", () => {
  if (phoneInput.value == "+") phoneInput.value = "";
});
phoneInput.addEventListener("blur", () => {
  if (phoneInput.value == "+") phoneInput.value = "";
});

// Reviews
const reviewsSwiper = new Swiper(".mySwiperReviews", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
  navigation: {
    prevEl: ".mySwiperReviewsPrev",
    nextEl: ".mySwiperReviewsNext",
  },
});

// CardsMediaSwiper
const cardsMediaSwiper = new Swiper(".mySwiperCards", {
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    425: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});

const cardsMediaSwiperWrapper = document.querySelector(".mySwiperCards");
const cardsMediaSwiperRow = cardsMediaSwiperWrapper.querySelector(".swiper-wrapper");

const cardsMediaShowMoreBtn = document.querySelector(".cards-media__btn-show-more");

cardsMediaShowMoreBtn.addEventListener("click", () => {
  const cardMediaHTML = `
    <div class="cards-swiper__card swiper-slide">
      <img src="./img/cards/card-img01.jpg" alt="" />
      <div class="cards-swiper__card-body">
        <h3 class="card-swiper__title title-3">ЖК Чаркова 72</h3>
        <div class="card-swiper__quarter">3 квартал 2024 — <br />3 квартал 2025</div>
        <h3 class="card-swiper__price title-3">от&nbsp;4&nbsp;377&nbsp;600&nbsp;р</h3>
      </div>
    </div>
  `;

  cardsMediaSwiperRow.insertAdjacentHTML("beforeend", cardMediaHTML);

  cardsMediaSwiper.update();
});
