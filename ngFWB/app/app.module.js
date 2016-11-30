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
// The imports we need for this module.
var core_1 = require('@angular/core');
// Angular imports
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
// The imports from the modules we have made.
var app_component_1 = require('./app.component');
var course_module_1 = require('./resources/courses/course.module');
var instructor_module_1 = require('./resources/instructors/instructor.module');
var room_module_1 = require('./resources/rooms/room.module');
var section_module_1 = require('./resources/sections/section.module');
var semester_module_1 = require('./resources/semesters/semester.module');
var campus_module_1 = require('./resources/campuses/campus.module');
var prefix_module_1 = require('./resources/prefixes/prefix.module');
var views_module_1 = require('./views/views.module');
// Home component
var home_view_component_1 = require('./views/home-view.component');
// The NgModule decorator for metadata.
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_view_component_1.HomeViewComponent },
                    //{ path: 'instrView', component: InstrViewComponent},       
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ]),
                course_module_1.CourseModule,
                instructor_module_1.InstructorModule,
                room_module_1.RoomModule,
                section_module_1.SectionModule,
                semester_module_1.SemesterModule,
                campus_module_1.CampusModule,
                prefix_module_1.PrefixModule,
                views_module_1.ViewsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_view_component_1.HomeViewComponent,
            ],
            providers: [
                {
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                }
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map