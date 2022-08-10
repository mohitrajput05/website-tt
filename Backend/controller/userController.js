const jwt = require("jsonwebtoken");

require("dotenv").config();

const User = require('../model/userModel.js');

exports.register = (request, response) => {
  User.create
    (
      {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
      }
    ).then(result => {
      console.log(result)
      if (result) {
        console.log(process.env.EMAIL_TOKEN_KEY)
        console.log("hello");
        let varifyToken = jwt.sign(
          {
            emailVarification: {
              _id: result._id,
              email: result.email,
            }
          },
          process.env.EMAIL_TOKEN_KEY, {
          expiresIn: '24H',
        }
        );
        return response.status(200).json(result)
      } else {
        return response.status(500).json({ msg: "user is invalid" })
      }
    }).catch(err => {
      return response.status(401).json(err);
    })
}

exports.login = (request, response) => {
  User.findOne({ email: request.body.email }).then(result => {
    if (result) {
      const token = jwt.sign(
        {
          customer: {
            _id: result._id,
            email: result.email,
            name: result.name
          },
        },
        process.env.TOKEN_KEY, {
        expiresIn: "5D"
      }
      );
      result.token = token;
      console.log("token : ", token);
      return response.status(200).json({
        status: 'login-success',
        current_user: result,
        token: token
      });
    } else {
      return response.status(500).json({ msg: "Invalid Password." });
    }
  }).catch(err => {
    return response.status(500).json({ error: "email is invalid " });
  })
}