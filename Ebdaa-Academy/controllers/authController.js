const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {

  const { email, password } = req.body;

  if (
    email === "admin@ebdaa.com" &&
    password === "123456"
  ) {

    const token = jwt.sign(
      {
        email,
        role: "admin"
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    return res.json({
      token
    });
  }

  return res.status(400).json({
    message: "Invalid Credentials"
  });
};