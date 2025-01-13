import mongoose from "mongoose";
 const userSchema = mongoose.Schema(
    {
        userId:{
            type: String,
            require : true
        },
        username:{
            type: String,
            require : true
        },
        password:{
            type: String,
            require : true
        },
        cPassword:{
            type: String,
            require : true
        },
        email:{
            type: String,
            require : true
        }
    }
 )


 export const User = mongoose.model('user', userSchema);