const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/Query", async (req, res) => {
    try {
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            Query: req.body.Query,
        });
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});

module.exports = router;