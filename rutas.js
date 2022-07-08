const router= require ('express').Router();
const conexion=require('./config/conexion')
//asignamos las rutas


//get
router.get('/',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let sql='select * from tb_equipo'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }

    })
})

// get equipo
router.get('/:id',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const{id}=req.params
    let sql='select * from tb_equipo where id_equipo=?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows);
        }

    })
})

//post

router.post('/',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const{nombre,logo}= req.body
    let sql=`insert into tb_equipo(nombre,logo) values ('${nombre}','${logo}')`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'equipo agregado'});
        }

    })
})

//delete

router.delete('/:id',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const{id}=req.params
    let sql= `delete from tb_equipo where id_equipo='${id}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'equipo eliminado'});
        }

    })
})

router.put('/:id',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const{id}=req.params;
    const{nombre,logo}=req.body;

    let sql=`update tb_equipo set 
            nombre='${nombre}',
            logo='${logo}'
            where id_equipo='${id}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
             res.json({status: 'equipo modificado'});
             }
        
        })
})

module.exports=router;