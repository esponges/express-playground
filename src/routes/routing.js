const express = require('express');
const router = express.Router();

const setupdb = require('../model/setupdb');
const mCartService = require('../service/users');
const { verifyUser } = require('../middlewares/user');
const { getAll, getById } = require('./products/callbacks');
const { setSession, getSession, updateSession, endSession } = require('./session/callbacks');
const { login, register, logout } = require('./auth/callbacks');

router.get('/setupdb', async (req, res, next) => {
  try {
    let successResponse = await setupdb();
    res.json(successResponse);
  } catch (err) {
    next(err);
  }
});

// auth
router.post('/login', login);
router.post('/register', register);
router.delete('/logout', logout);

// products
router.get('/products', verifyUser, getAll);
router.get('/products/:productId', verifyUser, getById);

// sessions
router.post('/session', setSession);
router.get('/session', getSession);
router.put('/session', updateSession);
router.delete('/session', endSession);

router.all('*', (req, res, next) => {
  res.json({ message: 'Invalid Request' });
});

module.exports = router;
