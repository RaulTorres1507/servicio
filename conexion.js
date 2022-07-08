const mysql= require('mysql');
const conexion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'rtorres',
    port: '3306',
    database: 'db_basico'
});

conexion.connect((err)=>{
    if(err){
        console.log('Hay un error: '+err)
    }else{
        console.log('Base de datos conectada')
    }
});

module.exports=conexion;