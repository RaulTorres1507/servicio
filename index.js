require('./config/conexion');

const express= require('express');
const rutas = require('./rutas');
const port =(process.env.port || 3000);

const app= express();
//admitir ripos dato
app.use(express.json());

app.set('port',port);

//rutas
app.use('/api',require('./rutas'))


//iniciar xpress

app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('error al iniciar servidor '+error);
    }else{
        console.log('Servidor iniciado en el puerto: '+port);
    }
})