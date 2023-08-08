const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    todo: {
      type: String,
      required: true,
      maxLength: 50
    },
    description: {
      type: Schema.Types.String,
      required: true,
      maxLength: 150
    },
    responsible: {
      type: Schema.Types.String,
      ref: "Responsible",
      required: true,
      maxLength: 50
    },
    dueData: {
      type: Date,
      default: new Date()
    },
    done: {
      type : Boolean,
      required: true,
      default: false
    }
})


module.exports = mongoose.model("todo", TodoSchema)

