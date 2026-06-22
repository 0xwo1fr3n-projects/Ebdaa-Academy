exports.getCourses = async (req, res) => {

  res.json([
    {
      id: 1,
      title: "تطوير مواقع الويب",
      progress: 72
    },
    {
      id: 2,
      title: "تحليل البيانات",
      progress: 45
    }
  ]);

};