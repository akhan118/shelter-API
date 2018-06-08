webpackJsonp(["auth.module"],{

/***/ "../../../../../src/app/backend/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appBackend_auth_auth_component__ = __webpack_require__("../../../../../src/app/backend/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appBackend_auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/backend/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appBackend_auth_login_login_component__ = __webpack_require__("../../../../../src/app/backend/auth/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var authRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__appBackend_auth_auth_component__["a" /* AuthComponent */], children: [
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__appBackend_auth_signup_signup_component__["a" /* SignupComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__appBackend_auth_login_login_component__["a" /* LoginComponent */] },
            { path: '', redirectTo: 'signup', pathMatch: 'full' }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(authRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/backend/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backend/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/backend/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-auth',
            template: __webpack_require__("../../../../../src/app/backend/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backend/auth/auth.component.css")]
        })
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backend/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appShared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__ = __webpack_require__("../../../../../src/app/backend/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_component__ = __webpack_require__("../../../../../src/app/backend/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/backend/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("../../../../../src/app/backend/auth/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__appShared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__auth_routing_module__["a" /* AuthRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/backend/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.login {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.form-group {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: flex-center;\r\n      -ms-flex-pack: flex-center;\r\n          justify-content: flex-center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: 10px 0px;\r\n}\r\n\r\n.form-label {\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n}\r\n\r\n.login-link {\r\n  margin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backend/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"title\">Login</h3>\n\n<form class=\"login\" [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm(loginForm)\">\n  <label class=\"form-group\">\n    <label class=\"form-label\">Username</label>\n    <input class=\"form-input\" type=\"text\" placeholder=\"Username\" formControlName=\"username\" required>\n  </label>\n  <label class=\"form-group\">\n    <label class=\"form-label\">Password</label>\n    <input class=\"form-input\" type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n  </label>\n  <button type=\"submit\" [disabled]=\"loginForm.invalid || isSubmitting\">Login</button>\n</form>\n\n<a class=\"login-link\" [routerLink]=\"['/backend/signup']\">Signup</a>"

/***/ }),

/***/ "../../../../../src/app/backend/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appCore_services_login_service__ = __webpack_require__("../../../../../src/app/core/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appCore_services_user_details_service__ = __webpack_require__("../../../../../src/app/core/services/user-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(activatedRoute, fb, loginService, router, userDetails) {
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.userDetails = userDetails;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createLoginForm();
        this.setLoginCredentials();
    };
    LoginComponent.prototype.createLoginForm = function () {
        this.loginForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    LoginComponent.prototype.submitForm = function (form) {
        var _this = this;
        this.loginService.login(form.value.username, form.value.password)
            .subscribe(function (loginResponse) {
            _this.userDetails.accessToken = loginResponse['access_token'];
            _this.userDetails.username = loginResponse['username'];
            _this.router.navigate(['/backend/dashboard']);
        }, function (error) {
            console.error('Error signing up:', error);
        });
    };
    LoginComponent.prototype.setLoginCredentials = function () {
        var _this = this;
        this.activatedRoute.queryParamMap
            .subscribe(function (values) {
            var creds = values['params'];
            if (creds['username'] && creds['password']) {
                _this.loginForm.setValue({ username: creds['username'], password: creds['password'] });
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-login',
            template: __webpack_require__("../../../../../src/app/backend/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backend/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__appCore_services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__appCore_services_user_details_service__["a" /* UserDetailsService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backend/auth/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.signup {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.form-group {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: flex-center;\r\n      -ms-flex-pack: flex-center;\r\n          justify-content: flex-center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: 10px 0px;\r\n}\r\n\r\n.form-label {\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n}\r\n\r\n.login-link {\r\n  margin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backend/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"title\">Signup</h3>\n\n<form class=\"signup\" [formGroup]=\"signupForm\" (ngSubmit)=\"submitForm(signupForm)\">\n  <label class=\"form-group\">\n    <label class=\"form-label\">Username</label>\n    <input class=\"form-input\" type=\"text\" placeholder=\"Username\" formControlName=\"username\" required>\n  </label>\n  <label class=\"form-group\">\n    <label class=\"form-label\">Email</label>\n    <input class=\"form-input\" type=\"email\" placeholder=\"Email\" formControlName=\"email\" required>\n  </label>\n  <label class=\"form-group\">\n    <label class=\"form-label\">Password</label>\n    <input class=\"form-input\" type=\"password\" placeholder=\"Password\" formControlName=\"password\" required>\n  </label>\n  <button type=\"submit\" [disabled]=\"signupForm.invalid || isSubmitting\">Signup</button>\n</form>\n\n<a class=\"login-link\" [routerLink]=\"['/backend/login']\">Login</a>"

/***/ }),

/***/ "../../../../../src/app/backend/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appCore_services_login_service__ = __webpack_require__("../../../../../src/app/core/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appCore_services_user_details_service__ = __webpack_require__("../../../../../src/app/core/services/user-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, loginService, router, userDetails) {
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.userDetails = userDetails;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.createSignupForm();
    };
    SignupComponent.prototype.createSignupForm = function () {
        this.signupForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    SignupComponent.prototype.submitForm = function (form) {
        var _this = this;
        this.loginService.signup(form.value.username, form.value.email, form.value.password)
            .subscribe(function (signupResponse) {
            _this.router.navigate(['/backend/login'], {
                queryParams: { username: form.value.username, password: form.value.password }
            });
        }, function (error) {
            console.error('Error logging into app:', error);
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-signup',
            template: __webpack_require__("../../../../../src/app/backend/auth/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backend/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__appCore_services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__appCore_services_user_details_service__["a" /* UserDetailsService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map