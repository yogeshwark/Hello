import Human from './Human.js';

class Teacher extends Human {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
}

export default Teacher;