const router = require("express").Router();

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.get(
  "/requests",
  auth,
  admin,
  (req, res) => {

    res.json([
      {
        id: 1,
        user: "أحمد محمد",
        browser: "Chrome",
        os: "Windows 11",
        status: "pending"
      },
      {
        id: 2,
        user: "سارة علي",
        browser: "Safari",
        os: "iPhone",
        status: "pending"
      }
    ]);

  }
);

router.post(
  "/requests/:id/approve",
  auth,
  admin,
  (req, res) => {

    res.json({
      success: true,
      message: "Device Approved"
    });

  }
);

router.post(
  "/requests/:id/reject",
  auth,
  admin,
  (req, res) => {

    res.json({
      success: true,
      message: "Device Rejected"
    });

  }
);

module.exports = router;