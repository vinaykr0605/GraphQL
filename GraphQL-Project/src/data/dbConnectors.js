import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contacts');

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String
    },
    company: {
        type: String
    }
});


const Contacts = mongoose.model('Contacts', contactSchema);

export { Contacts };