const connection = require("../config/db");

const ud = (req, res) => {
  console.log("data", req.body);
  const { dname, sname, eggsale, amt, ramt, bal, pbal } = req.body;

  const store =
    "INSERT INTO user_update(dname,sname,eggsale,amt,ramt,bal,pbal) VALUES (?, ?, ?, ?, ?,?,?)";

  connection.query(
    store,
    [dname, sname, eggsale, amt, ramt, bal, pbal],
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      } else {
        console.log("Query result:", result);
        return res
          .status(200)
          .json({ success: true, message: "Data inserted successfully" });
      }
    }
  );
};
module.exports = { ud };
