import mongoose from "mongoose";

// defining schema
const serviceSchema = new mongoose.Schema({
    name : {type : String, required : true},
    call : {type : Number, required : true},
    mail : {type : String, required : true},
    message : {type : String}
});

// Compiling schema
const serviceModel = mongoose.model('service', serviceSchema);

export default serviceModel;