import mongoose from 'mongoose';

//defining schema using mongoose.schema
const EmailSchema = mongoose.Schema({
    //schema specifies the structure of email document in mongodb.
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    subject: String,
    body: String,
    date: {
        type: Date,
        required: true
    },
    image: String,
    name: {
        type: String,
        required: true
    },
    starred: {
        type: Boolean,
        required: true,
        default: false
    },
    bin: {
        type: Boolean,
        required: true,
        default: false
    },
    type: {
        type: String,
        required: true,
    }
})

//creating model using mongoose.model
const email = mongoose.model('emails', EmailSchema);
//the model is associated with emails collection and follows the structure defined by emailschema.

export default email;