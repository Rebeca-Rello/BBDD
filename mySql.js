
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


// let sql = "INSERT INTO teachers(first_name, last_name) VALUES (\"Ramón\", \"Gamarra\")";
// connection.query(sql,function(err,result)
// {
//     if(err){

//     console.log(err)
//     }
//     else{
//         console.log("Dato insertado");
//         console.log(result);
//         console.log(result.insertId);

//     }

// });

// let sql1 = "INSERT INTO subjects(title) VALUES (\"Francés\")";
// connection.query(sql1,function(err,result)
// {
//     if(err){

//     console.log(err)
//     }
//     else{
//         console.log("Dato insertado");
//         console.log(result);
//         console.log(result.insertId);

//     }

// });

let sql2 = "INSERT INTO groups (name) VALUES (\"Elefantitos\")";
connection.query(sql2,function(err,result)
{
    if(err){

    console.log(err);
    }
    else{
        console.log("Dato insertado");
        console.log(result);
        console.log(result.insertId);

    }

});