const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

const ADMIN_PASSWORD = "123123123";

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === ADMIN_PASSWORD) {
    return res.redirect("/hacked.html");
  }

  return res.status(401).send("Invalid credentials");
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);
