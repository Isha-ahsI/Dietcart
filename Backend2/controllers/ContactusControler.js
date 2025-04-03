import contactusModel from "../models/ContactusModel.js";

// Submit a contact message
const submitContact = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const newContact = new contactusModel({ name, email, message });
        await newContact.save();

        res.json({ success: true, message: "Message submitted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error submitting message" });
    }
};

export { submitContact };
