"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = require("./CreateCourseService");
function createCourse(request, response) {
    const createCourseService = new CreateCourseService_1.CreateCourseService();
    createCourseService.execute('NodeJS', 10, 'Eldon');
    return response.send();
}
exports.createCourse = createCourse;
