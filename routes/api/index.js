const router = require("express").Router();
const envRoutes = require("./env");

// Env routes
router.use("/env", envRoutes);

module.exports = router;
