import mongoose from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    speciality:{
        type:String,
        required:true
    }
},{
    timestamps:true,
})

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor