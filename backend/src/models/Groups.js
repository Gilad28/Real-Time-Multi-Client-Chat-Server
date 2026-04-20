import mongoose from "mongoose"

const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    isPublicRoom: {
        type: Boolean,
        default: false,
    },
    roomKey: {
        type: String,
        default: null,
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    groupName: {
        type: String,
        default: "Group Chat"
    },
},
    { timestamps: true}
)

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;