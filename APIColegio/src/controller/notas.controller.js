const connection = require ("../database")

function getMedia(request, response){

    let params = [request.query.id]
    let sql;
    if(request.query.id == null){
 
     sql = "SELECT * FROM marks";
    }
    else{
      
     sql = "SELECT AVG (mark) FROM marks WHERE student_id= " + "?";
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

 function getApuntadas(request, response){

    let params = [request.query.id]
    let sql;
    if(request.query.id == null){
 
     sql ="SELECT first_name, last_name, title FROM students " +
     "JOIN grupos ON (students.group_id = grupos.group_id) " +
     "JOIN subject_teacher ON (grupos.group_id = subject_teacher.subject_id) " +
     "JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) ";
    }
    else{
      
     sql = "SELECT first_name, last_name, title FROM students " +
     "JOIN grupos ON (students.group_id = grupos.group_id) " +
     "JOIN subject_teacher ON (grupos.group_id = subject_teacher.subject_id) " +
     "JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)  WHERE student_id= " + "?";
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

 function getImpartidas(request, response){

    let params = [request.query.id]
    let sql;
    if(request.query.id == null){
 
     sql ="SELECT first_name,last_name, title FROM teachers " +
          "JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) " +
          "JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)";
    }
    else{
      
     sql = "SELECT first_name,last_name, title FROM teachers "
     "JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) "
     "JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) WHERE teacher_id= " + "?";
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



 module.exports ={getMedia, getApuntadas,getImpartidas}