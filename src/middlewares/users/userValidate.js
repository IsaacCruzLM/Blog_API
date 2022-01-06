const DISPLAY_NAME_INVALID = {
    message: '"displayName" length must be at least 8 characters long',
};

const PASSWORD_INVALID = {
    message: '"password" length must be 6 characters long',
};

const PASSWORD_REQUIRED = {
    message: '"password" is required',
};

module.exports = async (req, res, next) => {
  const { displayName, password } = req.body;

  if (!displayName || displayName.length < 8) return res.status(400).send(DISPLAY_NAME_INVALID);
  if (!password) return res.status(400).send(PASSWORD_REQUIRED);
  if (password.length !== 6) return res.status(400).send(PASSWORD_INVALID);

  next();
};