const mongoose = require('mongoose');
require('dotenv').config();

const userSchema = mongoose.Schema({
    userName: { type: String, required: [true, 'userName is mandatory'], unique: true },
    password: { type: String, required: [true, 'Password is mandatory'] },
    emailId: { type: String, required: [true, 'emailId is mandatory'] },
    contactNo: { type: Number, required: [true, 'contactNo is mandatory'] }
})

const productSchema = mongoose.Schema({
    productId: { type: Number, unique: true },
    productName: { type: String, required: [true, 'productName is required'] },
    category: { type: String, required: [true, 'category is required'] },
    description: { type: String, required: [true, 'description is required'] },
    price: { type: Number, required: [true, 'price is required'] },
    rating: { type: Number, required: [true, 'rating is required'] },
    manufacturer: { type: String, required: [true, 'manufacturer is required'] }
})

let throwError = (message, statusCode) => {
    let err = new Error(message);
    err.status = statusCode
    throw err;
}

let connection = {}

connection.createConnection = () => {
    return mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
}


connection.getUserCollection = () => {
    return connection.createConnection().then((database) => {
        return database.model('Users', userSchema)
    }).catch((error) => {
        throwError('Database Connection Failed', 500)
    })
}

connection.getProductsCollection = () => {
    return connection.createConnection().then((database) => {
        return database.model('Products', productSchema)
    }).catch((error) => {
        throwError('Database Connection Failed', 500)
    })
}


module.exports = connection;



