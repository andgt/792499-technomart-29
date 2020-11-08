'use strict';


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