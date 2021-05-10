const router = require("express").Router();
const verifyToken = require("./verifyToken");

router.get("/", verifyToken, (req, res) => {
  res.json({
    posts: { title: "My First Post", description: "random description" },
  });
});

module.exports = router;
