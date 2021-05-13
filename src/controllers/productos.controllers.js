const cafeteriaCtrl = {};
import Producto from '../models/productos.model'

cafeteriaCtrl.getPrueba = (req, res)=>{
    res.send('Hola, Funciona')
}

cafeteriaCtrl.nuevoProducto = async (req,res) =>{
    try {
        const producto = new Producto(
            req.body
        )
        await producto.save();
        res.status(201).json({mensaje: "Producto agregado con exito"})
    } catch (error) {
        res.status(500).json({mensaje: "ERROR"})
        console.log(error)
    }
}

cafeteriaCtrl.listarProducto = async (req,res) =>{
    try {
        const arregloProductos = await Producto.find({categoria:'Salado'})
        res.status(200).json(arregloProductos) 
    } catch (error) {
        console.log(error)
        res.status(404).json({mensaje:"Error al listar los productos"})
    }
}
cafeteriaCtrl.eliminarProducto = async (req,res) =>{
    try {
        await Producto.findByIdAndDelete(req.params.id)
        // await Producto.findOneAndDelete({_id: req.params.id});
        res.status(200).json({mensaje:"Eliminado con exito"})
    } catch (error) {
        res.status(404).json({mensaje:"Error al eliminar el producto"})
    }
}
cafeteriaCtrl.editarProducto =async(req, res)=>{
    try {
        await Producto.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({mensaje:"Producto actualizado"})
    } catch (error) {
        console.log(error)
        res.status(404)
    }
}
cafeteriaCtrl.obtenerProducto = async(req,res) =>{
    try {
        const prod = await Producto.findById(req.params.id)
        res.status(200).json(prod)
    } catch (error) {
        console.log(error)
    }
}

export default cafeteriaCtrl