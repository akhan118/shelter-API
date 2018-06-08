webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/backend/dashboard/availability/availability.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backend/dashboard/availability/availability.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Availability Works</p>"

/***/ }),

/***/ "../../../../../src/app/backend/dashboard/availability/availability.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appCore_services_shelter_service__ = __webpack_require__("../../../../../src/app/core/services/shelter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AvailabilityComponent = /** @class */ (function () {
    function AvailabilityComponent(shelterService) {
        this.shelterService = shelterService;
    }
    AvailabilityComponent.prototype.ngOnInit = function () { };
    AvailabilityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-availability',
            template: __webpack_require__("../../../../../src/app/backend/dashboard/availability/availability.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backend/dashboard/availability/availability.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__appCore_services_shelter_service__["a" /* ShelterService */]])
    ], AvailabilityComponent);
    return AvailabilityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backend/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/backend/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appBackend_dashboard_availability_availability_component__ = __webpack_require__("../../../../../src/app/backend/dashboard/availability/availability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appBackend_dashboard_profile_profile_component__ = __webpack_require__("../../../../../src/app/backend/dashboard/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appBackend_dashboard_settings_settings_component__ = __webpack_require__("../../../../../src/app/backend/dashboard/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var homeRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */], children: [
            { path: 'availability', component: __WEBPACK_IMPORTED_MODULE_3__appBackend_dashboard_availability_availability_component__["a" /* AvailabilityComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_4__appBackend_dashboard_profile_profile_component__["a" /* ProfileComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_5__appBackend_dashboard_settings_settings_component__["a" /* SettingsComponent */] },
            { path: '', redirectTo: 'availability', pathMatch: 'full' }
        ]
    },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(homeRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/backend/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backend/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<sa-navbar [navItems]=\"navLinks\"></sa-navbar>\n<p>Welcome {{ username }}</p>\n<router-outlet></router-outlet>\n<sa-footer></sa-footer>"

/***/ }),

/***/ "../../../../../src/app/backend/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appCore_services_user_details_service__ = __webpack_require__("../../../../../src/app/core/services/user-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userDetails) {
        this.userDetails = userDetails;
        this.navLinks = [
            { name: 'availability', url: '/backend/dashboard/availability' },
            { name: 'profile', url: '/backend/dashboard/profile' },
            { name: 'settings', url: '/backend/dashboard/settings' }
        ];
        this.username = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.username = this.userDetails.username;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-dashboard',
            template: __webpack_require__("../../../../../src/app/backend/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backend/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__appCore_services_user_details_service__["a" /* UserDetailsService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backend/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__appShared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_routing_module__ = __webpack_require__("../../../../../src/app/backend/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_availability_availability_component__ = __webpack_require__("../../../../../src/app/backend/dashboard/availability/availability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_settings_settings_component__ = __webpack_require__("../../../../../src/app/backend/dashboard/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/backend/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("../../../../../src/app/backend/dashboard/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__appShared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_routing_module__["a" /* DashboardRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__dashboard_availability_availability_component__["a" /* AvailabilityComponent */],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/backend/dashboard/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.button-edit {\r\n  width: 55px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n}\r\n\r\n.profile {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.form-group {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: flex-center;\r\n      -ms-flex-pack: flex-center;\r\n          justify-content: flex-center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  margin: 10px 0px;\r\n}\r\n\r\n.form-label {\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n}\r\n\r\n.input--disabled {\r\n  border-color: transparent;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backend/dashboard/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"title\">Profile</h3>\n<button class=\"button-edit\" (click)=\"editing = !editing\">\n  <span *ngIf=\"!editing\">Edit</span>\n  <span *ngIf=\"editing\">Cancel</span>\n</button>\n\n<form class=\"profile\" [formGroup]=\"profileForm\" (ngSubmit)=\"submitForm(profileForm)\">\n  <label class=\"form-group\">\n    <label class=\"form-label\">Name</label>\n    <input class=\"form-input\" type=\"text\" placeholder=\"Name\" formControlName=\"name\" [readonly]=\"!editing\" [class.input--disabled]=\"!editing\">\n  </label>\n  <label class=\"form-group\">\n    <label class=\"form-label\">EIN</label>\n    <input class=\"form-input\" type=\"number\" placeholder=\"EIN\" formControlName=\"EIN\" [readonly]=\"!editing\" [class.input--disabled]=\"!editing\">\n  </label>\n  <ng-container formGroupName=\"address\">\n    <label class=\"form-group\">\n      <label class=\"form-label\">Street</label>\n      <input class=\"form-input\" type=\"text\" placeholder=\"Street\" formControlName=\"street\" [readonly]=\"!editing\" [class.input--disabled]=\"!editing\">\n    </label>\n    <label class=\"form-group\">\n      <label class=\"form-label\">Zip</label>\n      <input class=\"form-input\" type=\"number\" placeholder=\"Zip\" formControlName=\"zip\" [readonly]=\"!editing\" [class.input--disabled]=\"!editing\">\n    </label>\n  </ng-container>\n  <label class=\"form-group\">\n    <label class=\"form-label\">Phone Number</label>\n    <input class=\"form-input\" type=\"tel\" placeholder=\"Phone Number\" formControlName=\"phoneNumber\" [readonly]=\"!editing\" [class.input--disabled]=\"!editing\">\n  </label>\n  <button type=\"submit\" [disabled]=\"profileForm.invalid || isSubmitting\" *ngIf=\"editing\">Save Form</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/backend/dashboard/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Shelter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appCore_services_shelter_service__ = __webpack_require__("../../../../../src/app/core/services/shelter.service.ts");
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(shelterService, fb) {
        this.shelterService = shelterService;
        this.fb = fb;
        this.editing = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getShelter();
        this.createLoginForm();
    };
    ProfileComponent.prototype.submitForm = function (form) {
    };
    ProfileComponent.prototype.getShelter = function () {
        var _this = this;
        this.shelterService.getShelter()
            .subscribe(function (shelterJSON) {
            _this.currentShelter = shelterJSON;
            _this.setFormValues(_this.currentShelter);
        }, function (error) { return console.log('Error getting shelter service:', error); });
    };
    ProfileComponent.prototype.createLoginForm = function () {
        this.profileForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            EIN: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            address: this.fb.group({
                street: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
                zip: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
            }),
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    ProfileComponent.prototype.setFormValues = function (shelter) {
        this.profileForm.setValue({
            name: shelter.name,
            EIN: shelter.EIN,
            address: {
                street: shelter.address.street,
                zip: shelter.address.zip
            },
            phoneNumber: shelter.phoneNumber
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-profile',
            template: __webpack_require__("../../../../../src/app/backend/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backend/dashboard/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__appCore_services_shelter_service__["a" /* ShelterService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backend/dashboard/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Settings Work</p>"

/***/ }),

/***/ "../../../../../src/app/backend/dashboard/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
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

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () { };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sa-settings',
            template: __webpack_require__("../../../../../src/app/backend/dashboard/settings/settings.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map