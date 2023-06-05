const connection = require('../utilities/connection');

const usersDb = [
    {
        userId: "tom123@gmail.com",
        userPassword: "tom-123"
    },
    {
        userId: "jerry123@gmail.com",
        userPassword: "jerry-123"
    }
]

const moviesDb = [
    {
        movieName: "Iron Man 2",
        movieCostPerTicket: 250,
        movieId: 1001,
        availability: 60
    },
    {
        movieName: "Fight Club",
        movieCostPerTicket: 300,
        movieId: 1002,
        availability: 2
    },
    {
        movieName: "Beautiful Mind",
        movieCostPerTicket: 200,
        movieId: 1003,
        availability: 10
    }
]

/* Sets up and Initializes the database */
let setupdb = async () => {
    let userModel = await connection.getUsersCollection();
    let deletedUsers = await userModel.deleteMany({})
    let insertedUsers = await userModel.insertMany(usersDb);
    let moviesModel = await connection.getMoviesCollection();
    let deletedMovies = await moviesModel.deleteMany({})
    let insertedMovies = await moviesModel.insertMany(moviesDb);
    if (insertedUsers.length && insertedMovies.length) return { "message": "Data initialised successfully" }
    else throw new Error("Data Initialization failed")
}

module.exports = setupdb;