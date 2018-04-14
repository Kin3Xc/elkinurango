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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getProfile__ = __webpack_require__(1);


let token = '';
const API_URL = 'person.json'; // url api

let get = new __WEBPACK_IMPORTED_MODULE_0__getProfile__["a" /* default */](API_URL, token);

get.getProfile();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render__ = __webpack_require__(3);



class GetProfile {

    constructor(url_base, token) {
        this.url = url_base;
        this.token = token;
    }

    // get profile
    getProfile() {
        __WEBPACK_IMPORTED_MODULE_0__http__["a" /* default */].get(this.url, this.token).then(res => {
            let render = new __WEBPACK_IMPORTED_MODULE_1__render__["a" /* default */]();
            render.render(res);
        }).catch(err => console.log(err));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GetProfile;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// get api
class Http {

    static get(url, token) {

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
/* harmony export (immutable) */ __webpack_exports__["a"] = Http;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Render {

    constructor(container) {
        this.bindsEvents();
    }

    // Initialization of events in the app
    bindsEvents() {}

    // show list in web site
    render(data) {
        let jobs = document.querySelector('.jobs');
        let bio = document.querySelector('.summary-bio');

        bio.innerHTML = data.person.summaryOfBio;

        data.jobs.forEach(job => {
            jobs.innerHTML += `
                <div class="job">
                    <h2>${job.role}</h2>
                    <p>${job.organizations[0].name}</p>
                    <p>From ${job.fromMonth} ${job.fromYear} to ${job.toMonth || 'Present '} ${job.toYear}</p>
                    <a href="${job.media[0].mediaItems[0].address}">${job.media[0].mediaItems[0].address}</a>
                </div>
            `;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Render;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDQ3NWY3N2ViMTZlMWQwMGUyMmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9nZXRQcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9odHRwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIuanMiXSwibmFtZXMiOlsidG9rZW4iLCJBUElfVVJMIiwiZ2V0IiwiZ2V0UHJvZmlsZSIsIkdldFByb2ZpbGUiLCJjb25zdHJ1Y3RvciIsInVybF9iYXNlIiwidXJsIiwiSHR0cCIsInRoZW4iLCJyZXMiLCJyZW5kZXIiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiUmVuZGVyIiwiY29udGFpbmVyIiwiYmluZHNFdmVudHMiLCJkYXRhIiwiam9icyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJpbyIsImlubmVySFRNTCIsInBlcnNvbiIsInN1bW1hcnlPZkJpbyIsImZvckVhY2giLCJqb2IiLCJyb2xlIiwib3JnYW5pemF0aW9ucyIsIm5hbWUiLCJmcm9tTW9udGgiLCJmcm9tWWVhciIsInRvTW9udGgiLCJ0b1llYXIiLCJtZWRpYSIsIm1lZGlhSXRlbXMiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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dXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNDc1Zjc3ZWIxNmUxZDAwZTIyZSIsImltcG9ydCBHZXRQcm9maWxlIGZyb20gJy4vZ2V0UHJvZmlsZSc7XG5cbmxldCB0b2tlbiA9ICcnO1xuY29uc3QgQVBJX1VSTCA9ICdwZXJzb24uanNvbic7IC8vIHVybCBhcGlcblxubGV0IGdldCA9IG5ldyBHZXRQcm9maWxlKEFQSV9VUkwsIHRva2VuKTtcblxuZ2V0LmdldFByb2ZpbGUoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgSHR0cCBmcm9tICcuL2h0dHAnO1xuaW1wb3J0IFJlbmRlciBmcm9tICcuL3JlbmRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldFByb2ZpbGUge1xuXG4gICAgY29uc3RydWN0b3IodXJsX2Jhc2UsIHRva2VuKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsX2Jhc2U7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICB9XG5cbiAgICAvLyBnZXQgcHJvZmlsZVxuICAgIGdldFByb2ZpbGUoKSB7XG4gICAgICAgIEh0dHAuZ2V0KHRoaXMudXJsLHRoaXMudG9rZW4pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZW5kZXIgPSBuZXcgUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyLnJlbmRlcihyZXMpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dldFByb2ZpbGUuanMiLCIvLyBnZXQgYXBpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcblxuICAgIHN0YXRpYyBnZXQodXJsLCB0b2tlbikge1xuXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHJldHVybiByZXNvbHZlKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHhoci5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2h0dHAuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXIge1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuYmluZHNFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXphdGlvbiBvZiBldmVudHMgaW4gdGhlIGFwcFxuICAgIGJpbmRzRXZlbnRzKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBzaG93IGxpc3QgaW4gd2ViIHNpdGVcbiAgICByZW5kZXIoZGF0YSkge1xuICAgICAgICBsZXQgam9icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qb2JzJyk7XG4gICAgICAgIGxldCBiaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VtbWFyeS1iaW8nKTtcblxuICAgICAgICBiaW8uaW5uZXJIVE1MID0gZGF0YS5wZXJzb24uc3VtbWFyeU9mQmlvO1xuXG4gICAgICAgIGRhdGEuam9icy5mb3JFYWNoKGpvYiA9PiB7XG4gICAgICAgICAgICBqb2JzLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImpvYlwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+JHsgam9iLnJvbGUgfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPiR7IGpvYi5vcmdhbml6YXRpb25zWzBdLm5hbWUgfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RnJvbSAkeyBqb2IuZnJvbU1vbnRoIH0gJHsgam9iLmZyb21ZZWFyIH0gdG8gJHsgam9iLnRvTW9udGggfHwgJ1ByZXNlbnQgJyB9ICR7IGpvYi50b1llYXIgfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7IGpvYi5tZWRpYVswXS5tZWRpYUl0ZW1zWzBdLmFkZHJlc3MgfVwiPiR7IGpvYi5tZWRpYVswXS5tZWRpYUl0ZW1zWzBdLmFkZHJlc3MgfTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXIuanMiXSwic291cmNlUm9vdCI6IiJ9