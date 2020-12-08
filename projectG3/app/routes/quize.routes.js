module.exports = (app) => {
  const quizes = require("../controllers/quize.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  // router.post("/", quizes.create);
  router.post("/addQuize", quizes.addQuize);
  router.get("/getCategoryName", quizes.getCategoryName);
  //Retrieve all Tutorials
  router.get("/", quizes.findAll);

  router.get("/:id", quizes.findOne);

  app.use("/api/quizes", router);
};
