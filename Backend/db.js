const mongoose = require("mongoose");

const DB = process.env.MONGO_URL;

module.exports = function (callback) {
    mongoose.connect(
        "mongodb://localhost:27017/Event",
        { useNewUrlParser: true },
        async (err, result) => {
            if (err) console.log("---" + err);
            else {
                console.log("connected to mongo");
                const foodCollection = await mongoose.connection.db.collection(
                    "food_items"
                );
                // foodCollection.find({}).toArray(async function (err, data) {
                //     const categoryCollection =
                //         await mongoose.connection.db.collection("Categories");
                //     categoryCollection
                //         .find({})
                //         .toArray(async function (err, Catdata) {
                //             if (err) console.log(err);
                //             else {

                //             }
                //         });
                // });
            }
        }
    );
};
