const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const PORT = 3000;


const ADMIN_USER = "admin";
const ADMIN_PASSWORD = "kitkat";


app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
    return res.redirect("/hacked.html"); // success
  }
 
  return res.send("Invalid credentials"); // 200 OK
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
