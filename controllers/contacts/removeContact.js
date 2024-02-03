const { Contact } = require("../../models");

const { HttpError } = require("../../utils")

const removeContact = async (request, response) => {
    const { contactId } = request.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
        throw HttpError(404, "Not found")
    }
    response.json({
        message: "Contact deleted"
    })
};

module.exports = removeContact;