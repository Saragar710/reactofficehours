const { Schema, model} = require('mongoose');

const profileSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        trim: true
    }
    
})