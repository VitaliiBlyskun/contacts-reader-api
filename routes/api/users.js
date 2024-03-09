const express = require("express");

const router = express.Router();

const { validateBody, authenticate, upload } = require("../../middlewares");

const { usersController } = require("../../controllers");
const { usersSchema } = require("../../schemas");

router.patch(
  "/",
  authenticate,
  validateBody(usersSchema.subscriptionUserSchema),
  usersController.subscriptionUser
);

// signup
router.post(
  "/register",
  validateBody(usersSchema.registrationUserSchema),
  usersController.register
);

// signin
router.post(
  "/login",
  validateBody(usersSchema.loginUserSchema),
  usersController.login
);

router.get("/current", authenticate, usersController.current);

router.post("/logout", authenticate, usersController.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  usersController.updateAvatar
);

router.get("/verify/:verificationToken", usersController.verificationUser);

router.post(
  "/verify",
  validateBody(usersSchema.verifyUserSchema),
  usersController.resendVerifyEmail
);

module.exports = router;
