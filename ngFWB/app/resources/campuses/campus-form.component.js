"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by adsal on 11/26/2016.
 */
var core_1 = require('@angular/core');
var campus_model_1 = require('./campus.model');
var CampusFormComponent = (function () {
    function CampusFormComponent(campusService, location) {
        this.campusService = campusService;
        this.location = location;
        this.pageTitle = 'Add Campus';
        this.model = new campus_model_1.Campus('Ogden', '123 Main St.');
    }
    CampusFormComponent.prototype.submitForm = function (form) {
        console.log(this.model);
        this.campusService.postCampusForm(this.model)
            .subscribe(function (data) { return console.log('success: ', data); }, function (err) { return console.log('error: ', err); });
    };
    CampusFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    CampusFormComponent = __decorate([
        core_1.Component({
            selector: 'campus-form',
            moduleId: module.id,
            templateUrl: 'campus-form.component.html'
        })
    ], CampusFormComponent);
    return CampusFormComponent;
}());
exports.CampusFormComponent = CampusFormComponent;
//# sourceMappingURL=campus-form.component.js.map