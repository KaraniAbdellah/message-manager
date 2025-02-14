// Import Essentiel Packages
import 'dotenv/config';
import mongoose from "mongoose";
import app from "./routes/route.js";


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

