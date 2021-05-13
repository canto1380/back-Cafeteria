import mongoose from 'mongoose'

const url = 'mongodb://localhost:27017/cafeteria'

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true // Evita los warning de actualizaciones de mongoose
});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('DB conectada')
})