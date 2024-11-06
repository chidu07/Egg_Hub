const connection = require("../config/db");

const du = (req, res) => {
  const query = "SELECT * FROM user_update";

  connection.query(query, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    res.status(200).json({ success: true, data: results });
  });
};
module.exports = { du };
