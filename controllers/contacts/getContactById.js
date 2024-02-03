const { Contact } = require("../../models");
const { HttpError } = require("../../utils");

const getContactById = async (request, response) => {
  const { contactId } = request.params;
    // const result = await Contact.findOne({ _id: contactId });
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(400, "Not found");
  }
  response.json(result);
};

module.exports = getContactById;
