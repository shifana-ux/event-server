const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    
    title: {type:String, required: true},
    description: {type:String, required: true},
    date: {type:Date},
    location: {type:String},
    
   
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;