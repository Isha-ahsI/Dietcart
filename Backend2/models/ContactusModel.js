import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  message: { 
    type: String, 
    required: true 
  },
  
});



const contactusModel=mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default contactusModel;
