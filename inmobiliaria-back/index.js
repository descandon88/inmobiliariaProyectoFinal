const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();


 const userRoutes = require("./routes/userRoutes");
 const inmuebleRoutes = require("./routes/inmueblesRoutes")



const app = express();

//MIDDLEWARES
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors()); // esto se documenta
app.use(cors(`{origin:${process.env.CLIENT_URL}}`));


app.use("/api", userRoutes);
app.use("/api", inmuebleRoutes);


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});