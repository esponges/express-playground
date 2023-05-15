const setSession = (req, res, next) => {
  req.session.user = { username: 'John Doe', password: 'Foobar' };
  res.send('Session Set');
};

const getSession = (req, res, next) => {
  res.json(req.session);
};

const updateSession = (req, res, next) => {
  req.session.user.password = 'Barfoo';
  res.send(`User password updated to ${req.session.user.password}`);
};

module.exports = {
  setSession,
  getSession,
  updateSession,
};
