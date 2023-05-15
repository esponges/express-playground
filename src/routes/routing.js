const express = require('express');
const router = express.Router();
const setupdb = require('../model/setupdb');
const mCartService = require('../service/users');
const { setSession, getSession, updateSession } = require('./session');

router.get('/setupdb', async (req, res, next) => {
  try {
    let successResponse = await setupdb();
    res.json(successResponse);
  } catch (err) {
    next(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    let username = req.body.userName;
    let password = req.body.password;
    let successResponse = await mCartService.login(username, password);
    res.cookie('userName', username);
    res.cookie('password', password);
    res.json(successResponse);
  } catch (err) {
    next(err);
  }
});

router.post('/register', async (req, res, next) => {
  try {
    let userData = req.body;
    let successResponse = await mCartService.register(userData);
    res.json(successResponse);
  } catch (err) {
    next(err);
  }
});

let verifyUser = async (req, res, next) => {
  let username = req.cookies.userName;
  let password = req.cookies.password;
  try {
    let successResponse = await mCartService.login(username, password);
    if (successResponse) next();
  } catch (err) {
    let error = new Error('Please Login to continue');
    error.status = 403;
    next(error);
  }
};

router.get('/products', verifyUser, async (req, res, next) => {
  try {
    let products = await mCartService.getAllProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/product/:productId', verifyUser, async (req, res, next) => {
  try {
    let productId = req.params.productId;
    let productDetails = await mCartService.getProductById(productId);
    res.json(productDetails);
  } catch (err) {
    next(err);
  }
});

router.delete('/logout', (req, res, next) => {
  res.clearCookie('userName');
  res.clearCookie('password');
  res.json({ message: 'User Logged out successfully' });
});

router.all('*', (req, res, next) => {
  res.json({ message: 'Invalid Request' });
});

router.post('/session', setSession);
router.get('/session', getSession);
router.put('/session', updateSession);

module.exports = router;
