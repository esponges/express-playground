const connection = require('../utilities/connection');

let mFlixDb = {}

mFlixDb.showMovies = async () => {
    /*
        1. Invoke getMoviesCollection() to create movie model instance
        2. Fetch the movies array and return the same
        3. If not found, return null
    */
}

mFlixDb.findMovie = async (movieId) => {
    /*
        1. Invoke getMoviesCollection() to create movie model instance
        2. Fetch the movie data for given movie Id and return the same
        3. If not found, return null
    */
}

/* Checks if the request movie for booking exists or not */
mFlixDb.checkAvailibility = async (bookingObj) => {
    /*
        1. Invoke getMoviesCollection() to create movie model instance
        2. Fetch the movie data for given movie Id and return the same
        3. If not found, return null
    */
}

/* Generates a new bookingId every time a new booking is done */
mFlixDb.generateBookingId = async () => {
    let userModel = await connection.getUsersCollection();
    let bookingIds = await userModel.distinct("bookings.bookingId");
    let max_booking_Id = Math.max(...bookingIds);
    if (max_booking_Id > 0) return max_booking_Id + 1;
    else return 2001;
}

/* Books the required number of tickets for an existing movie */
mFlixDb.bookTicket = async (userId, bookingObj) => {
    /*
       1. Invoke getUsersCollection() and getMoviesCollection() to create user and movie model instance
       2. Generate a new booking Id by invoking generateBookingId() method
       3. Update the number of seats available by reducing the tickets booked
       4. add the booking Object to users bookings Array
       5. Return the bookingObj in success case, else return null
   */
}

/* Retrieves all the bookings made by an existing user */
mFlixDb.previousBookings = async (userId) => {
    /*
       1. Invoke getUsersCollection() to create user model instance
       2. Fetch the bookings data for given user Id and return the same
       3. If not found, return null
   */
}

module.exports = mFlixDb;

