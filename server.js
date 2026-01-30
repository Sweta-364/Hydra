const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const PORT = 3000;

/*
  intentionally weak demo credentials
*/
const ADMIN_USER = "admin";
const ADMIN_PASSWORD = "baseball";

/*
  HYDRA FRIENDLY LOGIN
  IMPORTANT:
  - always 200 status
  - failure text only
*/
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
    return res.redirect("/hacked.html"); // success
  }

  // DO NOT send 401
  return res.send("Invalid credentials"); // 200 OK
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
