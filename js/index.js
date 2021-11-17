const main_div = document.getElementsByClassName('all-students')[0];
document.getElementById('submit').addEventListener('click', addStudent);

function addStudent() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const image_link = document.getElementById('image').value;

    students_array.newStudent( 
        name, 
        email, 
        age, 
        image_link 
    );
    
    const studentDiv = document.createElement('div');
    studentDiv.classList.add('one-student');
    const studentInfo = document.createElement('div');
    studentInfo.classList.add('info');

    const student_name = document.createElement('h3');
    const student_age = document.createElement('p');
    const student_email = document.createElement('p');
    const student_image = document.createElement('img');

    student_name.textContent = name;
    student_age.textContent = age;
    student_email.textContent = email;
    student_image.src = "../katty.jpg";

    studentDiv.appendChild(student_image);
    studentInfo.appendChild(student_name);
    studentInfo.appendChild(student_age);
    studentInfo.appendChild(student_email);

    studentDiv.appendChild(student_image);
    studentDiv.appendChild(studentInfo);
    main_div.appendChild(studentDiv);
    $('input').val('');
}

function addToDom() {
    students_array.all_students.forEach( student => {
    });

}
