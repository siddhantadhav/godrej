const express = require('express')
const path = require('path');

require('./db/conn');
const Register = require('./models/registers')

const app = express();
const port = process.env.PORT || 3000;

var file = path.join(__dirname, '../public');

app.use(express.static(file))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", function (req, res) {
  res.sendFile(file);
});


app.post("/", async (req, res) => {
  const name = req.body.name;
  const contact = req.body.contact;
  const email = req.body.email;
  const country = req.body.country

  try {
    const register_user = new Register({
      name: name,
      email: email,
      contact: contact,
      country: country
    })

    const registered = await register_user.save();
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error);
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})