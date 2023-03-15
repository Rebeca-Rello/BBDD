
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

// let sql = "INSERT INTO grupos(name) VALUES ('Elefantitos')";
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

    // let direccion = ("ALTER TABLE direccion ADD piso VARCHAR(200)");
    // connection.query(direccion,function(err,result)
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

    // let drop = ("ALTER TABLE direccion DROP piso");
    // connection.query(drop,function(err,result)
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

  

    // let drop = ("DROP TABLE direccion");
    // connection.query(drop,function(err,result)
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

    // let marks = ("UPDATE marks SET mark = 0");
    //  connection.query(marks,function(err,result)
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

    // let consulta = ("SELECT first_name, last_name FROM students")
    // connection.query(consulta,function(err,result)
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

    
    // let profes = ("SELECT teachers_id, first_name, last_name FROM teachers ");
    // connection.query(profes,function(err,result)
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

    //     let borrar = ("DELETE FROM marks WHERE date =<'2013-01-01'");
    // connection.query(borrar,function(err,result)
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

    let aprobado =("UPDATE marks SET mark = 5 WHERE mark <5")
        connection.query(aprobado,function(err,result)
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