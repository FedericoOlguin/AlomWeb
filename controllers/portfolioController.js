const Portfolio = require("../models/Portfolio");

const portfolioController = {
  fetchPortfolios: async (req, res) => {
    let portfolios,
      error = null;
    try {
      portfolios = await Portfolio.find(req.query);
    } catch (error) {
      console.error(error);
    }
    res.json({
      content: error ? error : { portfolios },
      success: error ? false : true,
    });
  },
  // postTarea: async (req, res) => {

  //   let savedTarea, error = null;
  //   const { fecha, creador, estado, tarea } = req.body.objProd;
  //   const tareaNueva = {
  //     fecha,
  //     creador,
  //     estado,
  //     tarea
  //   }
  //   try {
  //     savedTarea = await new Tareas(tareaNueva).save();
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   res.json({
  //     response: error ? error : savedTarea,
  //     success: error ? false : true
  //   }
  //   );
  // },
};

module.exports = portfolioController;
