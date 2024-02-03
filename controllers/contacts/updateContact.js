const { Contact } = require("../../models");

const { HttpError } = require("../../utils");

const updateContact = async (request, response) => {
  const { contactId } = request.params;
  const result = await Contact.findByIdAndUpdate(contactId, request.body, {new: true});
  if (!result) {
    throw HttpError(404, "Not found");
  }
  response.json(result);
};

module.exports = updateContact;
