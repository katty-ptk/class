class Student {
    constructor( name, age, email, image_link ) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.image = image_link
    }
}

class Students {
    constructor() {
        this.all_students = [];
    }

    // create a method to create new students
    newStudent( name, age, email, image_link ) {
        let new_student = new Student( name, age, email, image_link );
        this.all_students.push( new_student );
        return new_student;
    }

    get allStudents() {
        return this.all_students;
    }
    
    get numberOfStudents() {
        return this.all_students.length;
    }
}
let students_array = new Students();

// students_array.newStudent(
//     "Katty",
//     17,
//     "katy.lazar05@gmail.com"
// );

// console.log(students_array)