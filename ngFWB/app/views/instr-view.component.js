"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var section_service_1 = require('../resources/sections/section.service');
var InstrViewComponent = (function () {
    function InstrViewComponent(_sectionService) {
        this._sectionService = _sectionService;
        this.pageTitle = 'Current Schedule';
    }
    InstrViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sectionService.getSections()
            .subscribe(function (sections) { return _this.sections = sections; });
    };
    InstrViewComponent = __decorate([
        core_1.Component({
            selector: 'instr-view-app',
            moduleId: module.id,
            templateUrl: 'instr-view.component.html'
        }), 
        __metadata('design:paramtypes', [section_service_1.SectionService])
    ], InstrViewComponent);
    return InstrViewComponent;
}());
exports.InstrViewComponent = InstrViewComponent;
//# sourceMappingURL=instr-view.component.js.map