/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/base.css":
/*!**************************!*\
  !*** ./src/css/base.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://book-shop/./src/css/base.css?");

/***/ }),

/***/ "./src/APIBOOKS.js":
/*!*************************!*\
  !*** ./src/APIBOOKS.js ***!
  \*************************/
/***/ (() => {

eval("const apiKey = \"AIzaSyAgg_6I4Yr5TNmF8E9l5TnnAGDeP-U_ocA\";\r\n\r\nconst countShowCardsClick = 6; \r\nconst loadBooksBtn = document.querySelector(\".container__section__books__body__button_load-more\");\r\n\r\nconst booksCard = document.querySelector('.container__section__books__body__cards');\r\n\r\nlet shownCards = countShowCardsClick;\r\nlet countClickBtnShowCards = 1;\r\n\r\nconst categories = [\r\n          {\r\n             name: 'Architecture',\r\n             subject: 'Architecture'\r\n          },\r\n          {\r\n             name: 'Art & Fashion',\r\n             subject: 'Art'\r\n          },\r\n          {\r\n             name: 'Biography',\r\n             subject: 'Biography&Autobiography'\r\n          },\r\n          {\r\n             name: 'Business',\r\n             subject: 'Business'\r\n          },\r\n          {\r\n             name: 'Crafts & Hobbies',\r\n             subject: 'Crafts&Hobbies'\r\n          },\r\n          {\r\n             name: 'Drama',\r\n             subject: 'Drama'\r\n          },\r\n          {\r\n             name: 'Fiction',\r\n             subject: 'Fiction'\r\n          },\r\n          {\r\n             name: 'Food & Drink',\r\n             subject: 'Cooking'\r\n          },\r\n          {\r\n             name: 'Health & Wellbeing',\r\n             subject: 'Health&Fitness'\r\n          },\r\n          {\r\n             name: 'History & Politics',\r\n             subject: 'History'\r\n          },\r\n          {\r\n             name: 'Humor',\r\n             subject: 'Humor'\r\n          },\r\n          {\r\n             name: 'Poetry',\r\n             subject: 'Poetry'\r\n          },\r\n          {\r\n             name: 'Psychology',\r\n             subject: 'Psychology'\r\n          },\r\n          {\r\n             name: 'Science',\r\n             subject: 'Science'\r\n          },\r\n          {\r\n             name: 'Technology',\r\n             subject: 'Technology'\r\n          },\r\n          {\r\n             name: 'Travel & Maps',\r\n             subject: 'Travel'\r\n          },\r\n];\r\n\r\n\r\nlet activeCategory = categories[0].subject\r\n\r\nloadBooksBtn.addEventListener('click', loadCards);\r\n\r\nbooksCard.addEventListener('click', handleCardClick);\r\n\r\ncategories.forEach(category => {\r\n    document.querySelector('.section-navigation__category-list').innerHTML += \r\n        `<li class=\"category-list__item\">\r\n            <a class=\"category-list__item-link ${activeCategory === category.subject && 'active-item'}\" data-category=\"${category.subject}\">\r\n                ${category.name}\r\n            </a>\r\n        </li>`        \r\n});\r\n\r\nfunction getBasketLocalStorage() {\r\n    const cartDataJson = localStorage.getItem('basket');\r\n    return cartDataJson ? JSON.parse(cartDataJson) : [];\r\n};\r\n\r\nfunction loadCards () {\r\n    countClickBtnShowCards++;\r\n    shownCards = countShowCardsClick * countClickBtnShowCards;\r\n    getResponse(shownCards)\r\n};\r\n\r\nfunction handleCardClick (event) {\r\n    const targetButton = event.target.closest('.container__section__books__body__button_load-more');\r\n    if (!targetButton) return;\r\n\r\n    const card = targetButton.closest('.container__section__books__body__cards');\r\n    const id = card.dataset.productId;\r\n    const basket = getBasketLocalStorage();\r\n\r\n    basket.push(id);\r\n};\r\n\r\nfunction createCards(data) {\r\n    let cards = '';\r\n\r\n    data.forEach(item => {\r\n        const cardBook = `\r\n        <div class=\"books__card\" data-product-id='${item.id}>\r\n            <div class=\"books__card-image\">\r\n            <img class=\"books__card-img\" src=\"${item.volumeInfo.imageLinks.thumbnail}\">\r\n            </div>\r\n            <div class=\"books__card-content\">\r\n            <p class=\"books__card-autor\">\r\n                ${item.volumeInfo.authors}\r\n            </p>\r\n            <h2 class=\"books__card-name\">\r\n                ${item.volumeInfo.title}\r\n            </h2>\r\n            <div class=\"books__card-reviews\">\r\n                <img src=\"${item.averageRating}\">\r\n                <p class=\"books__card-reviews-text\">\r\n                    ${item.volumeInfo.retingsCount}\r\n                </p>\r\n            </div>\r\n            <p class=\"books__card-description\">\r\n                ${item.volumeInfo.description}\r\n            </p>\r\n            <h2 class=\"books__card-price\">\r\n                $4.99\r\n            </h2>\r\n            <button class=\"books__button-btn\">\r\n                buy now\r\n            </button>\r\n            </div>\r\n        </div>`;\r\n\r\n        cards += cardBook;\r\n    });\r\n\r\n    booksCard.innerHTML = cards;\r\n    \r\n};\r\n\r\ngetResponse(shownCards);\r\n\r\nasync function getResponse (count) {  \r\n    const responseApi = await fetch(`https://www.googleapis.com/books/v1/volumes?q=\"subject:\"${activeCategory}\"&key=${apiKey}&printType=books&startIndex=${count}&maxResults=6&langRestrict=en`)\r\n        .then(response => {\r\n            return response.json();                \r\n        })\r\n        .then((json) => {\r\n            return json[\"items\"];\r\n            \r\n        })\r\n        .catch(() => {console.log('error'); \r\n    });\r\n    createCards(responseApi)\r\n};\r\n\r\nconst backet = document.querySelector('.basket__count');\r\n\r\ndocument.querySelector('.books__button-btn').addEventListener('click', function(){\r\n    backet.style.backgroundColor = \"red\";\r\n    backet.style.zIndex = '100';\r\n\r\n    const p = document.createElement(\"p\");\r\n\r\n    const number = 0;\r\n    number += 1;\r\n    p.innerHTML = \"${number}\";\r\n\r\n});\r\n\n\n//# sourceURL=webpack://book-shop/./src/APIBOOKS.js?");

/***/ }),

