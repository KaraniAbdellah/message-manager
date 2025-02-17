// Start Setup The Model
import mongoose from "mongoose";


// Create New Schema
const User_Schema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    }
});

// Make The Model
const User = new mongoose.model("User", User_Schema);

// Export The User Mode || Collection
export default User;



