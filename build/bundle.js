/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autocomplete__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__render__ = __webpack_require__(3);




const API_URL = 'http://api.giphy.com/v1/gifs';

let autocomplete = new __WEBPACK_IMPORTED_MODULE_1__autocomplete__["a" /* default */]('#txtsearch', API_URL);
autocomplete.search();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Search {
    // get api to GIPHY
    static get(url) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.send();

        return new Promise((resolve, reject) => {
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) return resolve(JSON.parse(xhr.responseText));
                    return reject(xhr.status);
                }
            };
        });
    }
}
/* unused harmony export default */


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Autocomplete {
    constructor(input_selector, url_base) {
        this.search = this.search.bind(this);
        this.input = document.querySelector(input_selector);
        this.url = url_base;
        this.api_key = 'dzT61WT7icV6BPib3BI4p79KkvG7Wyu3';
        this.value = 'random';
        this.interval = null;

        this.buildDataList();
        this.bindsEvents();
    }

    // search data 
    search() {
        Search.get(`${this.url}/search?q=${this.value}&api_key=${this.api_key}&limit=50`).then(res => {
            this.buildOptions(res);
            let render = new Render('#images');
            render.showPreview(res);
        }).catch(err => {
            console.log(err);
        });
    }

    // event to write client input text
    bindsEvents() {
        this.input.addEventListener('keyup', () => {
            if (this.input.value == this.value || this.input.value.length < 3) return;
            if (this.interval) window.clearInterval(this.interval);
            this.value = this.input.value;
            this.interval = window.setTimeout(this.search, 500);
        });
    }

    // build list of data 
    buildDataList() {
        this.dataList = document.createElement('datalist');
        this.dataList.id = 'datalist-autocomplete';
        document.querySelector('body').appendChild(this.dataList);
        this.input.setAttribute('list', 'datalist-autocomplete');
    }

    // build options value in datalist
    buildOptions(res) {
        console.log(res);
        this.dataList.innerHTML = '';

        res.data.forEach(element => {
            let optionElement = document.createElement('option');
            optionElement.value = element.title;
            optionElement.innerHTML = element.bitly_gif_url;

            this.dataList.appendChild(optionElement);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Autocomplete;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Render {
    constructor(image_selector) {
        document.querySelector(image_selector).innerHTML = '';
        this.bindsEvents();
    }

    bindsEvents() {
        let btnClose = document.querySelector('.close');
        btnClose.addEventListener('click', () => {
            let modal = document.querySelector('.modal');
            modal.classList.remove("visible");
            modal.querySelector(".panel .content").innerHTML = '';
        });
    }

    // show gif animate in modal
    loadModal(item) {
        let modal = document.querySelector('.modal');
        let panel = modal.querySelector(".panel");

        let content = modal.querySelector(".content");
        let img = document.createElement('img');
        content.appendChild(img);
        img.setAttribute('src', item.images.original.url);

        panel.style.maxWidth = '100%';
        panel.style.maxHeight = '100vh';

        setTimeout(() => {
            modal.classList.add("visible");
        }, 50);
    }

    // show preview images in web site
    showPreview(result) {
        let images = document.querySelector('#images');

        result.data.forEach(item => {
            let img = document.createElement('img');
            images.appendChild(img);
            img.setAttribute('src', item.images.fixed_width_small_still.url);
            img.setAttribute('alt', item.title);
            img.setAttribute('title', item.title);
            img.addEventListener('click', () => {
                this.loadModal(item);
            });
        });
    }

}
/* unused harmony export default */


/***/ })
/******/ ]);