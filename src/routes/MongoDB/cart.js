import { Router } from 'express';
import ManagerCartMongoDB from '../../dao/controllers/MongoDB/MCManager.js'

const cartMDB = new ManagerCartMongoDB()

const routerCartMDB = Router()

routerCartMDB.get('/', async (req, res) => {    
    let limite = parseInt(req.query.limit);    
    if(!limite) return res.send(await cartMDB.getElements());
    let todos = await cartMDB.getElements();    
    let algunos = todos.slice(0, limite);
    res.send(await algunos);    
}) 

routerCartMDB.get('/:id', async (req, res) => {
    let todos = await cartMDB.getElemtents();    
    let queProducto = todos.find(prod => prod.id === parseInt(req.params.id));
    res.send(await queProducto)
})

routerCartMDB.delete('/:id', async (req, res) => {  
    await cartMDB.deleteElement(req.params.id);    
    res.send("Se registró la baja del producto");
})

routerCartMDB.post('/', async (req, res) => {  
    await cartMDB.addElements(req.body)
    res.send("Carrito creado");
})

routerCartMDB.put('/:id', async (req, res) => {     
    await cartMDB.updateElementById(req.params.id, req.body)
    res.send("Carrito Modificado");
})

export default routerCartMDB;