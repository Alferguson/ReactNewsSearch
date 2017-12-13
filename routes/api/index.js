const router = require("express").Router();
const newsRoutes = require("./news");

// Book routes
router.use("/news", newsRoutes);

module.exports = router;
