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
                    <a href="">${job.media[0].mediaItems[0].address}</a>
                </div>
            `;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Render;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjM0MTUyNWU0N2VjMGJhYmU4MmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9nZXRQcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9odHRwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIuanMiXSwibmFtZXMiOlsidG9rZW4iLCJBUElfVVJMIiwiZ2V0IiwiZ2V0UHJvZmlsZSIsIkdldFByb2ZpbGUiLCJjb25zdHJ1Y3RvciIsInVybF9iYXNlIiwidXJsIiwiSHR0cCIsInRoZW4iLCJyZXMiLCJyZW5kZXIiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiUmVuZGVyIiwiY29udGFpbmVyIiwiYmluZHNFdmVudHMiLCJkYXRhIiwiam9icyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJpbyIsImlubmVySFRNTCIsInBlcnNvbiIsInN1bW1hcnlPZkJpbyIsImZvckVhY2giLCJqb2IiLCJyb2xlIiwib3JnYW5pemF0aW9ucyIsIm5hbWUiLCJmcm9tTW9udGgiLCJmcm9tWWVhciIsInRvTW9udGgiLCJ0b1llYXIiLCJtZWRpYSIsIm1lZGlhSXRlbXMiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7O0FBRUEsSUFBSUEsUUFBUSxFQUFaO0FBQ0EsTUFBTUMsVUFBVSxhQUFoQixDLENBQStCOztBQUUvQixJQUFJQyxNQUFNLElBQUksNERBQUosQ0FBZUQsT0FBZixFQUF3QkQsS0FBeEIsQ0FBVjs7QUFFQUUsSUFBSUMsVUFBSixHOzs7Ozs7Ozs7QUNQQTtBQUNBOztBQUVlLE1BQU1DLFVBQU4sQ0FBaUI7O0FBRTVCQyxnQkFBWUMsUUFBWixFQUFzQk4sS0FBdEIsRUFBNkI7QUFDekIsYUFBS08sR0FBTCxHQUFXRCxRQUFYO0FBQ0EsYUFBS04sS0FBTCxHQUFhQSxLQUFiO0FBQ0g7O0FBRUQ7QUFDQUcsaUJBQWE7QUFDVEssUUFBQSxzREFBQUEsQ0FBS04sR0FBTCxDQUFTLEtBQUtLLEdBQWQsRUFBa0IsS0FBS1AsS0FBdkIsRUFDS1MsSUFETCxDQUNVQyxPQUFPO0FBQ1QsZ0JBQUlDLFNBQVMsSUFBSSx3REFBSixFQUFiO0FBQ0FBLG1CQUFPQSxNQUFQLENBQWNELEdBQWQ7QUFDSCxTQUpMLEVBSU9FLEtBSlAsQ0FJYUMsT0FBT0MsUUFBUUMsR0FBUixDQUFZRixHQUFaLENBSnBCO0FBS0g7QUFkMkIsQzs7Ozs7Ozs7O0FDSGhDO0FBQ2UsTUFBTUwsSUFBTixDQUFXOztBQUV0QixXQUFPTixHQUFQLENBQVdLLEdBQVgsRUFBZ0JQLEtBQWhCLEVBQXVCOztBQUVuQixZQUFJZ0IsTUFBTSxJQUFJQyxjQUFKLEVBQVY7O0FBRUFELFlBQUlFLElBQUosQ0FBUyxLQUFULEVBQWdCWCxHQUFoQjtBQUNBUyxZQUFJRyxJQUFKOztBQUVBLGVBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUNwQ04sZ0JBQUlPLGtCQUFKLEdBQXlCLE1BQU07QUFDM0Isb0JBQUlQLElBQUlRLFVBQUosSUFBa0IsQ0FBdEIsRUFBeUI7QUFDckIsd0JBQUlSLElBQUlTLE1BQUosSUFBYyxHQUFsQixFQUF1QixPQUFPSixRQUFRSyxLQUFLQyxLQUFMLENBQVdYLElBQUlZLFlBQWYsQ0FBUixDQUFQO0FBQ3ZCLDJCQUFPTixPQUFPTixJQUFJUyxNQUFYLENBQVA7QUFDSDtBQUNKLGFBTEQ7QUFNSCxTQVBNLENBQVA7QUFRSDs7QUFqQnFCLEM7Ozs7Ozs7OztBQ0RYLE1BQU1JLE1BQU4sQ0FBYTs7QUFFeEJ4QixnQkFBWXlCLFNBQVosRUFBdUI7QUFDbkIsYUFBS0MsV0FBTDtBQUNIOztBQUVEO0FBQ0FBLGtCQUFjLENBRWI7O0FBRUQ7QUFDQXBCLFdBQU9xQixJQUFQLEVBQWE7QUFDVCxZQUFJQyxPQUFPQyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVg7QUFDQSxZQUFJQyxNQUFNRixTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQVY7O0FBRUFDLFlBQUlDLFNBQUosR0FBZ0JMLEtBQUtNLE1BQUwsQ0FBWUMsWUFBNUI7O0FBRUFQLGFBQUtDLElBQUwsQ0FBVU8sT0FBVixDQUFrQkMsT0FBTztBQUNyQlIsaUJBQUtJLFNBQUwsSUFBbUI7OzBCQUVKSSxJQUFJQyxJQUFNO3lCQUNYRCxJQUFJRSxhQUFKLENBQWtCLENBQWxCLEVBQXFCQyxJQUFNOzhCQUN0QkgsSUFBSUksU0FBVyxJQUFJSixJQUFJSyxRQUFVLE9BQU9MLElBQUlNLE9BQUosSUFBZSxVQUFZLElBQUlOLElBQUlPLE1BQVE7aUNBQ2hGUCxJQUFJUSxLQUFKLENBQVUsQ0FBVixFQUFhQyxVQUFiLENBQXdCLENBQXhCLEVBQTJCQyxPQUFTOzthQUwxRDtBQVFILFNBVEQ7QUFVSDtBQTVCdUIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjM0MTUyNWU0N2VjMGJhYmU4MmYiLCJpbXBvcnQgR2V0UHJvZmlsZSBmcm9tICcuL2dldFByb2ZpbGUnO1xuXG5sZXQgdG9rZW4gPSAnJztcbmNvbnN0IEFQSV9VUkwgPSAncGVyc29uLmpzb24nOyAvLyB1cmwgYXBpXG5cbmxldCBnZXQgPSBuZXcgR2V0UHJvZmlsZShBUElfVVJMLCB0b2tlbik7XG5cbmdldC5nZXRQcm9maWxlKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IEh0dHAgZnJvbSAnLi9odHRwJztcbmltcG9ydCBSZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZXRQcm9maWxlIHtcblxuICAgIGNvbnN0cnVjdG9yKHVybF9iYXNlLCB0b2tlbikge1xuICAgICAgICB0aGlzLnVybCA9IHVybF9iYXNlO1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfVxuXG4gICAgLy8gZ2V0IHByb2ZpbGVcbiAgICBnZXRQcm9maWxlKCkge1xuICAgICAgICBIdHRwLmdldCh0aGlzLnVybCx0aGlzLnRva2VuKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVuZGVyID0gbmV3IFJlbmRlcigpO1xuICAgICAgICAgICAgICAgIHJlbmRlci5yZW5kZXIocmVzKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZXRQcm9maWxlLmpzIiwiLy8gZ2V0IGFwaVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cCB7XG5cbiAgICBzdGF0aWMgZ2V0KHVybCwgdG9rZW4pIHtcblxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSByZXR1cm4gcmVzb2x2ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh4aHIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9odHRwLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmJpbmRzRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6YXRpb24gb2YgZXZlbnRzIGluIHRoZSBhcHBcbiAgICBiaW5kc0V2ZW50cygpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gc2hvdyBsaXN0IGluIHdlYiBzaXRlXG4gICAgcmVuZGVyKGRhdGEpIHtcbiAgICAgICAgbGV0IGpvYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuam9icycpO1xuICAgICAgICBsZXQgYmlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bW1hcnktYmlvJyk7XG5cbiAgICAgICAgYmlvLmlubmVySFRNTCA9IGRhdGEucGVyc29uLnN1bW1hcnlPZkJpbztcblxuICAgICAgICBkYXRhLmpvYnMuZm9yRWFjaChqb2IgPT4ge1xuICAgICAgICAgICAgam9icy5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqb2JcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPiR7IGpvYi5yb2xlIH08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD4keyBqb2Iub3JnYW5pemF0aW9uc1swXS5uYW1lIH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkZyb20gJHsgam9iLmZyb21Nb250aCB9ICR7IGpvYi5mcm9tWWVhciB9IHRvICR7IGpvYi50b01vbnRoIHx8ICdQcmVzZW50ICcgfSAkeyBqb2IudG9ZZWFyIH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj4keyBqb2IubWVkaWFbMF0ubWVkaWFJdGVtc1swXS5hZGRyZXNzIH08L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==