const Router = require('express').Router();


const portfolioController = require("../controllers/portfolioController");


const { fetchPortfolios } = portfolioController;

Router.route("/portfolio").get(fetchPortfolios);

// Router.route("/portfolio").post(postPortfolio);

module.exports = Router;