/***/ "./src/Navigation.js":
/*!***************************!*\
  !*** ./src/Navigation.js ***!
  \***************************/
/***/ (() => {

eval("const navigation = document.querySelector('.section-navigation__category-list')\r\nconst navigationLink = navigation.querySelectorAll('.category-list__item-link');\r\n\r\nfunction activeItem (index) {\r\n    navigationLink.forEach(item => item.classList.remove('active-item'));\r\n    navigationLink[index].classList.add('active-item'); \r\n}\r\n\r\nnavigationLink.forEach((link, index) => {\r\n    link.addEventListener('click', () => {\r\n      activeItem(index);\r\n    })\r\n})\n\n//# sourceURL=webpack://book-shop/./src/Navigation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/slider.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.js */ \"./src/Navigation.js\");\n/* harmony import */ var _Navigation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navigation_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _APIBOOKS_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./APIBOOKS.js */ \"./src/APIBOOKS.js\");\n/* harmony import */ var _APIBOOKS_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_APIBOOKS_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/base.css */ \"./src/css/base.css\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://book-shop/./src/index.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ (() => {

eval("let offset = 0;\r\nconst slider = document.querySelector('.container__image_scrolling');\r\n\r\nconst ellipse1 = document.querySelector('.ellipse1');\r\nconst ellipse2 = document.querySelector('.ellipse2');\r\nconst ellipse3 = document.querySelector('.ellipse3');\r\nconst ellipse4 = document.querySelector('.ellipse4');\r\nconst ellipse5 = document.querySelector('.ellipse5');\r\nconst ellipse6 = document.querySelector('.ellipse6');\r\n\r\n\r\ndocument.querySelector('.container__switch_prew1').addEventListener('click', function(){\r\n    if (offset == 2240 || offset == 1120){\r\n        offset = 0;\r\n        ellipse1.style.display = 'block';\r\n        ellipse2.style.display = 'none';\r\n        ellipse3.style.display = 'none';\r\n        ellipse4.style.display = 'block';\r\n        ellipse5.style.display = 'none';\r\n        ellipse6.style.display = 'block';\r\n    }\r\n    slider.style.left = 0 + 'px';\r\n});\r\n\r\ndocument.querySelector('.container__switch_prew2').addEventListener('click', function(){\r\n    if (offset == 2240 || offset == 0){\r\n        offset = 1120;\r\n        ellipse1.style.display = 'none';\r\n        ellipse2.style.display = 'block';\r\n        ellipse3.style.display = 'block';\r\n        ellipse4.style.display = 'none';\r\n        ellipse5.style.display = 'none';\r\n        ellipse6.style.display = 'block';\r\n    }\r\n    slider.style.left = -1120 + 'px';\r\n});\r\n\r\ndocument.querySelector('.container__switch_prew3').addEventListener('click', function(){\r\n    if (offset == 1120 || offset == 0){\r\n        offset = 2240;\r\n        ellipse1.style.display = 'none';\r\n        ellipse2.style.display = 'block';\r\n        ellipse3.style.display = 'none';\r\n        ellipse4.style.display = 'block';\r\n        ellipse5.style.display = 'block';\r\n        ellipse6.style.display = 'none';\r\n    }\r\n    slider.style.left = -2240 + 'px';\r\n});\r\n\r\nlet left = 0;\r\nlet timer;\r\nfunction autoSlider (){\r\n    timer = setTimeout(function(){\r\n        const scrolling = document.querySelector('.container__image_scrolling');\r\n        left = left - 1120;\r\n        if (left == 0){\r\n            ellipse1.style.display = 'block';\r\n            ellipse2.style.display = 'none';\r\n            ellipse3.style.display = 'none';\r\n            ellipse4.style.display = 'block';\r\n            ellipse5.style.display = 'none';\r\n            ellipse6.style.display = 'block';\r\n        }else if (left == 1120){\r\n            ellipse1.style.display = 'none';\r\n            ellipse2.style.display = 'block';\r\n            ellipse3.style.display = 'block';\r\n            ellipse4.style.display = 'none';\r\n            ellipse5.style.display = 'none';\r\n            ellipse6.style.display = 'block';\r\n        }else if(left == 2240){\r\n            ellipse1.style.display = 'none';\r\n            ellipse2.style.display = 'block';\r\n            ellipse3.style.display = 'none';\r\n            ellipse4.style.display = 'block';\r\n            ellipse5.style.display = 'block';\r\n            ellipse6.style.display = 'none';\r\n        }\r\n\r\n        if (left < -2240){\r\n            left = 0;\r\n            clearTimeout(timer);\r\n        }\r\n        scrolling.style.left = left + 'px';\r\n        autoSlider();\r\n    }, 5000);\r\n}\r\nautoSlider();\n\n//# sourceURL=webpack://book-shop/./src/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;