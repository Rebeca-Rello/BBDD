


let mysql = require ("mysql2");

let connection = mysql.createConnection({

    host:        "localhost",
    user:        "root",
    password:    "RbkFullStack9!",
    database:    "dia1"
})


connection.connect(function(error){

    if(error){
        console.log(error);
    }else{
        console.log('Conexión correcta.');
    }

});


//Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que
// están apuntados.

// let sql = "SELECT first_name, last_name, title FROM students " +
// "JOIN grupos ON (students.group_id = grupos.group_id) " +
// "JOIN subject_teacher ON (grupos.group_id = subject_teacher.subject_id) " +
// "JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) ";

// Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que
// imparten.

//let sql = "SELECT first_name,last_name, title FROM teachers JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id)JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)";

//Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.


// let sql ="SELECT teachers.first_name, teachers.last_name, subjects.title, COUNT(students.student_id) " + 
//          "FROM students JOIN grupos ON (students.group_id = grupos.group_id) JOIN subject_teacher " +  
//          "ON (subject_teacher.group_id = grupos.group_id) JOIN teachers " +  
//          "ON (subject_teacher.teacher_id = teachers.teacher_id) JOIN subjects " +  
//          "ON (subject_teacher.subject_id = subjects.subject_id) GROUP BY (subjects.title)";


connection.query(sql,function(err,result)
{
    if(err){

    console.log(err)
    }
    else{
        console.log("Dato insertado");
        console.log(result);
        console.log(result.length);

    }

});


