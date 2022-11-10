import * as mongoose from "mongoose"

export const OperationsSchema = new mongoose.Schema({
    name: String,
    title: String,
    age: Number

})