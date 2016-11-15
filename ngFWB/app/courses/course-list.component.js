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
var course_service_1 = require('./course.service');
var CourseListComponent = (function () {
    function CourseListComponent(_courseService) {
        this._courseService = _courseService;
        this.pageTitle = 'Course List';
    }
    CourseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Hiii");
        this._courseService.getCourses()
            .subscribe(function (courses) { return _this.courses = courses; }, function (error) { return _this.errorMessage = error; });
    };
    CourseListComponent = __decorate([
        core_1.Component({
            selector: 'pm-courses',
            moduleId: module.id,
            templateUrl: 'course-list.component.html'
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CourseListComponent);
    return CourseListComponent;
}());
exports.CourseListComponent = CourseListComponent;
//# sourceMappingURL=course-list.component.js.map