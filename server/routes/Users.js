const express = require("express");
const router = express.Router();
const axios = require("axios");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { Users } = require("../models");

router.post("/", async (req, res) => {
    const { username, mail, password } = req.body;
    bcrypt.hash(password, saltRounds).then((hash) => {
        Users.create({
            username: username,
            mail: mail,
            status: "active",
            password: hash,
            role: "user",
        })
    })
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username: username } });

    if (!user) {
        res.json({ error: "User Doesn't Exist" })
    } else {
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                res.json({ error: "Wrong Username And Password Compinetion" })
            } else {
                // const accessToken = sign({ username: user.username, id: user.id }, "auth");
                res.json("accessToken");
            }
        })
    }
})

module.exports = router;