import Student from './Student.js';
import Teacher from './Teacher.js';

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teachers = [];
    }

    addStudent(studentData) {
        const student = studentData instanceof Student ? studentData : new Student(studentData);
        this.students.push(student);
        return student;
    }

    addTeacher(teacherData) {
        const teacher = teacherData instanceof Teacher ? teacherData : new Teacher(teacherData);
        this.teachers.push(teacher);
        return teacher;
    }

    getAllHumans() {
        return [...this.students, ...this.teachers];
    }

    getDetails() {
        return `School: ${this.name}, Students: ${this.students.length}, Teachers: ${this.teachers.length}`;
    }
}

export default School;