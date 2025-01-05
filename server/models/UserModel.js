import mongoose from "mongoose";
import {genSalt} from "bcrypt"

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required: [true, 'Email is Required.'],
        unique: true,
    },
    password: {
        type:String,
        required: [true, 'Password is Required.'],
        unique: true,
    },
    firstName: {
        type:String,
        required: false,
    },
    lastName: {
        type:String,
        required: false,
    },
    image: {
        type:String,
        required: false,
    },
    color: {
        type:String,
        required: false,
    },
    profileSetup: {
        type: Boolean,
        deafault: false,
    }
    
});

userSchema.pre("save" , async function(next){
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
    next();
});

const User = mongoose.model('Users',userSchema);

export default User;