import mongoose  from "mongoose";

const OrderSchema = new mongoose.Schema({
    name : {type: String, required : true},
    address : {type: String, required : true},
    number : {type: String, required : true},
    city : {type: String, required : true},
    state : {type: String, required : true},
    user:{type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    cartItems : {type : Array},
    total : {type : Number},
    status : {type : String, default : "Pending"}
}, {timestamps : true});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);