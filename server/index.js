const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

const userRouter = require("./routes/Users");
app.use("/register", userRouter);
app.use("/login", userRouter);

db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log("Serever running on port 3002");
    });
})


