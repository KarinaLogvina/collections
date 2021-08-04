const express = require("express");
const app = express();

const db = require("./models");

const userRouter = require("./routes/Users");
app.use("/users", userRouter);

db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log("Serever running on port 3002");
    });
})


