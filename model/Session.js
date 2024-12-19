const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    event_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
    },
    title: {type:String, required: true},
    start_time: {type:Date, required: true},
    end_time: {type:Date, required: true},
   speaker: {type:String, required: true},
    
});

    const Session = mongoose.model('session',sessionSchema)

    module.exports = Session;