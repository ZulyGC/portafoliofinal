const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
marca: String,
tipo: String,
color: String
});

module.exports = mongoose.model('venta', TaskSchema);