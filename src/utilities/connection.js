const mongoose = require('mongoose');

let connectingOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

const movieSchema = new mongoose.Schema({
    movieName: { type: String, required: [true, 'movieName is mandatory'], unique: true },
    movieCostPerTicket: { type: Number, required: [true, 'Cost is mandatory'] },
    movieId: { type: Number, required: [true, "Id is mndatory"], unique: true },
    availability: { type: Number, required: [true, "Availability is important"] },
});

const bookingSchema = new mongoose.Schema({
    movieName: { type: String, required: [true, 'movieName is mandatory'] },
    movieId: { type: Number, required: [true, "Movie Id is mndatory"] },
    bookingId: { type: Number, required: [true, "Booking Id is mndatory"] },
    noOfTickets: { type: Number, required: [true, 'Seats cannot be 0'] },
    bookingCost: { type: Number, min: [1, 'Booking Cost must be a valid positive integer'] }
});

const userSchema = new mongoose.Schema({
    userId: { type: String, unique: true, required: [true, 'userId is mandatory'] },
    userPassword: { type: String, unique: true, required: [true, 'Password is mandatory'] },
    bookings: { type: [bookingSchema], default: [] }
});

let connection = {}

connection.createConnection = () => {
    return mongoose.connect('mongodb://localhost:27017/movieFlixDB', connectingOptions)
}

/* Establishes connection to the movieFlixDB the returns Movies Model */
connection.getMoviesCollection = async () => {
    try {
        let database = await connection.createConnection();
        let movieModel = await database.model('Movies', movieSchema);
        return movieModel;
    } catch (err) {
        throwError('Database Connection Failed', 500)
    }
}

/* Establishes connection to the movieFlixDB the returns Users Model */
connection.getUsersCollection = async () => {
    try {
        let database = await connection.createConnection();
        let userModel = await database.model('Users', userSchema);
        return userModel;
    } catch (err) {
        throwError('Database Connection Failed', 500)
    }
}

module.exports = connection;