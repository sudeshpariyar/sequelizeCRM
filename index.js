const express = require("express");
const { sequelize, User } = require("./models");

const app = express();
app.use(express.json());

app.post("/users", (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    const user = User.create({ firstName, lastName, email });
    res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(err);
  }
});

app.listen(5000, async () => {
  console.log("listening on port 5000");
  await sequelize.authenticate();
  console.log("database connected");
});
