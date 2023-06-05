const express = require('express');
const router = express.Router();
const setupdb = require('../model/setupDb');
const mFlixService = require('../service/users');

/* Sets up and Initializes the database */
router.get('/setupdb', async (req, res, next) => {
    try {
        let successResponse = await setupdb();
        res.json(successResponse)
    } catch (err) {
        next(err)
    }
});

/* Retrieves all the movies available for booking */
router.get('/movies', async (req, res, next) => {
    /*
        1. Invoke the showMovies method of mFlixService 
        2. Send the data returned as response
        3. handle the error cases appropriately
    */
})

/* Retrieves a selected movie using the movie Id */
router.get('/movie/:movieId', async (req, res, next) => {
    /*
        1. Invoke the findMovie method of mFlixService by passing the movieId from req. URL as parameters
        2. Send the data returned as response
        3. handle the error cases appropriately
    */
})

/* Retrieves all the bookings made by an existing user */
router.get('/bookings/:id', async (req, res, next) => {
    /*
        1. Invoke the previousBookings method of mFlixService by passing the userId from req. URL as parameters
        2. Send the data returned as response
        3. handle the error cases appropriately
    */
});

/* Books the required number of tickets for an existing movie */
router.put('/book/:userId', async (req, res, next) => {
    /*
        1. Invoke the bookTickets method of mFlixService by passing 
           the userId from req. URL and bookingObj from request body as parameters 
        2. Send the given message as response
           { message: "Booking Successful!! Booking Id: <<bookingId>>, You need to Pay: <<bookingCost>>` }
        3. handle the error cases appropriately
    */
});

/* send a 400 Response to the user with message Invalid Request for any other request URLs which are not mentioned here */

module.exports = router;
