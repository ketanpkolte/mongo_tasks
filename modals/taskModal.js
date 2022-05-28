const mongoose = require ('mongoose');

const taskSchema = mongoose.Schema({
  task:{
    type: String,
    required: true,
  },
  status:{
    type: Boolean,
    Default: false,
  }
});

module.exports = mongoose.model('task', taskSchema)