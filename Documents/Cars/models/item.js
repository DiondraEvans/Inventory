const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    price: {type: Number},
    inventoryNum: {type: Number},
    date:   { type: Date, default: Date.now },
    amount: {type: Number},
    name: {type: String, required: true},
    img:{type: String}
});

//make an instance of the fruitSchema
const MyItem = mongoose.model('MyItem', itemsSchema);

module.exports = MyItem;
//should price be stored as a string in the database or a number? i think i can use toFixed to send it as a number with two decimal places.