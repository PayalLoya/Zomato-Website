const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../model/userModel");
const { response } = require("express");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Hello Everyone");
});

//get all users
router.get("/users", (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//register
router.post("/register", (req, res) => {
  User.find({ email: req.body.email }, (err, data) => {
    if (data.length > 0) {
      res.send("Email already taken");
    } else {
      //encrypt password
      let hashPassword = bcrypt.hashSync(req.body.password, 8);
      User.create(
        {
          name: req.body.name,
          email: req.body.email,
          password: hashPassword,
          phone: req.body.phone,
          role: req.body.role ? req.body.role : "User",
        },
        (err, result) => {
          if (err) return res.send("Error while registering");
          res.send("Registration Successfull");
        }
      );
    }
  });
});

//login
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.send({ auth: false, token: "Error while logging in" });
    if (!user) {
      return res.status(404).send({ auth: false, token: "No user found" });
    } else {
      const passIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passIsValid)
        return res
          .status(404)
          .send({ auth: false, token: "Invalid Credentials" });
      //generate token
      let token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400,
      });
      res.send({ message: "Successfully logged in", auth: true, token: token });
    }
  });
});

//userinfo
router.get("/userInfo", (req, res) => {
  let token = req.headers["x-auth-token"];
  if (!token) res.send({ auth: false, token: "No token provided" });
  //jwt verify
  jwt.verify(token, config.secret, (err, user) => {
    if (err) res.send({ auth: false, token: "Invalid token" });
    user.findById(user.id, (err, result) => {
      res.send(result);
    });
  });
});

module.exports = router;
