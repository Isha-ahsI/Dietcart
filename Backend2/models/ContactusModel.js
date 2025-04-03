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

// module.exports = mongoose.model("Contact", contactSchema);

const contactusModel=mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default contactusModel;
