const express = require("express");

const router = express.Router();

const { contactsController } = require("../../controllers");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { contactsSchema } = require("../../schemas");

router.get("/", authenticate, contactsController.listContacts);

router.get("/favorite", authenticate, contactsController.favoriteListContacts);

router.get("/:contactId", authenticate, isValidId, contactsController.getContactById);

router.post("/", authenticate, validateBody(contactsSchema.addContactSchema), contactsController.addContact);

router.delete("/:contactId", authenticate, isValidId, contactsController.removeContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(contactsSchema.addContactSchema),
  contactsController.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(contactsSchema.updateFavoriteContactSchema),
  contactsController.updateStatusContact
);

module.exports = router;
