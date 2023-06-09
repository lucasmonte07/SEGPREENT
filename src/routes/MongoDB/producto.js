import { Router } from 'express';
import ManagerProdMongoDB from '../../dao/controllers/MongoDB/MPManager.js'

const prodMDB = new ManagerProdMongoDB()

const routerProdMDB = Router()

routerProdMDB.get('/', async (req, res) => {    
    let limite = parseInt(req.query.limit);    
    if(!limite) return res.send(await prodMDB.getElements());
    let todos = await prodMDB.getElements();    
    let algunos = todos.slice(0, limite);
    res.send(await algunos);    
}) 

routerProdMDB.get('/:id', async (req, res) => {
    let todos = await prodMDB.getElemtents();    
    let queProducto = todos.find(prod => prod.id === parseInt(req.params.id));
    res.send(await queProducto)
})

routerProdMDB.delete('/:id', async (req, res) => {  
    await prodMDB.deleteElement(req.params.id);    
    res.send("Se registró la baja del producto");
})

routerProdMDB.post('/', async (req, res) => {  
    await prodMDB.addElements(req.body)
    res.send("Producto creado");
})

routerProdMDB.put('/:id', async (req, res) => {     
    await prodMDB.updateElementById(req.params.id, req.body)
    res.send("Producto Modificado");
})

export default routerProdMDB;