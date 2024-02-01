const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        minlength: [3, 'First name must be at least 3 characters long'],
        maxlength: [30, 'First name must not exceed 30 characters'],
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        minlength: [3, 'Last name must be at least 3 characters long'],
        maxlength: [30, 'Last name must not exceed 30 characters'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'Username must be unique'],
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [30, 'Username must not exceed 30 characters'],
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: [true, 'Email must be unique'],
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
    },
    isAdmin: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

module.exports = Mongoose.model('User', UserSchema);