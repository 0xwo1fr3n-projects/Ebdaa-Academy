exports.getRequests = async (req, res) => {

  res.json([
    {
      id: 1,
      user: "أحمد محمد",
      browser: "Chrome",
      status: "pending"
    }
  ]);

};

exports.approveRequest = async (req, res) => {

  res.json({
    success: true,
    message: "Device Approved"
  });

};

exports.rejectRequest = async (req, res) => {

  res.json({
    success: true,
    message: "Device Rejected"
  });

};