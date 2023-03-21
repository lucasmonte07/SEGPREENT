import {Schema, model} from 'mongoose';

const cartCollection = "cart" // nombre de la colección

const cartSchema = new Schema({
    cdoprod: String,
    quantify: Number
}) 

export const cartModel = model(cartCollection, cartSchema)
