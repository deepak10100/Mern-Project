const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
const todoSchema = new Schema({
    title: { type: String},
    des: { type: String, },
    createAt: { type: Date, default: Date.now }, 
  });

let Todo = mongoose.model("Todo",todoSchema)
module.exports = Todo;