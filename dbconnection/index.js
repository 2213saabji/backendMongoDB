const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://2213saabji:go.ha.av123@projectonedatabase.ugaazg0.mongodb.net/backendmongopracdatabase")
.then(() => {
    console.log(`database connection successful`);
})
.catch((err) => {
    console.log(`error: ${err.message}`);
})