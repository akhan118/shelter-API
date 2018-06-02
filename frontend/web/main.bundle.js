webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"@appBackend/auth/auth.module": [
		"../../../../../src/app/backend/auth/auth.module.ts",
		"auth.module"
	],
	"@appBackend/backend.module": [
		"../../../../../src/app/backend/backend.module.ts"
	],
	"@appBackend/dashboard/dashboard.module": [
		"../../../../../src/app/backend/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"@appFrontend/frontend.module": [
		"../../../../../src/app/frontend/frontend.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/404/url-error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/404/url-error.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>PAGE NOT FOUND</h3>"

/***/ }),

/***/ "../../../../../src/app/404/url-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UrlErrorComponent = /** @class */ (function () {
    function UrlErrorComponent() {
    }
    UrlErrorComponent.prototype.ngOnInit = function () {
    };
    UrlErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-url-error',
            template: __webpack_require__("../../../../../src/app/404/url-error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/404/url-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UrlErrorComponent);
    return UrlErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_404_url_error_component__ = __webpack_require__("../../../../../src/app/404/url-error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: 'frontend', loadChildren: '@appFrontend/frontend.module#FrontendModule' },
    { path: 'backend', loadChildren: '@appBackend/backend.module#BackendModule' },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_2_app_404_url_error_component__["a" /* UrlErrorComponent */] },
    { path: '', redirectTo: 'frontend', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  width: 100%;\r\n  height: 100vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appCore_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appBackend_backend_module__ = __webpack_require__("../../../../../src/app/backend/backend.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appFrontend_frontend_module__ = __webpack_require__("../../../../../src/app/frontend/frontend.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_404_url_error_component__ = __webpack_require__("../../../../../src/app/404/url-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8_app_404_url_error_component__["a" /* UrlErrorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__appCore_core_module__["a" /* CoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_app_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__appBackend_backend_module__["BackendModule"],
                __WEBPACK_IMPORTED_MODULE_6__appFrontend_frontend_module__["FrontendModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_7_app_app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/backend/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appCore_services_login_service__ = __webpack_require__("../../../../../src/app/core/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(loginService) {
        this.loginService = loginService;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.loginService.isLoggedIn();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__appCore_services_login_service__["a" /* LoginService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/backend/backend-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backend_component__ = __webpack_require__("../../../../../src/app/backend/backend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appBackend_auth_auth_guard__ = __webpack_require__("../../../../../src/app/backend/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var backendRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__backend_component__["a" /* BackendComponent */], children: [
            { path: '', loadChildren: '@appBackend/auth/auth.module#AuthModule' },
            { path: 'dashboard', canActivate: [__WEBPACK_IMPORTED_MODULE_3__appBackend_auth_auth_guard__["a" /* AuthGuard */]], loadChildren: '@appBackend/dashboard/dashboard.module#DashboardModule' },
        ]
    },
];
var BackendRoutingModule = /** @class */ (function () {
    function BackendRoutingModule() {
    }
    BackendRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(backendRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], BackendRoutingModule);
    return BackendRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/backend/backend.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backend/backend.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/backend/backend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackendComponent = /** @class */ (function () {
    function BackendComponent() {
    }
    BackendComponent.prototype.ngOnInit = function () {
    };
    BackendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-backend',
            template: __webpack_require__("../../../../../src/app/backend/backend.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backend/backend.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BackendComponent);
    return BackendComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backend/backend.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendModule", function() { return BackendModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appShared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appBackend_backend_routing_module__ = __webpack_require__("../../../../../src/app/backend/backend-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appBackend_auth_auth_guard__ = __webpack_require__("../../../../../src/app/backend/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appBackend_backend_component__ = __webpack_require__("../../../../../src/app/backend/backend.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BackendModule = /** @class */ (function () {
    function BackendModule() {
    }
    BackendModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__appShared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__appBackend_backend_routing_module__["a" /* BackendRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__appBackend_backend_component__["a" /* BackendComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__appBackend_auth_auth_guard__["a" /* AuthGuard */]
            ]
        })
    ], BackendModule);
    return BackendModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__("../../../../../src/app/core/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appCore_services_shelter_service__ = __webpack_require__("../../../../../src/app/core/services/shelter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_details_service__ = __webpack_require__("../../../../../src/app/core/services/user-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_3__appCore_services_shelter_service__["a" /* ShelterService */],
                __WEBPACK_IMPORTED_MODULE_4__services_user_details_service__["a" /* UserDetailsService */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appCore_services_user_details_service__ = __webpack_require__("../../../../../src/app/core/services/user-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http, userDetails) {
        this.http = http;
        this.userDetails = userDetails;
        this.baseUrl = 'http://alphard.us/v1/api';
    }
    LoginService.prototype.login = function (username, password) {
        var loginUrl = this.baseUrl + "/login";
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        params = params.append('username', username);
        params = params.append('password', password);
        return this.http.get(loginUrl, { params: params });
    };
    LoginService.prototype.signup = function (username, email, password) {
        var signupUrl = this.baseUrl + "/signup";
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        params = params.append('username', username);
        params = params.append('email', email);
        params = params.append('password', password);
        return this.http.get(signupUrl, { params: params });
    };
    LoginService.prototype.isLoggedIn = function () {
        var loggedInStatus = false;
        if (this.userDetails.accessToken) {
            loggedInStatus = true;
        }
        return loggedInStatus;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__appCore_services_user_details_service__["a" /* UserDetailsService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/shelter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appCore_services_user_details_service__ = __webpack_require__("../../../../../src/app/core/services/user-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShelterService = /** @class */ (function () {
    function ShelterService(http, userDetails) {
        this.http = http;
        this.userDetails = userDetails;
        // private baseUrl: string = 'http://www.alphard.us/v1/api/getallshelters';
        this.baseUrl = 'http://www.alphard.us/v1/api';
    }
    ShelterService.prototype.getShelter = function () {
        return this.http.get('./shelter');
    };
    ShelterService.prototype.getAllShelters = function () {
        // let shelterUrl: string= this.baseUrl + '/'
        // return this.http.get(shelterUrl);
        return this.http.post(this.baseUrl + '/getallshelters', 0, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + this.userDetails.accessToken),
        });
    };
    ShelterService.prototype.getShelterAvailability = function () {
        return this.http.get('./availability');
    };
    ShelterService.prototype.signupShelters = function (param) {
        // let shelterUrl: string= this.baseUrl + '/'
        // return this.http.get(shelterUrl);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('name', param.shelter_name)
            .set('address', param.shelter_address)
            .set('city', param.shelter_address_city)
            .set('state', param.shelter_address_state)
            .set('phone', param.shelter_phone);
        return this.http.post(this.baseUrl + '/signupshelter', 0, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Bearer ' + this.userDetails.accessToken),
            params: params,
        });
    };
    ShelterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__appCore_services_user_details_service__["a" /* UserDetailsService */]])
    ], ShelterService);
    return ShelterService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/user-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsService = /** @class */ (function () {
    function UserDetailsService() {
        this.user = {
            token: null,
            name: null
        };
    }
    Object.defineProperty(UserDetailsService.prototype, "accessToken", {
        get: function () {
            return localStorage.getItem('token');
        },
        set: function (accessToken) {
            localStorage.setItem('token', accessToken);
            this.user.token = accessToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDetailsService.prototype, "username", {
        /// save the username into local storage as well
        get: function () {
            return this.user.name;
        },
        /// save the username into local storage as well
        set: function (username) {
            this.user.name = username;
        },
        enumerable: true,
        configurable: true
    });
    UserDetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserDetailsService);
    return UserDetailsService;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  height: 40px;\r\n  width: 100%;\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  color: #fff;\r\n  background-color: red;\r\n}\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>Admin Footer</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/frontend/frontend-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontendRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appFrontend_shelters_shelters_component__ = __webpack_require__("../../../../../src/app/frontend/shelters/shelters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appFrontend_home_home_component__ = __webpack_require__("../../../../../src/app/frontend/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appFrontend_shelters_signup_shelters_signup_component__ = __webpack_require__("../../../../../src/app/frontend/shelters-signup/shelters-signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var userRoutes = [
    {
        path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__appFrontend_home_home_component__["a" /* HomeComponent */] },
            { path: 'shelters', component: __WEBPACK_IMPORTED_MODULE_2__appFrontend_shelters_shelters_component__["a" /* SheltersComponent */] },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__appFrontend_shelters_signup_shelters_signup_component__["a" /* SheltersSignupComponent */] },
        ]
    }
];
var FrontendRoutingModule = /** @class */ (function () {
    function FrontendRoutingModule() {
    }
    FrontendRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(userRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], FrontendRoutingModule);
    return FrontendRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/frontend/frontend.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontendModule", function() { return FrontendModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appFrontend_frontend_routing_module__ = __webpack_require__("../../../../../src/app/frontend/frontend-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appFrontend_home_home_component__ = __webpack_require__("../../../../../src/app/frontend/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appFrontend_shelter_item_shelter_item_component__ = __webpack_require__("../../../../../src/app/frontend/shelter-item/shelter-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appFrontend_shelters_shelters_component__ = __webpack_require__("../../../../../src/app/frontend/shelters/shelters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appFrontend_shelters_signup_shelters_signup_component__ = __webpack_require__("../../../../../src/app/frontend/shelters-signup/shelters-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var FrontendModule = /** @class */ (function () {
    function FrontendModule() {
    }
    FrontendModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__appFrontend_frontend_routing_module__["a" /* FrontendRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_snack_bar__["b" /* MatSnackBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__appFrontend_shelter_item_shelter_item_component__["a" /* ShelterItemComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__appFrontend_shelter_item_shelter_item_component__["a" /* ShelterItemComponent */],
                __WEBPACK_IMPORTED_MODULE_3__appFrontend_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__appFrontend_shelters_shelters_component__["a" /* SheltersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__appFrontend_shelters_signup_shelters_signup_component__["a" /* SheltersSignupComponent */]
            ]
        })
    ], FrontendModule);
    return FrontendModule;
}());



/***/ }),

/***/ "../../../../../src/app/frontend/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-content {\r\n  height: calc(100% - 125px);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  padding: 30px 0px;\r\n}\r\n\r\n.shelter-filter {\r\n  min-height: 30px;\r\n  width: 200px;\r\n}\r\n\r\n.shelter-list {\r\n  list-style: none;\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  padding: 0px;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.shelter-item {\r\n  width: 100%;\r\n  background-color: #e3e3e3;\r\n  margin: 20px 0px;\r\n  padding: 15px 30px;\r\n  line-height: 0.5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frontend/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<sa-navbar></sa-navbar>\n<section class=\"home-content\">\n  <ul class=\"shelter-list\">\n    <li class=\"shelter-item\" *ngFor=\"let shelterType of shelterTypes\">\n      <a [routerLink]=\"['shelters']\" [queryParams]=\"{filter:shelterType}\">{{shelterType}}</a>\n    </li>\n  </ul>\n</section>\n<sa-footer></sa-footer>"

/***/ }),

