(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./cli/src/$$_lazy_route_resource lazy recursive":
/*!**************************************************************!*\
  !*** ./cli/src/$$_lazy_route_resource lazy namespace object ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./cli/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./cli/src/app/app-routing.module.ts":
/*!*******************************************!*\
  !*** ./cli/src/app/app-routing.module.ts ***!
  \*******************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _imagegallery_component_imagegallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagegallery/component/imagegallery.component */ "./cli/src/app/imagegallery/component/imagegallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "imagegallery",
        component: _imagegallery_component_imagegallery_component__WEBPACK_IMPORTED_MODULE_2__["ImageGalleryComponent"],
    },
    {
        path: "",
        redirectTo: "imagegallery",
        pathMatch: "full"
    }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./cli/src/app/app.component.ts":
/*!**************************************!*\
  !*** ./cli/src/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<div>\n              <image-gallery></image-gallery>\n            </div>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./cli/src/app/app.module.ts":
/*!***********************************!*\
  !*** ./cli/src/app/app.module.ts ***!
  \***********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./cli/src/app/app-routing.module.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./cli/src/app/app.component.ts");
/* harmony import */ var _imagegallery_component_imagegallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imagegallery/component/imagegallery.component */ "./cli/src/app/imagegallery/component/imagegallery.component.ts");
/* harmony import */ var _imagegallery_service_imagegallery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imagegallery/service/imagegallery.service */ "./cli/src/app/imagegallery/service/imagegallery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Router Module

// ngx image gallery library

// application components.


// image service

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _imagegallery_component_imagegallery_component__WEBPACK_IMPORTED_MODULE_6__["ImageGalleryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRouterModule"]
            ],
            providers: [_imagegallery_service_imagegallery_service__WEBPACK_IMPORTED_MODULE_7__["ImageGalleryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./cli/src/app/imagegallery/component/imagegallery.component.ts":
/*!**********************************************************************!*\
  !*** ./cli/src/app/imagegallery/component/imagegallery.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImageGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryComponent", function() { return ImageGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_imagegallery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/imagegallery.service */ "./cli/src/app/imagegallery/service/imagegallery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageGalleryComponent = /** @class */ (function () {
    function ImageGalleryComponent(imageGalleryService) {
        this.imageGalleryService = imageGalleryService;
        this.galleryImages = [];
        // Fetch data from api 
        this.getProfiles = function (tags) {
            var _this = this;
            if (tags === void 0) { tags = ""; }
            this.errMsg = '';
            document.getElementById("loading").classList.remove("display-none");
            this.imageGalleryService.getFeeds(tags).subscribe(function (data) {
                _this.galleryImages = [];
                data.map(function (img) {
                    _this.galleryImages.push({
                        medium: img.media.m,
                        big: img.media.m,
                        small: img.media.m
                    });
                });
                document.getElementById("loading").classList.add("display-none");
            }, function (err) {
                console.log(err);
                if (err && err.error.errorMsg != "") {
                    _this.errMsg = err.error.errorMsg;
                }
                else {
                    _this.errMsg = "Unknown error occurred";
                }
                document.getElementById("loading").classList.add("display-none");
            });
        };
    }
    ImageGalleryComponent.prototype.ngOnInit = function () {
        // initial image gallery configuration.
        this.galleryOptions = [
            {
                image: false,
                height: '80vh',
                width: '77vw',
                thumbnailsRemainingCount: true,
                thumbnailsRows: 4
            },
            {
                breakpoint: 100,
                width: '100%',
                thumbnailsColumns: 4
            }
        ];
        this.getProfiles();
    };
    ImageGalleryComponent.prototype.ngOnDestroy = function () {
        // release resource consumed.
        this.errMsg = "";
        this.galleryImages = [];
        this.galleryOptions = [];
        this.getProfiles = null;
    };
    ImageGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "image-gallery",
            template: __webpack_require__(/*! ../views/imagegallery.component.html */ "./cli/src/app/imagegallery/views/imagegallery.component.html")
        }),
        __metadata("design:paramtypes", [_service_imagegallery_service__WEBPACK_IMPORTED_MODULE_1__["ImageGalleryService"]])
    ], ImageGalleryComponent);
    return ImageGalleryComponent;
}());



/***/ }),

/***/ "./cli/src/app/imagegallery/service/imagegallery.service.ts":
/*!******************************************************************!*\
  !*** ./cli/src/app/imagegallery/service/imagegallery.service.ts ***!
  \******************************************************************/
/*! exports provided: ImageGalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryService", function() { return ImageGalleryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./cli/src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageGalleryService = /** @class */ (function () {
    function ImageGalleryService(http) {
        this.http = http;
    }
    /**
     *  To fetch public feed using tags as user input
     *  @param tags
     *  @returns array of object of filcker feeds.
     */
    ImageGalleryService.prototype.getFeeds = function (tags) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"]["baseUrl"] + "/getFeeds";
        var params = {
            tags: tags,
        };
        return this.http.get(url, { params: params });
    };
    ImageGalleryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImageGalleryService);
    return ImageGalleryService;
}());



/***/ }),

/***/ "./cli/src/app/imagegallery/views/imagegallery.component.html":
/*!********************************************************************!*\
  !*** ./cli/src/app/imagegallery/views/imagegallery.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12\">\n            <h1 class=\"text-center header\">Flicker Public Feeds.</h1>\n        </div>\n        <div class=\"col-sm-12 col-md-12\">\n            <div class=\"input-group mb-3\">\n                <input type=\"text\" class=\"form-control\" ref-search (keyup.enter)=\"getProfiles(search.value)\" placeholder=\"Search photos, people, or groups\" aria-label=\"Search photos, people, or groups\" id=\"inp-search\">\n                <div class=\"input-group-append\">\n                    <button class=\"btn btn-outline-secondary\" on-click=\"getProfiles(search.value)\" type=\"button\" id=\"btn-search\"><i class=\"fa fa-search\"></i></button>\n                </div>\n            </div>   \n        </div>\n        <div class=\"col-sm-12 col-md-12\">\n            <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>  \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./cli/src/environments/environment.ts":
/*!*********************************************!*\
  !*** ./cli/src/environments/environment.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./cli/src/main.ts":
/*!*************************!*\
  !*** ./cli/src/main.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./cli/src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./cli/src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./cli/src/main.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Desktop/ramesh/temp/image-gallery/cli/src/main.ts */"./cli/src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map