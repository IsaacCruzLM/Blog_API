const PASSWORD_INVALID = {
    message: '"password" is not allowed to be empty',
};

const PASSWORD_REQUIRED = {
    message: '"password" is required',
};

const EMAIL_INVALID = {
    message: '"email" is not allowed to be empty',
};

const EMAIL_REQUIRED = {
    message: '"email" is required',
};

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  if (email === '') return res.status(400).send(EMAIL_INVALID);
  if (!email) return res.status(400).send(EMAIL_REQUIRED);
  if (password === '') return res.status(400).send(PASSWORD_INVALID);
  if (!password) return res.status(400).send(PASSWORD_REQUIRED);

  next();
};