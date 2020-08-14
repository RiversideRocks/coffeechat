const mongoose = require("mongoose");
const sqreen = require('sqreen');


const channelSchema = new mongoose.Schema({
    message: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    participant: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    channel_name: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    channel_picture: {
        type: String,
        default: "/img/placeholder.png",
    },
  
   verified: {
        type: Boolean,
        default: false,
    },
   partnered: {
        type: Boolean,
        default: false,
    },
 
});

module.exports = mongoose.model("Channel", channelSchema);
