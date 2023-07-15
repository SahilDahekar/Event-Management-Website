const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
    },
    Query: {
        type: String,
        default: Date.now,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("feedback", UserSchema);