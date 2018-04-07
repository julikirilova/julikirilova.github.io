webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_not_found_not_found_component__ = __webpack_require__("./src/app/layout/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__layout_not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* PreloadAllModules */] }),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */],
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Juli website';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages_module__ = __webpack_require__("./src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_header_header_component__ = __webpack_require__("./src/app/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_not_found_not_found_component__ = __webpack_require__("./src/app/layout/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__layout_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__layout_not_found_not_found_component__["a" /* NotFoundComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".main-header {\n    background-color: #99cccc;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    font-size: 2rem;\n    font-weight: 500;\n    height: 70px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    -webkit-transition: height 300ms ease-in, background 300ms ease-in;\n    transition: height 300ms ease-in, background 300ms ease-in;\n    z-index: 99999;\n}\n\n.main-header__ul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.main-header__a {\n    border-bottom: 2px solid transparent;\n    display: block;\n    color: #ffffff;\n    padding: 0.1em;\n    margin: 0 1.2em;\n    text-transform: uppercase;\n    -webkit-transition: color 300ms ease-in;\n    transition: color 300ms ease-in;\n}\n\n.main-header__a:not(.main-header__a--active):hover {\n    color: #808080;\n    border-bottom-color: #ffffff;\n}\n\n.main-header__a--active {\n    border-bottom: 2px solid #ffffff;\n    -webkit-transition: border-color 300ms ease-in, color 300ms ease-in;\n    transition: border-color 300ms ease-in, color 300ms ease-in;\n}\n\n.logo {\n    display: block;\n    height: 53px;\n    width: 130px;\n}\n\n.logo .cls-3 {\n    stroke: #ffffff;\n    -webkit-transition: all 300ms ease-in;\n    transition: all 300ms ease-in;\n}\n\n.logo .cls-2 {\n    fill: #ffffff;\n    -webkit-transition: all 300ms ease-in;\n    transition: all 300ms ease-in;\n}\n\n.main-header--transitioned {\n    background-color: #ffffff;\n    color: #000000;\n    height: 70px;\n    padding-bottom: 0;\n}\n\n.main-header--transitioned .main-header__a {\n    color: #000000;\n}\n\n.main-header--transitioned .main-header__a--active {\n    border-bottom: 2px solid #000000;\n}\n\n.main-header--transitioned .cls-3 {\n    stroke: #000000;\n}\n\n.main-header--transitioned .cls-2 {\n    fill: #000000;\n}\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n\n  <a (click)=\"smoothScroll($event, '#home')\" class=\"logo\" href=\"/#home\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 131 97.48\">\n          <g id=\"Layer_2\" data-name=\"Layer 2\">\n              <g id=\"Layer_1-2\" data-name=\"Layer 1\">\n                  <rect class=\"cls-3\" x=\"3\" y=\"3\" width=\"125\" height=\"91.48\" rx=\"9.3\" ry=\"9.3\" fill=\"none\" stroke-miterlimit=\"10\" stroke-width=\"6\"\n                  />\n                  <rect class=\"cls-2\" x=\"99.54\" y=\"14.25\" width=\"6.83\" height=\"6.83\" rx=\"3.39\" ry=\"3.39\" />\n                  <rect class=\"cls-2\" x=\"16.27\" y=\"20.4\" width=\"6.83\" height=\"6.83\" rx=\"3.39\" ry=\"3.39\" />\n                  <path class=\"cls-2\" d=\"M110.46 58.62V23.81H96.81V32h5.46v26.62h-11.6v-47.1H77v8.2h5.46v38.9H70.87V23.81H57.22V32h5.46v26.62h-7.51a4.09 4.09 0 0 1-4.09-4.09V23.81h-15.7a12.29 12.29 0 0 0-12.21 10.92h-.08V73A4.09 4.09 0 0 1 19 77.05h-6.14v8.19H19A12.28 12.28 0 0 0 31.28 73V36.1a4.1 4.1 0 0 1 4.1-4.1h7.51v22.53a12.28 12.28 0 0 0 12.28 12.28h62.12v-8.19z\"\n                  />\n              </g>\n          </g>\n      </svg>\n  </a>\n\n  <nav class=\"main-header__nav\">\n\n      <ul class=\"main-header__ul\">\n\n          <li class=\"main-header__li\" *ngFor=\"let menu of menus\">\n              <a (click)=\"smoothScroll($event, menu.href)\" [class.main-header__a--active]=\"menu.isActive\" class=\"main-header__a\" href=\"{{menu.href}}\">{{menu.name}}</a>\n          </li>\n\n      </ul>\n\n  </nav>\n\n</header>\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_smoothscroll_polyfill__ = __webpack_require__("./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_smoothscroll_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_smoothscroll_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(el) {
        this.el = el;
        this.menus = [
            {
                name: 'Home',
                href: '#home',
                isActive: true,
            },
            {
                name: 'About',
                href: '#about',
                isActive: false,
            },
            {
                name: 'Work',
                href: '#work',
                isActive: false,
            },
            {
                name: 'Skills',
                href: '#skills',
                isActive: false,
            },
            {
                name: 'Contact',
                href: '#contact',
                isActive: false,
            },
        ];
    }
    HeaderComponent.prototype.smoothScroll = function (e, param) {
        e.preventDefault();
        history.replaceState(undefined, undefined, param);
        document.querySelector(param).scrollIntoView({ behavior: 'smooth' });
        this.menus.forEach(function (e) {
            if (e.href === param) {
                console.log(e.href, param);
                e.isActive = true;
            }
            else {
                e.isActive = false;
            }
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_smoothscroll_polyfill__["polyfill"]();
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var ele = this.el.nativeElement.querySelector('.main-header');
        var headerTransition = function () {
            if (window.pageYOffset > window.innerHeight - 1) {
                ele.classList.add('main-header--transitioned');
            }
            else {
                ele.classList.remove('main-header--transitioned');
            }
        };
        var throttledHeaderTransition = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["throttle"])(headerTransition, 250, { 'leading': true });
        window.addEventListener('scroll', throttledHeaderTransition);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__("./src/app/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ".not-found {\n    font-size: 1.6rem;\n}"

/***/ }),

/***/ "./src/app/layout/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"not-found\">\n\n  <h1>The requested page was not found</h1>\n\n</section>\n"

/***/ }),

