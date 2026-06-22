exports.getUsers = async (req, res) => {

  res.json([
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed@example.com"
    },
    {
      id: 2,
      name: "سارة علي",
      email: "sara@example.com"
    }
  ]);

};