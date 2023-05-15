const mCartService = require("../service/users");

const verifyUser = async (req, res, next) => {
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

module.exports = {
  verifyUser
};
