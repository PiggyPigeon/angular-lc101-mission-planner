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

module.exports = ".box {\n    display: -webkit-box;\n    display: flex;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"box\">\n  <app-crew></app-crew>\n  <app-equipment></app-equipment>\n  <app-experiments></app-experiments>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mission-planning-dashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _crew_crew_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crew/crew.component */ "./src/app/crew/crew.component.ts");
/* harmony import */ var _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipment/equipment.component */ "./src/app/equipment/equipment.component.ts");
/* harmony import */ var _experiments_experiments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experiments/experiments.component */ "./src/app/experiments/experiments.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _crew_crew_component__WEBPACK_IMPORTED_MODULE_5__["CrewComponent"],
                _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_6__["EquipmentComponent"],
                _experiments_experiments_component__WEBPACK_IMPORTED_MODULE_7__["ExperimentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/crew/crew.component.css":
/*!*****************************************!*\
  !*** ./src/app/crew/crew.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZXcvY3Jldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/crew/crew.component.html":
/*!******************************************!*\
  !*** ./src/app/crew/crew.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Crew</h3>\n<ul>\n   <li *ngFor=\"let member of crew\">\n\n      <span *ngIf=\"memberBeingEdited !== member; else elseBlock\">\n         <!-- display state of member -->\n         <span (click)=\"edit(member)\" class=\"editable-text\">{{member.name}}</span>\n         <span *ngIf=\"member.firstMission\">\n            - 1st\n         </span>\n         <button (click)=\"remove(member)\">remove</button>\n      </span>\n\n      <ng-template #elseBlock>\n         <!-- edit state of member -->\n         <input #updatedName (keyup.enter)=\"save(updatedName.value, member)\" value=\"{{member.name}}\"/>\n         <button (click)=\"save(updatedName.value, member)\">save</button>\n      </ng-template>\n\n   </li>\n</ul>\n<input #name (keyup.enter)=\"add(name.value, firstMission.checked); name.value = ''\" type=\"text\"/>\n<label>First mission<input #firstMission type=\"checkbox\"/></label>\n<button (click)=\"add(name.value, firstMission.checked); name.value = ''\">Add</button>"

/***/ }),

/***/ "./src/app/crew/crew.component.ts":
/*!****************************************!*\
  !*** ./src/app/crew/crew.component.ts ***!
  \****************************************/
/*! exports provided: CrewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewComponent", function() { return CrewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CrewComponent = /** @class */ (function () {
    function CrewComponent() {
        this.memberBeingEdited = null;
        this.inCrew = false;
        this.crew = [
            { name: "Eileen Collins", firstMission: false },
            { name: "Mae Jemison", firstMission: false },
            { name: "Ellen Ochoa", firstMission: true }
        ];
    }
    CrewComponent.prototype.ngOnInit = function () {
    };
    // below throws alert 3x if we keep the toUpperCase part. how to fix?
    CrewComponent.prototype.add = function (memberName, isFirst) {
        for (var i = 0; i < this.crew.length; i++) {
            if (this.crew[i]['name'].toUpperCase() === memberName.toUpperCase()) {
                this.inCrew = true;
                alert("You already have this crew member");
            }
        }
        if (!this.inCrew && memberName !== "") {
            this.crew.push({ name: memberName, firstMission: isFirst });
        }
        this.inCrew = false;
    };
    CrewComponent.prototype.remove = function (member) {
        var index = this.crew.indexOf(member);
        this.crew.splice(index, 1);
    };
    CrewComponent.prototype.edit = function (member) {
        this.memberBeingEdited = member;
    };
    CrewComponent.prototype.save = function (name, member) {
        member['name'] = name;
        this.memberBeingEdited = null;
    };
    CrewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crew',
            template: __webpack_require__(/*! ./crew.component.html */ "./src/app/crew/crew.component.html"),
            styles: [__webpack_require__(/*! ./crew.component.css */ "./src/app/crew/crew.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CrewComponent);
    return CrewComponent;
}());



/***/ }),

