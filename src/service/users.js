const mFlixDb = require('../model/users');

const mFlixService = {};

/* Invoke this method to throw error with appropriate message and status code */
const throwError = (errMessage, errStatus) => {
    let err = new Error(errMessage);
    err.status = errStatus;
    throw err;
}

mFlixService.showMovies = async () => {
    /*
        1. Invoke showMovies() method of mFlixDb
        2. Check if it returns an array of movies,
        3. If not, throw error 'We have halted our services for upgrade!! Will be back soon' with status code 404
        4. else return the movies array
    */
}

mFlixService.findMovie = async (movieId) => {
    /*
        1. Invoke findMovie() method of mFlixDb by passing movie Id as a parameter
        2. Check if it returns a movie object for given movieId,
        3. If not, throw error 'Movie Not available for Booking Now' with status code 404
        4. else return the movie Object
    */
}


/* Books the required number of tickets for an existing movie */
mFlixService.bookTickets = async (userId, bookingObj) => {
    /*
        1. Invoke checkAvailibility() method of mFlixDb by passing bookingObj as parameter
        2. Check if the movie exists,
        3. If not, throw error 'Bookings are not open for this movie yet!!' with status code 404
        4. If seats are full, throw error 'Housefull!! Bookings Closed' with status code 404
        5. If required seats not available, throw error 'Only <<seats>> seats available' with status code 404
        6. Else, add the movie name and booking cost (nooftickets * movieCostPerTicket) to the booking object
        7. Invoke bookTicket() method of mFlixDb by passing userId and bookingObj as parameters
        8. In success case, return the bookingObj else throw error Booking Failed with status code 500
    */
}

/* Retrieves all the bookings made by an existing user */
mFlixService.previousBookings = async (userId) => {
    /*
        1. Invoke previousBookings() method of mFlixDb by passing userId as parameter
        2. Check if user data found,
        3. If not, throw error 'Please try again with a registered userId' with status code 403
        4. If no bookings done, throw error 'You havent booked with us yet' with status code 404
        5. else return the bookings array
    */
}

module.exports = mFlixService;