/***/ "./src/app/layout/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/layout/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/layout/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".profile-image {\n    float: left;\n    margin-right: 20px;\n    width: 50%;\n}\n\n.profile-description {\n    font-size: 2rem;\n    line-height: 1.5em;\n}"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"about section\">\n\n  <div class=\"container\">\n      <h2 class=\"section-title\">About me</h2>\n\n      <div>\n\n          <img class=\"profile-image\" src=\"/assets/profile.jpg\" alt=\"profile image\">\n          <p class=\"profile-description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ante leo. Suspendisse aliquet velit lacus, ac congue turpis faucibus eget. Aenean lacinia interdum purus. Aenean ac malesuada nunc. Mauris odio nisi, suscipit suscipit finibus vel, rhoncus a nibh. Sed posuere neque id interdum pretium. Cras porta nisi at accumsan fermentum. Nullam vitae bibendum elit. Etiam bibendum leo eget mattis sollicitudin. Cras dapibus eleifend lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>\n\n      </div>\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__("./src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"contact\">\n\n  <div class=\"container\">\n      <h2 class=\"section-title\">contact</h2>\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home {\n    background-color: #99cccc;\n    font-size: 1.6rem;\n    font-family: Raleway, regular;\n    height: 100vh;\n    padding-top: 70px;\n}\n\n.home-title {\n    color: #ffffff;\n    font-size: 5em;\n    padding: 9rem 0 0.5rem;\n    text-align: center;\n    width: 100%;\n}\n\n.home-title__first-name {\n    font-weight: normal;\n}\n\n.home-title__last-name {\n    font-family: $main-font-bold;\n    font-weight: bold;\n}\n\n.home-subtitle {\n    color: #ffffff;\n    font-size: 2.6em;\n    font-weight: normal;\n    letter-spacing: 2rem;\n    text-align: center;\n    text-indent: 2rem;\n    text-transform: uppercase;\n    width: 100%;\n}\n\n.dots-wrapper {\n    margin: 10rem auto;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    height: 30vh;\n}\n\n.dots-wrapper svg {\n    -webkit-animation: hopping 2.5s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);\n            animation: hopping 2.5s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n\n@-webkit-keyframes hopping {\n    0% {\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n    }\n    50% {\n        -webkit-transform: translateY(40px);\n                transform: translateY(40px);\n    }\n    100% {\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n    }\n}\n\n@keyframes hopping {\n    0% {\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n    }\n    50% {\n        -webkit-transform: translateY(40px);\n                transform: translateY(40px);\n    }\n    100% {\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n    }\n}"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"home\" class=\"home\">\n\n  <div class=\"container\">\n  \n      <h1 class=\"home-title\">\n\n          <span class=\"home-title__first-name\">juli</span><span class=\"home-title__last-name\">kirilova</span>\n  \n      </h1>\n\n      <h2 class=\"home-subtitle\">designer</h2>\n\n      <div class=\"dots-wrapper\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 434 369\"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Asset 5</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><circle class=\"cls-1\" cx=\"217\" cy=\"22\" r=\"22\"/><circle class=\"cls-1\" cx=\"152\" cy=\"87\" r=\"22\"/><circle class=\"cls-1\" cx=\"217\" cy=\"87\" r=\"22\"/><circle class=\"cls-1\" cx=\"282\" cy=\"87\" r=\"22\"/><circle class=\"cls-1\" cx=\"87\" cy=\"152\" r=\"22\"/><circle class=\"cls-1\" cx=\"152\" cy=\"152\" r=\"22\"/><circle class=\"cls-1\" cx=\"217\" cy=\"152\" r=\"22\"/><circle class=\"cls-1\" cx=\"282\" cy=\"152\" r=\"22\"/><circle class=\"cls-1\" cx=\"347\" cy=\"152\" r=\"22\"/><circle class=\"cls-1\" cx=\"87\" cy=\"217\" r=\"22\"/><circle class=\"cls-1\" cx=\"152\" cy=\"217\" r=\"22\"/><circle class=\"cls-1\" cx=\"217\" cy=\"217\" r=\"22\"/><circle class=\"cls-1\" cx=\"282\" cy=\"217\" r=\"22\"/><circle class=\"cls-1\" cx=\"347\" cy=\"217\" r=\"22\"/><circle class=\"cls-1\" cx=\"22\" cy=\"282\" r=\"22\"/><circle class=\"cls-1\" cx=\"22\" cy=\"217\" r=\"22\"/><circle class=\"cls-1\" cx=\"87\" cy=\"282\" r=\"22\"/><circle class=\"cls-1\" cx=\"152\" cy=\"282\" r=\"22\"/><circle class=\"cls-1\" cx=\"217\" cy=\"282\" r=\"22\"/><circle class=\"cls-1\" cx=\"282\" cy=\"282\" r=\"22\"/><circle class=\"cls-1\" cx=\"347\" cy=\"282\" r=\"22\"/><circle class=\"cls-1\" cx=\"412\" cy=\"282\" r=\"22\"/><circle class=\"cls-1\" cx=\"412\" cy=\"216\" r=\"22\"/><circle class=\"cls-1\" cx=\"22\" cy=\"347\" r=\"22\"/><circle class=\"cls-1\" cx=\"87\" cy=\"347\" r=\"22\"/><circle class=\"cls-1\" cx=\"152\" cy=\"347\" r=\"22\"/><circle class=\"cls-1\" cx=\"217\" cy=\"347\" r=\"22\"/><circle class=\"cls-1\" cx=\"282\" cy=\"347\" r=\"22\"/><circle class=\"cls-1\" cx=\"347\" cy=\"347\" r=\"22\"/><circle class=\"cls-1\" cx=\"412\" cy=\"347\" r=\"22\"/></g></g></svg>\n      </div>\n  \n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__("./src/app/pages/pages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var homeRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */] },
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(homeRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pages.component.html":
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n<app-about></app-about>\n<app-work></app-work>\n<app-skills></app-skills>\n<app-contact></app-contact>"

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pages',
            template: __webpack_require__("./src/app/pages/pages.component.html"),
            styles: [__webpack_require__("./src/app/pages/pages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_routing_module__ = __webpack_require__("./src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("./src/app/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_work_component__ = __webpack_require__("./src/app/pages/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__ = __webpack_require__("./src/app/pages/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("./src/app/pages/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_component__ = __webpack_require__("./src/app/pages/pages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__pages_routing_module__["a" /* PagesRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_5__work_work_component__["a" /* WorkComponent */], __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__["a" /* SkillsComponent */], __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_8__pages_component__["a" /* PagesComponent */]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "    \n  <section id=\"skills\" class=\"skills\">\n\n      <div class=\"container\">\n          <h2 class=\"section-title\">skills</h2>\n\n      </div>\n\n  </section>\n"

/***/ }),

/***/ "./src/app/pages/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("./src/app/pages/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/pages/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/pages/work/work.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"work\" class=\"work\">\n\n  <div class=\"container\">\n      <h2 class=\"section-title\">work</h2>\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-work',
            template: __webpack_require__("./src/app/pages/work/work.component.html"),
            styles: [__webpack_require__("./src/app/pages/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map