const { User } = require('../../../models');

// Regex retirado do cógido no link: <https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/>
const validateEmail = (email) => {
    const emailRegexp = /\S+@\S+\.\S+/;
    return emailRegexp.test(email);
};

const EMAIL_ALREAD_EXISTS = {
    message: 'User already registered',
};

const EMAIL_INVALID = {
    message: '"email" must be a valid email',
};

const EMAIL_REQUIRED = {
    message: '"email" is required',
};

module.exports = async (req, res, next) => {
  const { email } = req.body;

  const users = await User.findAll();
  const emails = users.map((user) => user.email);

  console.log(emails);

  if (emails.includes(email)) return res.status(409).send(EMAIL_ALREAD_EXISTS);
  if (!email) return res.status(400).send(EMAIL_REQUIRED);
  if (!validateEmail(email)) return res.status(400).send(EMAIL_INVALID);

  next();
};