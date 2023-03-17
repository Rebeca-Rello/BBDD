


let mysql = require ("mysql2");

let connection = mysql.createConnection({

    host:        "localhost",
    user:        "root",
    password:    "RbkFullStack9!",
    database:    "museo"
})


connection.connect(function(error){

    if(error){
        console.log(error);
    }else{
        console.log('Conexión correcta.');
    }

});


    let param =["prestado a nosotros"]
    let sql = " SELECT estado, ubicacion.ubicacion, fecha_devolucion, propietarios.nombre, "  +
              "apellidos, mail, direccion, telefono FROM piezas " +
              "JOIN ubicacion ON (piezas.ubicacion_id = ubicacion.ubicacion_id) "+
              "JOIN propietarios ON (piezas.propietarios_id = propietarios.propietarios_id) "+
              "WHERE piezas.estado = ? "






    // let param = []
    // let sql = "SELECT colecciones, COUNT(*)  FROM piezas " + 
    //           "JOIN colecciones ON (piezas.coleccion_id = colecciones.coleccion_id) " +
    //           "GROUP BY colecciones " +
    //           "ORDER BY colecciones.colecciones DESC";


        connection.query(sql, param, function(err,result)
        {
            if(err){

            console.log(err)
            }
            else{
                // console.log("Dato insertado");
                console.log(result);
                // console.log(result.insertId);

            }

        });

