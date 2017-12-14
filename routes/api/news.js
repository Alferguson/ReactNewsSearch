const router = require("express").Router();
const newsController = require("../../controllers/news_controller");

// Scrapes nyt for articles
router.route("/API")
	.get(newsController.findNews);

// Matches with "/api/news", displays or creates saved articles
router.route("/")
  	.get(newsController.findAll)
  	.post(newsController.create);

// Matches with "/api/news/:id", deletes a saved article
router
  	.route("/:id")
  	.get(newsController.findById)
  	.delete(newsController.remove);

module.exports = router;