/***/ "./src/app/equipment/equipment.component.css":
/*!***************************************************!*\
  !*** ./src/app/equipment/equipment.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwbWVudC9lcXVpcG1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/equipment/equipment.component.html":
/*!****************************************************!*\
  !*** ./src/app/equipment/equipment.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Equipment</h3>\n<ul>\n  <li>Habitat dome</li>\n  <li>Drones</li>\n  <li>Food containers</li>\n  <li>Oxygen tanks</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/equipment/equipment.component.ts":
/*!**************************************************!*\
  !*** ./src/app/equipment/equipment.component.ts ***!
  \**************************************************/
/*! exports provided: EquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentComponent", function() { return EquipmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EquipmentComponent = /** @class */ (function () {
    function EquipmentComponent() {
    }
    EquipmentComponent.prototype.ngOnInit = function () {
    };
    EquipmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-equipment',
            template: __webpack_require__(/*! ./equipment.component.html */ "./src/app/equipment/equipment.component.html"),
            styles: [__webpack_require__(/*! ./equipment.component.css */ "./src/app/equipment/equipment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EquipmentComponent);
    return EquipmentComponent;
}());



/***/ }),

/***/ "./src/app/experiments/experiments.component.css":
/*!*******************************************************!*\
  !*** ./src/app/experiments/experiments.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaW1lbnRzL2V4cGVyaW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/experiments/experiments.component.html":
/*!********************************************************!*\
  !*** ./src/app/experiments/experiments.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Experiments</h3>\n<ul>\n  <li>Mars soil sample</li>\n  <li>Plant growth in habitat</li>\n  <li>Human bone density</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/experiments/experiments.component.ts":
/*!******************************************************!*\
  !*** ./src/app/experiments/experiments.component.ts ***!
  \******************************************************/
/*! exports provided: ExperimentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentsComponent", function() { return ExperimentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperimentsComponent = /** @class */ (function () {
    function ExperimentsComponent() {
    }
    ExperimentsComponent.prototype.ngOnInit = function () {
    };
    ExperimentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experiments',
            template: __webpack_require__(/*! ./experiments.component.html */ "./src/app/experiments/experiments.component.html"),
            styles: [__webpack_require__(/*! ./experiments.component.css */ "./src/app/experiments/experiments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperimentsComponent);
    return ExperimentsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editable-text {\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0YWJsZS10ZXh0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Mission Planning Dashboard</h1>\n\n<h3>\n    Mission Name:\n    <span *ngIf=\"!editingMission; else editMissionBlock\">\n        <span class=\"editable-text\" (click)=\"editingMission = true;\">{{ missionName }}</span>\n    </span>\n    <ng-template #editMissionBlock>\n        <input #mission (keyup.enter)=\"updateMission(mission.value)\" value=\"{{ missionName }}\"/>\n        <button (click)=\"updateMission(mission.value)\">save</button>\n    </ng-template>\n</h3>\n\n<h3>\n    Carrier Rocket: \n    <span *ngIf=\"!editingRocket; else editRocketname\">\n        <span class=\"editable-text\" (click)=\"editingRocket = true\"> {{ rocketName }}</span>\n    </span>\n    <ng-template #editRocketname>\n        <input #rocket (keyup.enter)=\"updateRocketName(rocket.value)\" value=\"{{rocketName}}\"/>\n        <button (click)=\"updateRocketName(rocket.value)\">save</button>\n    </ng-template>\n</h3>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.missionName = "Mars 2030";
        this.rocketName = "Plasma Max";
        this.editingMission = false;
        this.editingRocket = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.updateMission = function (updatedName) {
        this.missionName = updatedName;
        this.editingMission = false;
    };
    HeaderComponent.prototype.updateRocketName = function (updatedName) {
        this.rocketName = updatedName;
        this.editingRocket = false;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bethanyellington/repos/LaunchCode_git/angular_practice/mission-planner/angular-lc101-mission-planner/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map