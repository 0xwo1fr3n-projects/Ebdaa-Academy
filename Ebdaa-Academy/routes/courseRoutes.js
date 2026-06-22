const router = require("express").Router();

const auth = require("../middleware/auth");

router.get("/", auth, (req, res) => {
  res.json([
    {
      id: 1,
      title: "تطوير مواقع الويب من الصفر",
      progress: 72,
      lessons: 48,
      rating: 4.9
    },
    {
      id: 2,
      title: "تحليل البيانات مع Python",
      progress: 45,
      lessons: 32,
      rating: 4.7
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      progress: 88,
      lessons: 24,
      rating: 4.8
    }
  ]);
});

module.exports = router;