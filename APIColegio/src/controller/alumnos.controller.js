

const connection = require ("../database")

function getAlumno(request, response){

   let params = [request.query.id]
   let sql;
   if(request.query.id == null){

    sql = "SELECT * FROM students";
   }
   else{
     
    sql = "SELECT * FROM students WHERE student_id= " + "?";
   }

   connection.query(sql,params, function(err, result){

    if(err){
        console.log(err);
    }
    else{
        response.send(result);
    }

   })
      
}

function postAlumno(request, response){

    console.log(request.body);
    
    let params = [request.body.first_name, request.body.last_name, request.body.group_id,request.body.Entrada  ]
    let sql = "INSERT INTO students (first_name, last_name, group_id, Entrada) " +
      "VALUES ( ?,?,?,?)"
    console.log(sql);
    connection.query(sql, params, function(err, result){

        if(err){
            console.log(err);
        }
        else{
           console.log(result);
           if(result.insertId){
            response.send(String(result.insertId));
           }
           else{
            response.send("-1");
           }
        }
    
       })
          
    }
    

    function putAlumno(request, response)
{
    console.log(request.body);
    let params = [
                  request.body.first_name, 
                  request.body.last_name,
                  request.body.student_id
                  ]

    let sql = "UPDATE students SET first_name = COALESCE(?, first_name) , " + 
               "last_name = COALESCE(?, last_name) WHERE student_id = ?";

    console.log(sql); 
    connection.query(sql, params,function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}


function deleteAlumno(request, response){

    console.log(request.body);
    let params = [
            request.body.student_id
            ]
    
    let sql = "DELETE FROM students WHERE student_id = ?"
    console.log(sql);
    connection.query(sql, params, function(err, result){

        if(err){
            console.log(err);
        }
        else{
            console.log("Alumno borrado");
            console.log(result);
           
        }
    
       })
          
    }




module.exports ={getAlumno, postAlumno, putAlumno, deleteAlumno}