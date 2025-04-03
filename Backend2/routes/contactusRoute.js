import express from "express";
import { submitContact } from "../controllers/ContactusControler.js"; 


const contactusrouter = express.Router();

contactusrouter.post("/submit", submitContact);

export default contactusrouter;
