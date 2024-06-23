const { Schema, model, Types } = require("mongoose"); //types for relation

const volcanoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    elevation: {
        type: Number,
        required: true,
    },

    lastEruption: {
        type: Number,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },
    typeVolcano: {
        type: [
            `Supervolcanoes`,
            `Submarine`,
            `Subglacial`,
            `Mud`,
            `Stratovolcanoes`,
            `Shield`,
        ],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    voteList: {
        type: [Types.ObjectId],
        required: true,
        ref: "User",
    },
    owner: {
        type: Types.ObjectId,
        ref: "User",
    },
});

const Volcano = model("Volcano", volcanoSchema);

module.exports = { Volcano };