class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;        
    }
}
class Student extends Human {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    getDetails() {
        return `${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
class Teacher extends Human {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    getDetails() {
        return `${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
    }
}
class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teachers = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    getDetails() {
        return `School: ${this.name}, Students: ${this.students.length}, Teachers: ${this.teachers.length}`;
    }
}
// Example usage
const school = new School("Greenwood High");
const student1 = new Student("Alice", 14, "8th Grade");
const student2 = new Student("Bob", 15, "9th Grade");
const teacher1 = new Teacher("Mr. Smith", 40, "Mathematics");
const teacher2 = new Teacher("Ms. Johnson", 35, "Science");
school.addStudent(student1);
school.addStudent(student2);
school.addTeacher(teacher1);
school.addTeacher(teacher2);
document.body.innerHTML = `<h1>${school.getDetails()}</h1>`;