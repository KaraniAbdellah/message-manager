// Import Essentiel Packages
import express from "express";
import 'dotenv/config';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import User from "./models/User.js";

// Start making The Routes
const app = express();
app.use(bodyParser.json());

app.get("/getUsers", async (req, res) => {
    console.log("Request Come From Axios for Getting Users");
    // Get The All User From Database
    try {
        const users = await User.find();
        res.status(201).json(users);
        console.log(users);
        console.log("✅ Success Get User");
    } catch (error) {
        console.log("❌ Failed Getting User" + error);
    }
});

app.delete("/deleteUser/:id", (req, res) => {
    console.log("Request Come From Axios for Deleting Users");
    console.log(req.body);
});

app.post("/postUser", async (req, res) => {
    console.log("Request Come From Axios for Posting Users");
    // Start Add User To DataBase
    const user = req.body;
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
        console.log("✅ Success Adding User");
    } catch (error) {
        console.log("❌ Failed Adding User" + error);
    }
});



// Connect To DataBase
mongoose.connect(process.env.USER_DB).then(() => {
    console.log("✅ Connect To Database Succefully");
}).catch((err) => {
    console.log("❌ Can Not Connect To DataBase" + err);
}); 



// Connect To Reast API
app.listen(process.env.PORT, () => {
    console.log(`✅ api listening to port ${process.env.PORT}`);
});
console.log(process.env.PORT);




