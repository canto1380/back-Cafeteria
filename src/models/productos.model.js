import mongoose, {Schema} from 'mongoose'

const productosSchema = new Schema({
    nombreProducto:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        maxlength:100
    },
    precio: {
        type: Number,
        trim: true,
        required: true
    },
    categoria:{
        type: String,
        trim: true,
        required: true,
        maxlength: 80
    }

})

const Producto = mongoose.model('producto', productosSchema)
export default Producto