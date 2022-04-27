const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    image:{type:String ,required:true},
    
})
const Portfolio = mongoose.model('portfolios',portfolioSchema);

module.exports = Portfolio;

