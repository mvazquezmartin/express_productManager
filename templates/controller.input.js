const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("inputsBtn.handlebars");
});

module.exports = router;
