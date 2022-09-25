(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n  border-bottom: 1px solid #E5E5E5;\r\n  padding: 25px;\r\n}\r\n\r\n.container {\r\n  max-width: 1250px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.header .container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.logo img {\r\n  vertical-align: bottom;\r\n}\r\n\r\n.menu {\r\n  margin-left: 244px;\r\n}\r\n\r\n.menu ul {\r\n  list-style: none;\r\n  display: flex;\r\n}\r\n\r\n.menu-item {\r\n  margin-right: 115px;\r\n}\r\n\r\n.menu-item a {\r\n  text-decoration: none;\r\n  font-size: 15px;\r\n  color: #030305;\r\n}\r\n\r\n.menu-item a:hover {\r\n  border-bottom: solid 1px black;\r\n}\r\n\r\n.main {\r\n  background-image: url('/cars-hw/background.png');\r\n  background-position: center;\r\n  background-size: cover;\r\n  padding: 104px 0 154px 0;\r\n}\r\n\r\n.main-info {\r\n  max-width: 855px;\r\n}\r\n\r\n.main-title {\r\n  font-weight: bold;\r\n  font-size: 80px;\r\n  line-height: 110%;\r\n  color: #030305;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.main-text {\r\n  font-size: 16px;\r\n  line-height: 130%;\r\n  color: #030305;\r\n  margin-bottom: 40px;\r\n  max-width: 502px;\r\n}\r\n\r\n.button {\r\n  width: 334px;\r\n  height: 64px;\r\n  background: #030305;\r\n  border: 0;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  letter-spacing: 0.02em;\r\n  text-transform: uppercase;\r\n  color: #FFFFFF;\r\n  transition: background-color .5ms;\r\n}\r\n\r\n.button:hover:not(:disabled) {\r\n  cursor: pointer;\r\n  background: #575757;\r\n}\r\n\r\n.button:disabled {\r\n  cursor: not-allowed;\r\n  color: gray;\r\n  background-color: #343434;\r\n}\r\n\r\n.car {\r\n  padding: 100px 0;\r\n}\r\n\r\n.sub-title {\r\n  font-weight: bold;\r\n  font-size: 60px;\r\n  line-height: 70px;\r\n  color: #030305;\r\n}\r\n\r\n.car-items {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.car-item {\r\n  max-width: 384px;\r\n  text-align: center;\r\n  margin-top: 40px;\r\n}\r\n\r\n.car-item-img:hover img {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n.car-item-img img {\r\n  vertical-align: bottom;\r\n  transition: all .3s;\r\n}\r\n\r\n.car-item-title {\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  line-height: 150%;\r\n  letter-spacing: 0.02em;\r\n  color: #030305;\r\n  padding: 15px 0 17px 0;\r\n}\r\n\r\n.car-item-info {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.car-item-point {\r\n  width: 110px;\r\n  height: 92px;\r\n  margin: 0 7.5px;\r\n}\r\n\r\n.car-item-point img {\r\n  margin-bottom: 11px;\r\n}\r\n\r\n.car-item-action {\r\n  margin-top: 13px;\r\n}\r\n\r\n.car-item-action button {\r\n  width: 100%;\r\n  padding: 15px;\r\n  height: 54px;\r\n}\r\n\r\n.car-item-point > div:nth-child(2) {\r\n  font-weight: bold;\r\n}\r\n\r\n.price {\r\n  overflow: hidden;\r\n}\r\n\r\n.price .container {\r\n  position: relative;\r\n  padding-bottom: 121px;\r\n}\r\n\r\n.price .sub-title {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.price-text {\r\n  font-size: 16px;\r\n  line-height: 160%;\r\n  color: #5D5D5F;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.price-form {\r\n  max-width: 344px;\r\n}\r\n\r\n.price-input {\r\n  padding: 22px 18px;\r\n  width: 344px;\r\n  height: 65px;\r\n  background: #FFFFFF;\r\n  border: 1px solid #5D5D5F;\r\n  box-sizing: border-box;\r\n  font-size: 16px;\r\n  color: #000000;\r\n  outline: none;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.price-input::-webkit-input-placeholder {\r\n  color: #5D5D5F;\r\n}\r\n\r\n.price-input::-moz-placeholder {\r\n  color: #5D5D5F;\r\n}\r\n\r\n.price-input::-ms-input-placeholder {\r\n  color: #5D5D5F;\r\n}\r\n\r\n.price-input::placeholder {\r\n  color: #5D5D5F;\r\n}\r\n\r\n.price .button {\r\n  width: 100%\r\n}\r\n\r\n.price-image {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 401px;\r\n}\r\n\r\n.footer {\r\n  padding: 25px 0;\r\n  border-top: solid 1px #E5E5E5;\r\n}\r\n\r\n.footer .container{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.rights {\r\n  font-size: 16px;\r\n  color: #030305;\r\n}\r\n\r\n.price-input.ng-touched.ng-valid {\r\n  border: 1px solid #5D5D5F;\r\n}\r\n\r\n.price-input.ng-touched.ng-invalid {\r\n  border: 1px solid red;\r\n}\r\n\r\n.car-toggle {\r\n  display: flex;\r\n  width: 194px;\r\n  border: 1px solid gray;\r\n  margin: 20px 0;\r\n}\r\n\r\n.car-toggle div {\r\n  padding: 20px;\r\n  background: white;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  letter-spacing: 0.02em;\r\n  text-transform: uppercase;\r\n  color: black;\r\n  transition: background-color .5s;\r\n  cursor: pointer;\r\n}\r\n\r\n.car-toggle div.active {\r\n  background: #030305;\r\n  color: #FFFFFF;\r\n}\r\n\r\n.car .container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"container\">\n    <div class=\"logo\">\n      <img src=\"assets/images/logo.png\" alt=\"logo\">\n    </div>\n    <nav class=\"menu\">\n      <ul>\n        <li class=\"menu-item\">\n          <a href=\"#\">Главная</a>\n        </li>\n        <li class=\"menu-item\">\n          <a href=\"#cars\">Автомобили</a>\n        </li>\n        <li class=\"menu-item\">\n          <a href=\"#price\">Бронирование авто</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</header>\n<section class=\"main\" [ngStyle]=\"bgPos\">\n  <div class=\"container\">\n    <div class=\"main-info\">\n      <h1 class=\"main-title\">Аренда премиальных автомобилей</h1>\n      <div class=\"main-text\">В нашем клубе имеется солидная коллекция спортивных автомобилей — от достаточно\n        распространенных серийных машин до настоящего гоночного эксклюзива. Воспользуйтесь уникальной\n        возможностью побывать за рулем настоящей легенды и узнать, на что она способна за пределами гоночной\n        трассы!\n      </div>\n      <div class=\"main-action\">\n        <button class=\"button\" id=\"main-action\" (click)=\"goScroll(cars)\">Посмотреть автомобили</button>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"car\" id=\"cars\" #cars>\n  <div class=\"container\">\n    <h2 class=\"sub-title\">Наш автопарк</h2>\n    <div class=\"car-toggle\">\n      <div [ngClass]=\"{active: category === 'sport'}\" (click)=\"toggleCategory('sport')\">Sport</div>\n      <div [ngClass]=\"{active: category === 'luxury'}\" (click)=\"toggleCategory('luxury')\">Luxury</div>\n    </div>\n    <div class=\"car-items\">\n      <div class=\"car-item\" *ngFor=\"let car of carsData\">\n        <div class=\"car-item-img\">\n          <img src=\"{{car.image}}\" alt=\"car1\">\n        </div>\n        <div class=\"car-item-title\">{{car.name}}</div>\n        <div class=\"car-item-info\">\n          <div class=\"car-item-point\">\n            <img src=\"assets/images/gear.png\" alt=\"gear\">\n            <div>Привод</div>\n            <div>{{car.gear}}</div>\n          </div>\n          <div class=\"car-item-point\">\n            <img src=\"assets/images/wheel.png\" alt=\"group\">\n            <div>Двигатель</div>\n            <div>{{car.engine}} л.с</div>\n          </div>\n          <div class=\"car-item-point\">\n            <img src=\"assets/images/belt.png\" alt=\"belt\">\n            <div>Кол-во мест</div>\n            <div>{{car.places}}</div>\n          </div>\n        </div>\n        <div class=\"car-item-action\">\n          <button class=\"button car-button\" (click)=\"goScroll(price, car)\">Забронировать</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"price\" id=\"price\" #price>\n  <div class=\"container\">\n    <h2 class=\"sub-title\">Узнать цену и забронировать</h2>\n    <div class=\"price-text\">Заполните данные, и мы перезвоним вам для уточнения всех деталей бронирования</div>\n    <form action=\"\" class=\"price-form\" [formGroup]=\"priceForm\">\n      <input type=\"text\" class=\"price-input\" placeholder=\"Ваше имя\" id=\"name\" formControlName=\"name\">\n      <input type=\"text\" class=\"price-input\" placeholder=\"Ваш телефон\" id=\"phone\" formControlName=\"phone\">\n      <input type=\"text\" class=\"price-input\" placeholder=\"Автомобиль, который вас интересует\" id=\"car\" formControlName=\"car\">\n      <button class=\"button\" id=\"price-action\" type=\"button\" (click)=\"onSubmit()\" [disabled]=\"!priceForm.valid\" >Узнать цену</button>\n    </form>\n    <img src=\"assets/images/rolls.png\" alt=\"Rolls\" class=\"price-image\" [ngStyle]=\"trans\">\n  </div>\n</section>\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"logo\">\n      <img src=\"assets/images/logo.png\" alt=\"logo\">\n    </div>\n    <div class=\"rights\">Все права защищены</div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(fb, appService) {
        this.fb = fb;
        this.appService = appService;
        this.priceForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            car: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.category = 'sport';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getData(this.category).subscribe(function (carsData) { return _this.carsData = carsData; });
    };
    AppComponent.prototype.goScroll = function (target, car) {
        target.scrollIntoView({ behavior: 'smooth' });
        if (car) {
            this.priceForm.patchValue({ car: car.name });
        }
    };
    AppComponent.prototype.toggleCategory = function (category) {
        this.category = category;
        this.ngOnInit();
    };
    AppComponent.prototype.onMouseMove = function (e) {
        this.trans = { transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)' };
    };
    AppComponent.prototype.onScroll = function () {
        this.bgPos = { backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px' };
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.priceForm.valid) {
            this.appService.sendQuery(this.priceForm.value)
                .subscribe({
                next: function (response) {
                    alert(response.message);
                    _this.priceForm.reset();
                },
                error: function (response) {
                    alert(response.error.message);
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onMouseMove", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.sendQuery = function (data) {
        return this.http.post('https://testologia.site/intensive-price', data);
    };
    AppService.prototype.getData = function (category) {
        return this.http.get('https://testologia.site/intensive-data', { params: { category: category } });
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Андрей\Desktop\Projects\car-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map