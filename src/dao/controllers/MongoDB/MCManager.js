import mongoose from 'mongoose';
import { cartModel } from '../../../dao/models/MongoDB/Cart.js'

export default class ManagerCartMongoDB {    
     
    constructor(collection, schema) {
 //       this.#url = url;
        this.collection = "carts";
        this.schema = cartModel.schema
        this.model = mongoose.model(this.collection, this.schema)
    }

    /*    
    async #setConnection() {
        try {
            await mongoose.connect(this.#url)
            console.log("MongoDB connected")
        } catch(error) {
            console.log("Connection MongoDB failed", error)
            return error
        }
    }
    */

    async getElements() {
      //  this.#setConnection()
        try {
            const elements = await this.model.find()
            return elements
        } catch(error) {
            console.log("Error en consulta de elementos MongoDB", error)
        }
    }

    async addElements(elements) {
       // this.#setConnection()        
        try {
            const msgAdd = await this.model.insertMany(elements)            
            return msgAdd
        } catch(error) {
            console.log("Error al agregar elemento/s en MongoDB", error)
        }
    }

    // DEBO ADAPTAR ESTO PARA QUE FUNCIONE CON MONGODB
    /*
    addCartProd = async( cid, { codprod, quantify } ) => {
        //consulto si el carrito existe 
        let existcart = JSON.parse(await fs.readFile(this.cfile, 'utf-8'))        
        if(existcart.find(car => car.cid === parseInt(cid))) {

            //consulto si el producto existe
            let fileprod = JSON.parse(await fs.readFile(this.pfile, 'utf-8'))            
            if(fileprod.find(produ => produ.code == codprod)) {
                                       
                let tod = await this.getCart();        
                let queCart = tod.find(car => car.cid === parseInt(cid));
                let produ = queCart.productos            
            
                //consulto si ese producto ya existia en el carrito
                //si existia solo actualizo el quantify
                if(produ.find(pro => pro.codprod == codprod)) {
                    let indice = produ.findIndex(pro => pro.codprod == codprod);                    
                    let cuantos = produ[indice].quantify + quantify
                    produ[indice].quantify = cuantos                    
                } else {
                    //sino existia lo agrego en el carrito    
                    produ.push({codprod, quantify})                    
                }            
                
                //registro la operacion
                await fs.writeFile(this.cfile, JSON.stringify(tod))
        
            } else {
                console.log("El producto no existe")
            }
        } else {
            
            console.log("el carrito no existe")
            
        }    
    }
    */

    
    async getElementsById(id) {
       // this.#setConnection()        
        try {
            const element = await this.model.findById(id)
            return element
        } catch(error) {
            console.log("Error en consulta de elemento en MongoDB", error)
        }
    }

    async updateElementId(id, info) {
       // this.#setConnection()        
        try {
            const msgUpdate = await this.findByIdAndUpdate(id, info)
            return msgUpdate
        } catch(error) {
            console.log("Error en Update de elemento en MongoDB", error)
        }
    }

    async deleteElement(id) {
       // this.#setConnection()        
        try {
            const msgDelete = await this.model.findByIdAndRemove(id)
            return msgDelete
        } catch(error) {
            console.log("Error al eliminar elemento en MongoDB", error)
        }
    }
}