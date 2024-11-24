import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    chats: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chat",
        }],
});
export default mongoose.model("User", userSchema);
//# sourceMappingURL=User.modal.js.map