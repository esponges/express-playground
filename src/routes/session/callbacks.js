const setSession = (req, res, next) => {
  req.session.user = { username: 'John Doe', password: 'Foobar' };
  res.send('Session Set in the DB');
};

const getSession = (req, res, next) => {
  res.json(req.session);
};

const updateSession = (req, res, next) => {
  req.session.user.password = 'Barfoo';
  res.send(`User password updated to ${req.session.user.password}`);
};

const endSession = (req, res, next) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.send('Session Destroyed');
  });
};

const refreshSession = (req, res, next) => {
  req.session.regenerate((err) => {
    if (err) {
      res.json({ message: 'Session could not be refreshed' });
    } else {
      req.session.username = 'Foowie boo';
      res.json({ message: 'Session refreshed' });
    }
  });
};

module.exports = {
  setSession,
  getSession,
  updateSession,
  endSession,
  refreshSession,
};
