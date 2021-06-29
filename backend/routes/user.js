const router = require("express").Router();
let user = require("../models/user.model");

//get all users
router.route("/").get((req, res) => {
  user.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add a user
router.route("/add").post((req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const phone = req.body.phone;
  const city = req.body.city;
  const state = req.body.state;
  const country = req.body.country;
  const qualification = req.body.qualification;
  

  const newUser = new user({
    email,
    name,
    phone,
    city,
    state,
    country,
    qualification,

   
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  user.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
