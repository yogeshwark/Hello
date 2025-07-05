import { Student } from './models/Student.js';
import { Teacher } from './models/Teacher.js';
import { School } from './models/School.js';

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