import {mongoose} from "mongoose";
 const dietfoodSchema = mongoose.Schema(
    {
        dishname:{
            type: String,
            require : true,
        },
        description:{
            type:String,
            require : true,
        },
        dishprice:{
            type:Number,
            require:true,
        },
        image:{
            type:String,
            require:true,
        },
        category:{
            type:String,
            require:true,
        }
    }
 )

  export const Dietfood = mongoose.model('dietfood', dietfoodSchema);
  