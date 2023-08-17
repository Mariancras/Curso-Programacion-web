En el github se comparte (dentro de la carpeta ARCHIVO SQL) la base de datos. La misma tiene ejecutado las siguientes consultas, que luego fueron comentadas:
//------------inserto consultas------------

//---select
// pool.query('select nombre,edad from empleados').then(function (resultados) {
//   console.log(resultados)
// });

//---insert
// var nuevoEmpleado = {
//   nombre:'Alan',
//   apellido:'Turing',
//   trabajo:'Matemático',
//   edad:111,
//   salario:'0',
//   mail:'alan.m@turing.com',
// }
// pool.query('insert into empleados set ?', [nuevoEmpleado]).then(function(resultados){
//   console.log(resultados)
// });

//---update
// var id = 10;
// var actualizoEmpleado = {
//   nombre: 'Alonzo',
//   apellido: 'Church',
//   edad: '120'
// }
// pool.query('update empleados set ? where id_emp=?',[actualizoEmpleado,id]).then(function(resultados){
//   console.log(resultados)
// });

//---delete
// var id = 1;
// pool.query('delete from empleados where id_emp=?', [id]).then(function(resultados){
//   console.log(resultados)
// });
