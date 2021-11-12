const express = require("express");
const router = express.Router();
const fiboController = require("../../controllers/fibo");

//the root route for this file is /api/v1/func

router.get("/fibo/:nb", (req, res) => {
  fiboController.fibo(req, res);
});



module.exports = router;
