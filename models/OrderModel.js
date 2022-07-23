import mongoose  from "mongoose";


const OrderSchema = new mongoose.Schema({
    user : {type: String, required : true},
    address : {type: String, required : true},
    total : {type: Number, required : true},
    status : {type: Number, required : true, default :0}
}, {timestamps : true});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);