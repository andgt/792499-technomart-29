'use strict';

/* Слайдер */

const sliderToggleLeft = document.querySelector(".slider-toggle-left");
const sliderToggleRight = document.querySelector(".slider-toggle-right");
const sliderPerf = document.querySelector(".slider-perf");
const sliderDrills = document.querySelector(".slider-drills");
const checkboxToggleRight = document.querySelector(".checkbox-toggle-right");
const checkboxToggleLeft = document.querySelector(".checkbox-toggle-left");


if (sliderPerf.style = "display: block") {
	checkboxToggleLeft.checked=true;
} else {
	checkboxToggleRight.checked=true;
};

sliderToggleRight.addEventListener("click", function (evt) {
	evt.preventDefault();
	sliderPerf.style = "display: none";
	sliderDrills.style = "display: block";
	checkboxToggleRight.checked=true;
});

sliderToggleLeft.addEventListener("click", function (evt) {
	evt.preventDefault();
	sliderDrills.style = "display: none";
	sliderPerf.style = "display: block";
	checkboxToggleLeft.checked=true;
});

checkboxToggleRight.addEventListener("click", function () {
	sliderPerf.style = "display: none";
	sliderDrills.style = "display: block";
});

checkboxToggleLeft.addEventListener("click", function () {
	sliderDrills.style = "display: none";
	sliderPerf.style = "display: block";	
});

/* Слайдер сервисы*/

const serviceListBtn = document.querySelectorAll(".service-list-btn");
const delivery = document.querySelector(".service-block-delivery");
const guarantee = document.querySelector(".service-block-guarantee");
const credit = document.querySelector(".service-block-credit");

	serviceListBtn[0].addEventListener("click", function (evt) {
	evt.preventDefault();
	delivery.style = "display: block";
	guarantee.style = "display: none";
	credit.style = "display: none";
});

serviceListBtn[1].addEventListener("click", function (evt) {
	evt.preventDefault();
	delivery.style = "display: none";
	guarantee.style = "display: block";
	credit.style = "display: none";
});

serviceListBtn[2].addEventListener("click", function (evt) {
	evt.preventDefault();
	delivery.style = "display: none";
	guarantee.style = "display: none";
	credit.style = "display: block";
});

/* Форма обратной связи */

const contactsBtn = document.querySelector(".contacts-btn");
const writeUsWrapper = document.querySelector(".write-us-wrapper");
const writeUsClose = writeUsWrapper.querySelector(".btn-close");
const usermail = writeUsWrapper.querySelector(".usermail");
const username = writeUsWrapper.querySelector(".username");
const writeUsForm = writeUsWrapper.querySelector(".write-us-form");

let isStorageSupport = true;
let storage = "";

try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}

contactsBtn.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUsWrapper.classList.add("modal-show");
	username.focus();
});

if (storage) {
	username.value = storage;
	usermail.focus();
} else {
	username.focus();
}

writeUsClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	writeUsWrapper.classList.remove("modal-show");
	writeUsWrapper.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function (evt) {
	if (!username.value || !usermail.value) {
		evt.preventDefault();
		writeUsWrapper.classList.remove("modal-error");
		writeUsWrapper.offsetWidth = writeUsWrapper.offsetWidth;
		writeUsWrapper.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", writeUsField.value);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (writeUsWrapper.classList.contains("modal-show")) {
			evt.preventDefault();
			writeUsWrapper.classList.remove("modal-show");
			writeUsWrapper.classList.remove("modal-error");
		}
	}
});


/* Карта */

const contactsMap = document.querySelector(".contacts-map");
const mapPopup = document.querySelector(".map-popup");
const mapPopupClose = mapPopup.querySelector(".btn-close");

contactsMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapPopupClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
	mapPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			mapPopup.classList.remove("modal-show");
			mapPopup.classList.remove("modal-error");
		}
	}
});

/* Корзина */

const btnBuy = document.querySelectorAll(".btn-buy");
const btnBookmarks = document.querySelectorAll(".btn-bookmarks");
const productBasket = document.querySelector(".product-basket");
const btnCloseBasket = productBasket.querySelector(".btn-close-basket");
const bookmarks = document.querySelector(".bookmarks");
const basket = document.querySelector(".basket");
let bookmarksCount = 0;
let basketCount = 0;

basket.textContent = "Корзина: " + basketCount; 

for (var i = 0; i < btnBuy.length; i++) {
	btnBuy[i].addEventListener("click", function (evt) {
	evt.preventDefault();
	productBasket.classList.add("modal-show");
	basket.classList.add("basket-add");
	basketCount++;
	basket.textContent = "Корзина: " + basketCount;
	});
};

bookmarks.textContent = "Закладки: " + bookmarksCount; 

for (var i = 0; i < btnBookmarks.length; i++) {
	btnBookmarks[i].addEventListener("click", function (evt) {
	evt.preventDefault();
	bookmarks.classList.add("bookmarks-add");
	bookmarksCount++;
	bookmarks.textContent = "Закладки: " + bookmarksCount;
	});
};

btnCloseBasket.addEventListener("click", function (evt) {
	evt.preventDefault();
	productBasket.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (productBasket.classList.contains("modal-show")) {
			evt.preventDefault();
			productBasket.classList.remove("modal-show");
		}
	}
});