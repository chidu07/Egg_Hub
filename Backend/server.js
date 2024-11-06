const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const connection = require("./config/db");
const port = 8000;
app.use(cors());
app.use(bodyParser.json());

const temp = require("./routes/regroute");
app.use("/api/signup", temp);

const logg = require("./routes/loginroute");
app.use("/api/logg", logg);

const ta = require("./routes/addeggrateroute");
app.use("/api/addegg", ta);

const adriver = require("./routes/getdriverroute");
app.use("/api/getdriver", adriver);

const ud = require("./routes/updatedriverroute");
app.use("/api/updateddriver", ud);

const er = require("./routes/dispeggrateroute");
app.use("/api/dispegg", er);

const du = require("./routes/driverupdateroute");
app.use("/api/driverupdates", du);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
