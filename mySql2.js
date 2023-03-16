

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

// let sql = "SELECT AVG (mark) FROM marks WHERE subject_id = 1";
// let sql = "SELECT COUNT(*) FROM students";
// let sql ="SELECT * FROM grupos";
// let sql = "DELETE FROM marks WHERE mark >= 5 AND date >= '2022-01-01' AND date <= '2022-12-31'";
// let sql = "ALTER TABLE students ADD COLUMN Entrada INT";
// let sql ="SELECT * FROM students WHERE Entrada >= 2023";
// let sql = "SELECT subject_id, COUNT(*) FROM subject_teacher GROUP BY subject_id";
// let sql ="SELECT student_id, mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8) AND (date >= '2022-01-01') AND (date <= '2022-12-31')";
// let sql ="SELECT AVG (mark), subject_id FROM marks WHERE date BETWEEN '2022-01-01' AND '2022-12-31' GROUP BY subject_id";
// let sql = "SELECT AVG (mark), student_id FROM marks WHERE date BETWEEN '2022-01-01' AND '2022-12-31' GROUP BY student_id";






connection.query(sql,function(err,result)
{
    if(err){

    console.log(err)
    }
    else{
        console.log("Dato insertado");
        console.log(result);
        console.log(result.insertId);

    }

});




