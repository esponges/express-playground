const mCartService = require("../../service/users");

const login = async (req, res, next) => {
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
};


const register = async (req, res, next) => {
  try {
    let userData = req.body;
    let successResponse = await mCartService.register(userData);
    res.json(successResponse);
  } catch (err) {
    next(err);
  }
};

// const logout = (req, res, next) => {
//   res.clearCookie('userName');
//   res.clearCookie('password');
//   res.json({ message: 'User Logged out successfully' });
// };

const logout = async (req, res, next) => {
  try {
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.json({ message: 'User Logged out successfully' });
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  register,
  logout,
};
