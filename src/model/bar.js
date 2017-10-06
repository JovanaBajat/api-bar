import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let BarSchema = new Schema({
    name : String
})

module.exports = mongoose.model('Bar', BarSchema);