/***/ "../../../../../src/app/frontend/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Shelter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Shelter = /** @class */ (function (_super) {
    __extends(Shelter, _super);
    function Shelter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Shelter;
}(Object));

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.shelters = [];
        this.shelterTypes = ['All', 'Men', 'Women', 'Youth', 'Family'];
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-home',
            template: __webpack_require__("../../../../../src/app/frontend/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/frontend/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/frontend/shelter-item/shelter-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shelter-item {\r\n  width: 60%;\r\n  max-width: 600px;\r\n  background-color: #e3e3e3;\r\n  margin: 20px auto;\r\n  padding: 15px 30px;\r\n  line-height: 0.5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frontend/shelter-item/shelter-item.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"shelter-item\" *ngIf=\"ShelterData\">\n  <p class=\"shelter-name\">{{ShelterData.shelter_name}}</p>\n\n  <p class=\"shelter-address\">{{ShelterData.shelter_address}} {{ShelterData.shelter_address_zip}}</p>\n  <p class=\"shelter-types\" *ngFor=\"let type of ShelterData.personType\">{{type.name}}</p>\n   \n</li>"

/***/ }),

/***/ "../../../../../src/app/frontend/shelter-item/shelter-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelterItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShelterItemComponent = /** @class */ (function () {
    function ShelterItemComponent() {
        this.ShowInfo = false;
    }
    ShelterItemComponent.prototype.ngOnInit = function () {
        console.log('ShelterData', this.ShelterData);
    };
    ShelterItemComponent.prototype.ShowHide = function () {
        this.ShowInfo = !this.ShowInfo;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ShelterItemComponent.prototype, "ShelterData", void 0);
    ShelterItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-shelter-item',
            template: __webpack_require__("../../../../../src/app/frontend/shelter-item/shelter-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/frontend/shelter-item/shelter-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShelterItemComponent);
    return ShelterItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/frontend/shelters-signup/shelters-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n}\n\n.col-1 {\n  background: #D7E8D4;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.col-2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 5;\n      -ms-flex: 5;\n          flex: 5;\n}\n\n.content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.content > article {\n  -webkit-box-flex: 3;\n      -ms-flex: 3;\n          flex: 3;\n  min-height: 60vh;\n}\n\n.content > aside {\n  background: beige;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\nheader, footer {\n  background: #ff408129;\n  height: 20vh;\n}\n\nheader, footer, article, nav, aside {\n  padding: 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frontend/shelters-signup/shelters-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <nav class=\"col-1\">Nav</nav>\n  <div class=\"col-2\">\n  \t<header>Header</header>\n    <main class=\"content\">\n    <article>\n\n      <mat-card>\n        <div class=\"example-container\">\n          <mat-form-field>\n            <input matInput  [(ngModel)]=\"shelterName\" placeholder=\"Shelter Name\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput  [(ngModel)]=\"shelterAddressNumber\" type='number' placeholder=\"Address\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput  [(ngModel)]=\"shelterCity\" placeholder=\"City\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput  [(ngModel)]=\"shelterState\" placeholder=\"State\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput  [(ngModel)]=\"shelterTel\" type='number' placeholder=\"Tel\">\n          </mat-form-field>\n\n          <button mat-raised-button\t(click)=\"save();\">Submit to API and SAVE!</button>\n\n        </div>\n</mat-card>\n\n\n\n    </article>\n    <aside>Aside</aside>\n    </main>\n  \t<footer>Footer</footer>\n  </div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/frontend/shelters-signup/shelters-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SheltersSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appCore_services_shelter_service__ = __webpack_require__("../../../../../src/app/core/services/shelter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SheltersSignupComponent = /** @class */ (function () {
    function SheltersSignupComponent(_activated, _shelterService, snackBar) {
        this._activated = _activated;
        this._shelterService = _shelterService;
        this.snackBar = snackBar;
    }
    SheltersSignupComponent.prototype.ngOnInit = function () {
        console.log('YO');
    };
    SheltersSignupComponent.prototype.save = function () {
        var data = {
            shelter_name: this.shelterName,
            shelter_address: this.shelterAddressNumber,
            shelter_address_city: this.shelterCity,
            shelter_address_state: this.shelterState,
            shelter_phone: this.shelterTel
        };
        console.log(data);
        this._shelterService.signupShelters(data)
            .subscribe(function (result) {
            console.log(result);
        });
        this.snackBar.open('Saved ', 'close', {
            duration: 2000,
        });
    };
    SheltersSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shelters-signup',
            template: __webpack_require__("../../../../../src/app/frontend/shelters-signup/shelters-signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/frontend/shelters-signup/shelters-signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__appCore_services_shelter_service__["a" /* ShelterService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatSnackBar */]])
    ], SheltersSignupComponent);
    return SheltersSignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/frontend/shelters/shelters.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shelters-content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  padding: 0px;\r\n  padding-top: 50px;\r\n}\r\n\r\n.filter-field {\r\n  width: 300px;\r\n  height: 80px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.filter-label {\r\n\r\n}\r\n\r\n.filter-input {\r\n  height: 40px;\r\n  max-height: 40px;\r\n  margin-top: 6px;\r\n  padding: 5px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.shelter-filter {\r\n  min-height: 30px;\r\n  width: 200px;\r\n}\r\n\r\n.shelters-list {\r\n  list-style: none;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  padding: 0px;\r\n  overflow: hidden;\r\n  overflow-y: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/frontend/shelters/shelters.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"shelters-content\">\r\n  <label class=\"filter-field\">\r\n    <label class=\"filter-label\">Filter Shelters by Name</label>\r\n    <input type=\"search\" class=\"filter-input\" placeholder=\"Filter Shelters\" [(ngModel)]=\"filterValue\" />\r\n  </label>\r\n  <ul class=\"shelters-list\">\r\n    <sa-shelter-item *ngFor=\"let shelter of shelters | sheltersFilter:filterValue\" [ShelterData]=\"shelter\"></sa-shelter-item>\r\n  </ul>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/frontend/shelters/shelters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Shelter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SheltersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appCore_services_shelter_service__ = __webpack_require__("../../../../../src/app/core/services/shelter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Shelter = /** @class */ (function (_super) {
    __extends(Shelter, _super);
    function Shelter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Shelter;
}(Object));

var SheltersComponent = /** @class */ (function () {
    function SheltersComponent(_activated, _shelterService) {
        this._activated = _activated;
        this._shelterService = _shelterService;
        this.shelters = [];
        this.shelterType = '';
    }
    SheltersComponent.prototype.ngOnInit = function () {
        this.getShelters();
    };
    SheltersComponent.prototype.getShelters = function () {
        var _this = this;
        this._shelterService.getAllShelters()
            .subscribe(function (shelters) {
            _this.shelters = shelters;
            console.log('shelters', _this.shelters);
        }, function (error) { return console.error('Error getting shelters', error); });
    };
    SheltersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shelters',
            template: __webpack_require__("../../../../../src/app/frontend/shelters/shelters.component.html"),
            styles: [__webpack_require__("../../../../../src/app/frontend/shelters/shelters.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__appCore_services_shelter_service__["a" /* ShelterService */]])
    ], SheltersComponent);
    return SheltersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  width: 100%;\r\n  color: #fff;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  height: 45px;\r\n}\r\n\r\n.nav-menu {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: green;\r\n}\r\n\r\n.nav-items {\r\n  width: auto;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: 0px;\r\n  padding: 0px 20px;\r\n}\r\n\r\n.nav-item {\r\n  list-style: none;\r\n  margin: 0px 25px;\r\n  text-align: center;\r\n}\r\n\r\n.nav-link {\r\n  color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"nav-menu\">\n    <ul class=\"nav-items\" *ngIf=\"navItems\">\n      <li class=\"nav-item\" *ngFor=\"let navItem of navItems\">\n        <a class=\"nav-link\" [routerLink]=\"[navItem.url]\">{{navItem.name}}</a>\n      </li>\n    </ul>\n  </nav>\n</header>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "navItems", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shelters_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/shelters-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__shelters_filter_pipe__["a" /* SheltersFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_5_app_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6_app_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__shelters_filter_pipe__["a" /* SheltersFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_5_app_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6_app_footer_footer_component__["a" /* FooterComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shelters-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SheltersFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SheltersFilterPipe = /** @class */ (function () {
    function SheltersFilterPipe() {
    }
    SheltersFilterPipe.prototype.transform = function (shelters, filterValue, filterAttribute) {
        if (filterAttribute === void 0) { filterAttribute = 'name'; }
        var filteredShelters = [];
        if (!filterValue) {
            return shelters;
        }
        return shelters.filter(function (shelter) {
            var lowerCaseFilterAttr = shelter[filterAttribute].toLocaleLowerCase();
            var lowerCaseFilterValue = filterValue.toLocaleLowerCase();
            return lowerCaseFilterAttr.includes(lowerCaseFilterValue);
        });
    };
    SheltersFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'sheltersFilter'
        })
    ], SheltersFilterPipe);
    return SheltersFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map