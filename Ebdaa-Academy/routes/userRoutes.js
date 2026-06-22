const router = require("express").Router();

const auth = require("../middleware/auth");

router.get("/", auth, (req, res) => {
  res.json([
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed@example.com",
      status: "active"
    },
    {
      id: 2,
      name: "سارة علي",
      email: "sara@example.com",
      status: "active"
    }
  ]);
});

module.exports = router;