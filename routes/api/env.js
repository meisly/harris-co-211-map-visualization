const router = require("express").Router();

// Matches with "/api/env"
router.route("/:var")
  .get(function (req, res) {
    res.json({
      key: req.params.var,
      val: process.env[req.params.var]
    });
  });

module.exports = router;
