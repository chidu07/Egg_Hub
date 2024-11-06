const connection = require("../config/db");

const logg = (req, res) => {
  const { email, pass, role } = req.body;
  if (role !== "admin" && role !== "user") {
    return res.status(400).json({ success: false, message: "Invalid role" });
  }
  const query =
    "SELECT * FROM register where email=? and password=? and role=? ";

  connection.query(query, [email, pass, role], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
    if (results.length > 0) {
      if (role === "admin") {
        return res.json({ success: true, message: "Admin login successful" });
      } else {
        return res.json({ success: true, message: "User login successful" });
      }
    } else {
      return res.json({
        success: false,
        message: "Invalid email, password, or role",
      });
    }
  });
};

module.exports = { logg };
